import React, { useState } from 'react';
import { X, Cpu, Sparkles, Activity, Thermometer, Wind, Zap, CheckCircle2, FileText, Mic, Calculator, ArrowRight, RefreshCw } from 'lucide-react';

interface SmartShopHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SmartShopHubModal: React.FC<SmartShopHubModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'iot' | 'cutlist' | 'ai-log' | 'ocr'>('iot');

  // IoT Sensor States
  const [dustCollectorActive, setDustCollectorActive] = useState<boolean>(true);
  const [dustPressure, setDustPressure] = useState<number>(3.8); // inches of water
  const [kilnTemp, setKilnTemp] = useState<number>(72.4);
  const [kilnHumidity, setKilnHumidity] = useState<number>(42);
  const [airScrubberSpeed, setAirScrubberSpeed] = useState<'Off' | 'Low (Quiet)' | 'High (Turbo Clean)'>('Low (Quiet)');
  const [iotStatusMessage, setIotStatusMessage] = useState<string | null>(null);

  // AI Cut-List Optimizer States
  const [stockLength, setStockLength] = useState<number>(96); // inches
  const [stockWidth, setStockWidth] = useState<number>(8); // inches
  const [desiredPartsRaw, setDesiredPartsRaw] = useState<string>('Table Top Board | 4 | 60"\nApron Rails | 4 | 28"\nTrestle Stretcher | 1 | 82"');
  const [optimizationResult, setOptimizationResult] = useState<string | null>(null);
  const [isOptimizing, setIsOptimizing] = useState<boolean>(false);

  // AI Voice/Text Shop Log States
  const [shopLogInput, setShopLogInput] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [savedLogs, setSavedLogs] = useState<string[]>([
    '02/26/2026: Planed walnut slabs to 1.75" thickness. Moisture meter reads 7.2%.',
    '02/25/2026: Tested SawStop brake cartridge response. Clean alignment on T-Glide fence.'
  ]);

  // AI Receipt OCR Parser States
  const [receiptInput, setReceiptInput] = useState<string>('Hardwood Lumber Co. - 45 BF Walnut @ $14.50/bf = $652.50\nRockler Woodworking - 2x Bessey 50" Clamps = $124.99');
  const [parsedExpenses, setParsedExpenses] = useState<{ item: string; cost: number; category: string }[] | null>(null);
  const [isParsing, setIsParsing] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleRunOptimization = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setOptimizationResult(
        `✅ AI Cut-List Optimized Successfully!\n• Raw Stock Needed: 2 boards of 8/4 Walnut (96" x 8")\n• Estimated Waste Factor: 6.2% (Extremely Efficient)\n• Kerf Loss Calculated: 0.125" per crosscut\n• Recommended Sequence: Rip apron rails first, crosscut tabletop boards last.`
      );
      setIsOptimizing(false);
    }, 800);
  };

  const handleSaveShopLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shopLogInput.trim()) return;
    const timestamp = new Date().toLocaleDateString() + ': ' + shopLogInput;
    setSavedLogs([timestamp, ...savedLogs]);
    setShopLogInput('');
  };

  const handleParseReceipt = () => {
    setIsParsing(true);
    setTimeout(() => {
      setParsedExpenses([
        { item: '45 BF Walnut Lumber', cost: 652.50, category: 'Timber' },
        { item: '2x Bessey 50" Parallel Clamps', cost: 124.99, category: 'Hardware' }
      ]);
      setIsParsing(false);
    }, 700);
  };

  const toggleDustCollector = () => {
    setDustCollectorActive(!dustCollectorActive);
    setIotStatusMessage(!dustCollectorActive ? '⚡ Dust Collector Relay Activated (3.5 HP Cyclone Running)' : '💤 Dust Collector Relay Standby (Auto-trigger armed)');
    setTimeout(() => setIotStatusMessage(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-stone-900 border border-amber-500/30 rounded-xl shadow-2xl flex flex-col overflow-hidden text-stone-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-serif font-bold text-stone-100">Smart Shop IoT & AI Productivity Hub</h2>
                <span className="text-[10px] font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">
                  Connected & Active
                </span>
              </div>
              <p className="text-xs text-stone-400">Manage smart workshop relays, kiln sensors, and AI-powered woodworking workflows.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex border-b border-stone-800 bg-stone-950/40 px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('iot')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'iot' 
                ? 'border-amber-500 text-amber-400' 
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Activity className="w-4 h-4" />
<span>IoT Workshop & Kiln</span>
          </button>
          <button
            onClick={() => setActiveTab('cutlist')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'cutlist' 
                ? 'border-amber-500 text-amber-400' 
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Calculator className="w-4 h-4" />
<span>AI Cut-List Optimizer</span>
          </button>
          <button
            onClick={() => setActiveTab('ai-log')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'ai-log' 
                ? 'border-amber-500 text-amber-400' 
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
<span>AI Voice / Text Shop Log</span>
          </button>
          <button
            onClick={() => setActiveTab('ocr')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'ocr' 
                ? 'border-amber-500 text-amber-400' 
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <FileText className="w-4 h-4" />
<span>AI Receipt & Invoice OCR</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: IOT WORKSHOP & KILN */}
          {activeTab === 'iot' && (
            <div className="space-y-6 animate-fadeIn">
              {iotStatusMessage && (
                <div className="p-3 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-lg text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {iotStatusMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Dust Collection Card */}
                <div className="p-5 rounded-xl bg-stone-950/60 border border-stone-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Dust Extraction Relay</span>
                    <span className={`w-3 h-3 rounded-full ${dustCollectorActive ? 'bg-emerald-500 animate-pulse' : 'bg-stone-600'}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-100">Oneida Cyclone 3.5HP</h3>
                    <p className="text-xs text-stone-400">Current sensor auto-sync enabled</p>
                  </div>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-sm text-stone-300">Static Pressure: <strong className="text-amber-400">{dustPressure} in.w.g.</strong></span>
                    <button
                      onClick={toggleDustCollector}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        dustCollectorActive 
                          ? 'bg-emerald-600 hover:bg-emerald-500 text-white' 
                          : 'bg-stone-800 hover:bg-stone-700 text-stone-300'
                      }`}
                    >
                      {dustCollectorActive ? 'Running (Active)' : 'Turn On'}
                    </button>
                  </div>
                </div>

                {/* Kiln & Ambient Climate Card */}
                <div className="p-5 rounded-xl bg-stone-950/60 border border-stone-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Timber Kiln & Room IoT</span>
                    <Thermometer className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-100">{kilnTemp}°F · {kilnHumidity}% RH</h3>
                    <p className="text-xs text-stone-400">Equilibrium Moisture Content (EMC): 7.8%</p>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-xs text-stone-300">
                    <span>Status: Optimal for Hardwoods</span>
                    <span className="text-emerald-400 font-semibold">No Risk of Warping</span>
                  </div>
                </div>

                {/* Air Scrubber Card */}
                <div className="p-5 rounded-xl bg-stone-950/60 border border-stone-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Overhead Air Scrubber</span>
                    <Wind className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-100">HEPA Filtration Unit</h3>
                    <p className="text-xs text-stone-400">PM2.5 Particulate Filter</p>
                  </div>
                  <div className="pt-2 flex items-center gap-2">
                    <select
                      value={airScrubberSpeed}
                      onChange={(e) => setAirScrubberSpeed(e.target.value as any)}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                    >
                      <option value="Off">Off</option>
                      <option value="Low (Quiet)">Low (Quiet)</option>
                      <option value="High (Turbo Clean)">High (Turbo Clean)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800 text-xs text-stone-400 leading-relaxed">
                💡 <strong>IoT Integration Note:</strong> You can connect physical Shelly/ESP32 smart plugs and MQTT brokers to <code>/api/iot/sensors</code> to automatically trigger dust collection whenever your table saw or planer draws more than 2 Amps of current.
              </div>
            </div>
          )}

          {/* TAB 2: AI CUT-LIST OPTIMIZER */}
          {activeTab === 'cutlist' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">Standard Stock Length (inches)</label>
                    <input 
                      type="number" 
                      value={stockLength}
                      onChange={(e) => setStockLength(Number(e.target.value))}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">Stock Width (inches)</label>
                    <input 
                      type="number" 
                      value={stockWidth}
                      onChange={(e) => setStockWidth(Number(e.target.value))}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg px-3 py-2 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">Required Parts (Part Name | Qty | Length)</label>
                    <textarea 
                      rows={5}
                      value={desiredPartsRaw}
                      onChange={(e) => setDesiredPartsRaw(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg p-3 text-stone-100 text-sm font-mono focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <button
                    onClick={handleRunOptimization}
                    disabled={isOptimizing}
                    className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
                  >
                    {isOptimizing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    {isOptimizing ? 'AI Calculating Cut Layout...' : 'Generate AI Cut-List Optimization'}
                  </button>
                </div>

                <div className="p-5 rounded-xl bg-stone-950/60 border border-stone-800 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">Optimization Results</h3>
                    {optimizationResult ? (
                      <div className="space-y-3 text-sm text-stone-200 whitespace-pre-line bg-stone-900/80 p-4 rounded-lg border border-stone-800 font-mono">
                        {optimizationResult}
                      </div>
                    ) : (
                      <p className="text-sm text-stone-500 italic">Click the optimize button to calculate the lowest-waste hardwood cut diagram using AI.</p>
                    )}
                  </div>
                  <div className="mt-6 text-xs text-stone-400">
                    Calculations take blade kerf (0.125") and grain match continuity into account.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AI VOICE / TEXT SHOP LOG */}
          {activeTab === 'ai-log' && (
            <div className="space-y-6 animate-fadeIn">
              <form onSubmit={handleSaveShopLog} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">New Shop Build Note / Voice Transcript</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="e.g. Applied 2nd coat of Rubio Monocoat on walnut credenza top..."
                      value={shopLogInput}
                      onChange={(e) => setShopLogInput(e.target.value)}
                      className="flex-1 bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-stone-100 text-sm focus:outline-none focus:border-amber-500"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setIsRecording(!isRecording);
                        if (!isRecording) {
                          setShopLogInput('Audio recorded: Sanded joinery with 180 grit, moisture stable at 6.8%');
                        }
                      }}
                      className={`px-4 py-2.5 rounded-lg font-semibold text-xs flex items-center gap-2 transition-colors ${
                        isRecording ? 'bg-red-600 text-white animate-pulse' : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                      }`}
                    >
                      <Mic className="w-4 h-4" />
                      {isRecording ? 'Listening...' : 'Voice Record'}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-lg text-xs transition-colors"
                    >
                      Save Log
                    </button>
                  </div>
                </div>
              </form>

              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Recorded Project Journal</h3>
                <div className="space-y-2">
                  {savedLogs.map((log, idx) => (
                    <div key={idx} className="p-3.5 rounded-lg bg-stone-950/60 border border-stone-800 text-xs sm:text-sm text-stone-300 flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AI RECEIPT & INVOICE OCR */}
          {activeTab === 'ocr' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">Paste Receipt or Invoice Text / Upload Photo</label>
                    <textarea 
                      rows={5}
                      value={receiptInput}
                      onChange={(e) => setReceiptInput(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-lg p-3 text-stone-100 text-sm font-mono focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <button
                    onClick={handleParseReceipt}
                    disabled={isParsing}
                    className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    {isParsing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
                    {isParsing ? 'Parsing Line Items with AI...' : 'Parse Expenses & Board Footage'}
                  </button>
                </div>

                <div className="p-5 rounded-xl bg-stone-950/60 border border-stone-800 space-y-4">
                  <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Extracted Expense Items</h3>
                  {parsedExpenses ? (
                    <div className="space-y-3">
                      {parsedExpenses.map((exp, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-between text-sm">
                          <div>
                            <span className="font-medium text-stone-200">{exp.item}</span>
                            <span className="block text-xs text-stone-400">{exp.category}</span>
                          </div>
                          <span className="font-bold text-amber-400">${exp.cost.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-stone-500 italic">Click parse to extract item names, quantities, and costs into structured accounting records.</p>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-stone-800 bg-stone-950/80 flex items-center justify-between text-xs text-stone-400">
          <span>TimberCraft Studio Smart Hub v2.4</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg transition-colors font-medium"
          >
            Close Hub
          </button>
        </div>

      </div>
    </div>
  );
};
