import express from 'express';
import { GoogleGenAI, GenerateVideosOperation } from '@google/genai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// 1. Start Veo 3 Video Generation
app.post('/api/generate-video', async (req, res) => {
  try {
    const { prompt, aspectRatio = '9:16', resolution = '720p' } = req.body;
    const operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || 'A cinematic woodworking masterclass clip highlighting master joinery',
      config: {
        numberOfVideos: 1,
        resolution: resolution, // '720p' or '1080p'
        aspectRatio: aspectRatio // '16:9' or '9:16'
      }
    });
    res.json({ operationName: operation.name });
  } catch (error: any) {
    console.error('Error starting video generation:', error);
    res.status(500).json({ error: error.message || 'Failed to start video generation' });
  }
});

// 2. Poll Veo 3 Video Status
app.post('/api/video-status', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'Operation name is required' });
    }
    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });
    res.json({ done: updated.done, error: updated.error });
  } catch (error: any) {
    console.error('Error polling video status:', error);
    res.status(500).json({ error: error.message || 'Failed to poll status' });
  }
});

// 3. Download Completed Veo 3 Video Stream
app.post('/api/video-download', async (req, res) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'Operation name is required' });
    }
    const op = new GenerateVideosOperation();
    op.name = operationName;
    const updated = await ai.operations.getVideosOperation({ operation: op });
    
    if (!updated.done) {
      return res.status(400).json({ error: 'Video generation not yet complete' });
    }
    
    const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
    if (!uri) {
      return res.status(404).json({ error: 'Video URI not found in completed operation' });
    }
    
    const activeApiKey = process.env.GEMINI_API_KEY;
    const videoRes = await fetch(uri, {
      headers: { 'x-goog-api-key': activeApiKey || '' },
    });
    
    if (!videoRes.ok) {
      return res.status(500).json({ error: `Failed to fetch video from storage: ${videoRes.statusText}` });
    }
    
    res.setHeader('Content-Type', 'video/mp4');
    const reader = videoRes.body?.getReader();
    if (!reader) {
      return res.status(500).json({ error: 'Video stream reader unavailable' });
    }
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
    res.end();
  } catch (error: any) {
    console.error('Error downloading video:', error);
    res.status(500).json({ error: error.message || 'Failed to download video' });
  }
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  
  app.use(vite.middlewares);
  
  const PORT = Number(process.env.PORT) || 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
