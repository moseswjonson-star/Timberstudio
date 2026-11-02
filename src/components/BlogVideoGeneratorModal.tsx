import React, { useState, useEffect } from 'react';
import { X, Video, Sparkles, Film, Download, ArrowRight, Play, RefreshCw, CheckCircle, AlertCircle, Smartphone, Monitor } from 'lucide-react';
import { BLOG_POSTS } from '../data/woodworkingData';

interface BlogVideoGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialArticleId?: string;
}

export const BlogVideoGeneratorModal: React.FC<BlogVideoGeneratorModalProps> = ({
  isOpen,
  onClose,
  initialArticleId
}) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(
    initialArticleId || BLOG_POSTS[0]?.id || ''
  );
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [useCustom, setUseCustom] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9'>('9:16');
  const [resolution, setResolution] = useState<'720p' | '1080p'>('1080p');

  const [status, setStatus] = useState<'idle' | 'generating' | 'polling' | 'completed' | 'error'>('idle');
  const [progressMessage, setProgressMessage] = useState<string>('');
  const [operationName, setOperationName] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const loadingSteps = [
    'Analyzing blog key takeaways & drafting 30s storyboard...',
    'Initializing Veo 3 video model (veo-3.1-fast-generate-preview)...',
    'Rendering realistic wood grain, studio lighting & cinematic camera motion...',
    'Assembling 1080p MP4 video stream...'
  ];

  useEffect(() => {
    if (initialArticleId) {
      setSelectedArticleId(initialArticleId);
    }
  }, [initialArticleId]);

  // Polling effect when operationName is set
  useEffect(() => {
    if (status !== 'polling' || !operationName) return;

    let timer: any;
    let stepIndex = 1;
    
    const intervalTime = 4000; // poll every 4s

    const poll = async () => {
      try {
        setProgressMessage(loadingSteps[Math.min(stepIndex, loadingSteps.length - 1)]);
        stepIndex = (stepIndex + 1) % loadingSteps.length;

        const res = await fetch('/api/video-status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ operationName })
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Failed to check video status');
        }

        if (data.done) {
          if (data.error) {
            throw new Error(data.error.message || 'Video generation failed on server');
          }
          // Fetch download stream
          const downloadRes = await fetch('/api/video-download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ operationName })
          });

          if (!downloadRes.ok) {
            const errJson = await downloadRes.json();
            throw new Error(errJson.error || 'Failed to download generated video');
          }

          const blob = await downloadRes.blob();
          const url = URL.createObjectURL(blob);
          setVideoUrl(url);
          setStatus('completed');
          return;
        }

        // Continue polling
        timer = setTimeout(poll, intervalTime);
      } catch (err: any) {
        console.error(err);
        setErrorMessage(err.message || 'Error during video rendering');
        setStatus('error');
      }
    };

    timer = setTimeout(poll, 2000);

    return () => clearTimeout(timer);
  }, [status, operationName]);

  const handleStartGeneration = async () => {
    setStatus('generating');
    setErrorMessage('');
    setVideoUrl('');
    setProgressMessage('Initializing Veo 3 AI video generator (veo-3.1-fast-generate-preview)...');

    let promptText = customPrompt;
    if (!useCustom) {
      const art = BLOG_POSTS.find(a => a.id === selectedArticleId);
      if (art) {
        promptText = `Cinematic vertical b-roll of woodworking masterclass: ${art.title}. Focus on hand tools, precision joinery, flying sawdust illuminated by warm studio light, heirloom craftsmanship.`;
      } else {
        promptText = 'Cinematic woodworking masterclass with fine hardwood and precision tools.';
      }
    }

    try {
      const res = await fetch('/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          aspectRatio,
          resolution
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to start video generation');
      }

      setOperationName(data.operationName);
      setStatus('polling');
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || 'Failed to initialize video generation');
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  const currentArticle = BLOG_POSTS.find(a => a.id === selectedArticleId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-700 rounded-2xl shadow-2xl overflow-hidden text-stone-100 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white shadow-lg">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif text-stone-100 flex items-center gap-2">
                AI Short Video Generator <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-sans font-semibold border border-amber-500/30">Veo 3 Powered</span>
              </h2>
              <p className="text-xs text-stone-400">Transform woodworking blogs & guides into stunning 1080p social media videos instantly</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {status === 'idle' || status === 'error' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column: Source Selection */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-stone-300">Source Content</label>
                  <div className="flex bg-stone-800 p-1 rounded-lg text-xs">
                    <button
                      onClick={() => setUseCustom(false)}
                      className={`px-3 py-1 rounded-md transition-colors ${!useCustom ? 'bg-amber-600 text-white font-medium' : 'text-stone-400 hover:text-stone-200'}`}
                    >
                      From Blog Post
                    </button>
                    <button
                      onClick={() => setUseCustom(true)}
                      className={`px-3 py-1 rounded-md transition-colors ${useCustom ? 'bg-amber-600 text-white font-medium' : 'text-stone-400 hover:text-stone-200'}`}
                    >
                      Custom Prompt
                    </button>
                  </div>
                </div>

                {!useCustom ? (
                  <div className="space-y-3">
                    <select
                      value={selectedArticleId}
                      onChange={(e) => setSelectedArticleId(e.target.value)}
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none focus:border-amber-500"
                    >
                      {BLOG_POSTS.map(art => (
                        <option key={art.id} value={art.id}>
                          {art.title} ({art.readTime})
                        </option>
                      ))}
                    </select>

                    {currentArticle && (
                      <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800 space-y-2">
                        <div className="text-xs uppercase tracking-wider text-amber-500 font-semibold">{currentArticle.category}</div>
                        <h4 className="text-sm font-semibold text-stone-200">{currentArticle.title}</h4>
                        <p className="text-xs text-stone-400 line-clamp-3">{currentArticle.excerpt}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2">
                    <textarea
                      rows={5}
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      placeholder="Describe the woodworking video scene in detail (e.g., Close up of Japanese dozuki saw cutting dovetails in quarter-sawn walnut, sawdust flying in slow motion, warm workshop pendant lighting)..."
                      className="w-full bg-stone-800 border border-stone-700 rounded-xl p-4 text-sm text-stone-200 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>
                )}
              </div>

              {/* Right Column: Format & Settings */}
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-semibold text-stone-300 block mb-2">Video Format & Aspect Ratio</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setAspectRatio('9:16')}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${
                        aspectRatio === '9:16'
                          ? 'bg-amber-600/20 border-amber-500 text-amber-300'
                          : 'bg-stone-800/50 border-stone-700 text-stone-400 hover:border-stone-600'
                      }`}
                    >
                      <Smartphone className="w-6 h-6 mb-2" />
                      <span className="font-semibold text-sm">9:16 Vertical</span>
                      <span className="text-[10px] text-stone-400">TikTok, Instagram Reels, Shorts</span>
                    </button>

                    <button
                      onClick={() => setAspectRatio('16:9')}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${
                        aspectRatio === '16:9'
                          ? 'bg-amber-600/20 border-amber-500 text-amber-300'
                          : 'bg-stone-800/50 border-stone-700 text-stone-400 hover:border-stone-600'
                      }`}
                    >
                      <Monitor className="w-6 h-6 mb-2" />
                      <span className="font-semibold text-sm">16:9 Landscape</span>
                      <span className="text-[10px] text-stone-400">YouTube Masterclass, Website</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-stone-300 block mb-2">Resolution & Model</label>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-800/50 border border-stone-700">
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold text-stone-200">Veo 3 Fast Preview</div>
                      <div className="text-[11px] text-stone-400">Model: veo-3.1-fast-generate-preview</div>
                    </div>
                    <select
                      value={resolution}
                      onChange={(e: any) => setResolution(e.target.value)}
                      className="bg-stone-900 border border-stone-700 rounded-lg px-3 py-1.5 text-xs text-stone-200 focus:outline-none"
                    >
                      <option value="1080p">1080p HD</option>
                      <option value="720p">720p Fast</option>
                    </select>
                  </div>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-950/50 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  onClick={handleStartGeneration}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold shadow-lg shadow-amber-900/40 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Generate Short Video Now</span>
                </button>
              </div>

            </div>
          ) : status === 'generating' || status === 'polling' ? (
            <div className="py-16 flex flex-col items-center justify-center text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-amber-600/20 border-t-amber-500 animate-spin flex items-center justify-center">
                  <Video className="w-8 h-8 text-amber-400 animate-pulse" />
                </div>
              </div>
              <div className="space-y-2 max-w-md">
                <h3 className="text-lg font-bold text-stone-100">Rendering Woodworking Short...</h3>
                <p className="text-sm text-amber-400 font-medium animate-pulse">{progressMessage}</p>
                <p className="text-xs text-stone-500">Veo 3 video generation takes approximately 30-60 seconds. Grab a coffee or admire your workbench!</p>
              </div>
            </div>
          ) : status === 'completed' ? (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/50 text-emerald-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-semibold">Video Successfully Generated with Veo 3!</span>
                </div>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setVideoUrl('');
                  }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-emerald-900/50 hover:bg-emerald-900 text-emerald-200 transition-colors flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Generate Another
                </button>
              </div>

              <div className="flex flex-col items-center justify-center bg-black/60 rounded-2xl p-4 border border-stone-800">
                <div className={`relative overflow-hidden rounded-xl bg-black shadow-2xl ${aspectRatio === '9:16' ? 'max-w-xs aspect-[9/16]' : 'w-full aspect-video'}`}>
                  <video
                    src={videoUrl}
                    controls
                    autoPlay
                    loop
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <a
                    href={videoUrl}
                    download={`timbercraft-veo3-short-${Date.now()}.mp4`}
                    className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow-lg flex items-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download MP4 Video
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Video link copied to clipboard!');
                    }}
                    className="px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm border border-stone-700 transition-colors"
                  >
                    Copy Share Link
                  </button>
                </div>
              </div>
            </div>
          ) : null}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-stone-800 bg-stone-950/60 flex items-center justify-between text-xs text-stone-400">
          <div>Powered by Google Veo 3 (`veo-3.1-fast-generate-preview`)</div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
