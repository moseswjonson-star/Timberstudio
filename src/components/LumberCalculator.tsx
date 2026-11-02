import React, { useState } from 'react';
import { WOOD_SPECIES_LIST } from '../data/woodworkingData';
import { WOOD_SPECIES_DATA } from '../data/plansAndTimberData';
import { 
  Ruler, 
  Calculator, 
  Plus, 
  Trash2, 
  Copy, 
  Check, 
  Sparkles, 
  Scale, 
  Droplet, 
  TreeDeciduous, 
  ArrowRightLeft,
  ShieldAlert,
  Info
} from 'lucide-react';

interface CutListItem {
  id: string;
  name: string;
  thickness: number;
  width: number;
  length: number;
  quantity: number;
}

export const LumberCalculator: React.FC = () => {
  // Main Suite Navigation Tab
  const [suiteTab, setSuiteTab] = useState<'boardfoot' | 'movement' | 'species' | 'fractions'>('boardfoot');

  // --- TAB 1: BOARD FOOT CALCULATOR STATE ---
  const [selectedSpeciesIndex, setSelectedSpeciesIndex] = useState<number>(0);
  const [customPrice, setCustomPrice] = useState<number>(14.50);
  const [wasteFactor, setWasteFactor] = useState<number>(15);
  const [copied, setCopied] = useState<boolean>(false);

  const [quickThickness, setQuickThickness] = useState<number>(1.75);
  const [quickWidth, setQuickWidth] = useState<number>(8);
  const [quickLength, setQuickLength] = useState<number>(72);
  const [quickQty, setQuickQty] = useState<number>(1);

  const [cutList, setCutList] = useState<CutListItem[]>([
    { id: '1', name: 'Tabletop Bookmatched Slabs', thickness: 1.75, width: 20, length: 84, quantity: 2 },
    { id: '2', name: 'Trestle Legs (Splayed)', thickness: 2.5, width: 6, length: 30, quantity: 4 },
    { id: '3', name: 'Center Trestle Stretcher', thickness: 2.0, width: 5, length: 72, quantity: 1 },
  ]);

  const [newItemName, setNewItemName] = useState<string>('Apron Rails');
  const [newItemThick, setNewItemThick] = useState<number>(1.0);
  const [newItemWidth, setNewItemWidth] = useState<number>(4.0);
  const [newItemLength, setNewItemLength] = useState<number>(48);
  const [newItemQty, setNewItemQty] = useState<number>(2);

  const selectedSpecies = WOOD_SPECIES_LIST[selectedSpeciesIndex];
  const activePricePerBf = selectedSpeciesIndex === -1 ? customPrice : selectedSpecies.pricePerBf;

  const quickBfPerBoard = (quickThickness * quickWidth * quickLength) / 144;
  const quickTotalBf = quickBfPerBoard * quickQty;
  const quickTotalWithWaste = quickTotalBf * (1 + wasteFactor / 100);
  const quickCost = quickTotalWithWaste * activePricePerBf;

  const calculateItemBf = (item: CutListItem) => {
    return ((item.thickness * item.width * item.length) / 144) * item.quantity;
  };

  const cutListNetBf = cutList.reduce((acc, item) => acc + calculateItemBf(item), 0);
  const cutListGrossBf = cutListNetBf * (1 + wasteFactor / 100);
  const cutListTotalCost = cutListGrossBf * activePricePerBf;
  const estimatedWeightLbs = cutListGrossBf * 3.4;

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    const newItem: CutListItem = {
      id: Date.now().toString(),
      name: newItemName,
      thickness: Number(newItemThick),
      width: Number(newItemWidth),
      length: Number(newItemLength),
      quantity: Number(newItemQty),
    };
    setCutList([...cutList, newItem]);
    setNewItemName('');
  };

  const handleRemoveItem = (id: string) => {
    setCutList(cutList.filter(item => item.id !== id));
  };

  const handleCopyReport = () => {
    const lines = [
      `--- TimberCraft Studio Lumber Estimate ---`,
      `Species: ${selectedSpecies ? selectedSpecies.name : 'Custom Wood'} ($${activePricePerBf.toFixed(2)}/BF)`,
      `Waste Allowance: ${wasteFactor}%`,
      `Total Net Board Feet: ${cutListNetBf.toFixed(2)} BF`,
      `Total Gross Board Feet (with waste): ${cutListGrossBf.toFixed(2)} BF`,
      `Estimated Lumber Cost: $${cutListTotalCost.toFixed(2)} USD`,
      `Estimated Rough Weight: ${estimatedWeightLbs.toFixed(1)} lbs`,
      ``,
      `Cut-List Parts:`,
      ...cutList.map(item => `- ${item.name}: ${item.quantity}x [${item.thickness}" T × ${item.width}" W × ${item.length}" L] = ${calculateItemBf(item).toFixed(2)} BF`),
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // --- TAB 2: WOOD MOVEMENT CALCULATOR STATE ---
  const [movementSpeciesIdx, setMovementSpeciesIdx] = useState<number>(0); // Walnut default
  const [boardWidthInches, setBoardWidthInches] = useState<number>(36); // e.g. 36" dining table top
  const [winterMC, setWinterMC] = useState<number>(6.5); // winter indoor moisture content %
  const [summerMC, setSummerMC] = useState<number>(12.0); // summer humid moisture content %
  const [grainCutType, setGrainCutType] = useState<'flatsawn' | 'quartersawn'>('flatsawn');

  const movementSpecies = WOOD_SPECIES_DATA[movementSpeciesIdx] || WOOD_SPECIES_DATA[0];
  const deltaMC = Math.abs(summerMC - winterMC); // change in moisture content %
  // USDA Forest Products Laboratory formula: ΔW = W × (Shrinkage % / 30) × (ΔMC)
  // Fiber saturation point is ~30%.
  const shrinkageCoefficient = grainCutType === 'flatsawn' 
    ? (movementSpecies.tangentialShrinkage / 3000) 
    : (movementSpecies.radialShrinkage / 3000);

  const estimatedMovementInches = boardWidthInches * shrinkageCoefficient * deltaMC;
  const movementFractionString = (estimatedMovementInches: number) => {
    if (estimatedMovementInches < 0.03) return '1/32"';
    if (estimatedMovementInches < 0.0625) return '1/16"';
    if (estimatedMovementInches < 0.125) return '1/8"';
    if (estimatedMovementInches < 0.1875) return '3/16"';
    if (estimatedMovementInches < 0.25) return '1/4"';
    if (estimatedMovementInches < 0.375) return '3/8"';
    if (estimatedMovementInches < 0.5) return '1/2"';
    if (estimatedMovementInches < 0.75) return '3/4"';
    return `${estimatedMovementInches.toFixed(2)}"`;
  };

  // --- TAB 3: WOOD SPECIES SEARCH/FILTER ---
  const [speciesSearch, setSpeciesSearch] = useState<string>('');
  const [speciesFilterCat, setSpeciesFilterCat] = useState<string>('All');

  const filteredSpecies = WOOD_SPECIES_DATA.filter(sp => {
    const matchesCat = speciesFilterCat === 'All' || sp.category === speciesFilterCat;
    const matchesSearch = speciesSearch === '' || 
      sp.name.toLowerCase().includes(speciesSearch.toLowerCase()) ||
      sp.botanicalName.toLowerCase().includes(speciesSearch.toLowerCase()) ||
      sp.description.toLowerCase().includes(speciesSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // --- TAB 4: FRACTIONS TO METRIC CONVERTER ---
  const [inchInput, setInchInput] = useState<string>('0.75');
  const [mmInput, setMmInput] = useState<string>('19.05');

  const handleInchChange = (val: string) => {
    setInchInput(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setMmInput((num * 25.4).toFixed(2));
    }
  };

  const handleMmChange = (val: string) => {
    setMmInput(val);
    const num = parseFloat(val);
    if (!isNaN(num)) {
      setInchInput((num / 25.4).toFixed(4));
    }
  };

  const fractionLookup = [
    { fraction: '1/64"', dec: 0.0156, mm: 0.397 },
    { fraction: '1/32"', dec: 0.0313, mm: 0.794 },
    { fraction: '1/16"', dec: 0.0625, mm: 1.588 },
    { fraction: '1/8"', dec: 0.1250, mm: 3.175 },
    { fraction: '3/16"', dec: 0.1875, mm: 4.763 },
    { fraction: '1/4"', dec: 0.2500, mm: 6.350 },
    { fraction: '5/16"', dec: 0.3125, mm: 7.938 },
    { fraction: '3/8"', dec: 0.3750, mm: 9.525 },
    { fraction: '1/2"', dec: 0.5000, mm: 12.700 },
    { fraction: '5/8"', dec: 0.6250, mm: 15.875 },
    { fraction: '3/4"', dec: 0.7500, mm: 19.050 },
    { fraction: '7/8"', dec: 0.8750, mm: 22.225 },
    { fraction: '1"', dec: 1.0000, mm: 25.400 },
  ];

  return (
    <section id="calculator" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 bg-[#faf7f2]/30 dark:bg-[#141211]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Master Craftsman Workshop Suite</span>
            <span aria-hidden="true">·</span>
            <span>Calculators & Timber Lab</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight">
            Timber Math & Workshop Utilities
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base max-w-2xl">
            Everything a woodworker needs in the shop: lumber board-footage, seasonal humidity movement calculations, timber species hardness database, and fraction conversions.
          </p>
        </div>

        {/* Master Suite Tabs Navigation */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/60 dark:bg-stone-900 rounded-xl border border-stone-300/60 dark:border-stone-800 mb-8 w-fit">
          <button
            onClick={() => setSuiteTab('boardfoot')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              suiteTab === 'boardfoot'
                ? 'bg-white dark:bg-amber-600 text-stone-900 dark:text-stone-950 shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <Calculator className="w-4 h-4 text-amber-700 dark:text-stone-950" />
            <span>Lumber Board Foot & Pricing</span>
          </button>

          <button
            onClick={() => setSuiteTab('movement')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              suiteTab === 'movement'
                ? 'bg-white dark:bg-amber-600 text-stone-900 dark:text-stone-950 shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <Droplet className="w-4 h-4 text-amber-700 dark:text-stone-950" />
            <span>Wood Movement & Shrinkage Calc</span>
          </button>

          <button
            onClick={() => setSuiteTab('species')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              suiteTab === 'species'
                ? 'bg-white dark:bg-amber-600 text-stone-900 dark:text-stone-950 shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <TreeDeciduous className="w-4 h-4 text-amber-700 dark:text-stone-950" />
            <span>Timber Species & Janka Explorer</span>
          </button>

          <button
            onClick={() => setSuiteTab('fractions')}
            className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
              suiteTab === 'fractions'
                ? 'bg-white dark:bg-amber-600 text-stone-900 dark:text-stone-950 shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4 text-amber-700 dark:text-stone-950" />
            <span>Fractions / Metric Converter</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: BOARD FOOT & PROJECT CUT-LIST CALCULATOR */}
        {/* ========================================================================= */}
        {suiteTab === 'boardfoot' && (
          <div className="space-y-8 animate-in fade-in duration-150">
            {/* Global Configuration Bar: Species & Waste Factor */}
            <div className="p-6 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Species Selector */}
                <div className="md:col-span-6 space-y-1.5 text-left">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center justify-between">
                    <span>Select Hardwood Species</span>
                    <span className="text-amber-800 dark:text-amber-400 font-bold">
                      ${activePricePerBf.toFixed(2)} / Board Foot
                    </span>
                  </label>
                  <select
                    value={selectedSpeciesIndex}
                    onChange={(e) => setSelectedSpeciesIndex(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-600"
                  >
                    {WOOD_SPECIES_LIST.map((sp, idx) => (
                      <option key={sp.name} value={idx}>
                        {sp.name} (${sp.pricePerBf.toFixed(2)}/bf) — Janka {sp.janka}
                      </option>
                    ))}
                  </select>
                  {selectedSpecies && (
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      {selectedSpecies.character} ({selectedSpecies.origin})
                    </p>
                  )}
                </div>

                {/* Waste Factor Slider */}
                <div className="md:col-span-6 space-y-1.5 text-left">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                    <span>Milling Waste Factor</span>
                    <span className="text-amber-800 dark:text-amber-400 font-bold">{wasteFactor}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    step="5"
                    value={wasteFactor}
                    onChange={(e) => setWasteFactor(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400">
                    <span>0% (Net S4S)</span>
                    <span className="text-amber-700 dark:text-amber-400 font-medium">15% (Recommended for Furniture)</span>
                    <span>30% (Live-edge/Crooked logs)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Cut-List Builder & Totals */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              
              {/* Left Column: Full Project Cut List Tally */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-amber-700 dark:text-amber-400" />
                      <span>Project Cut-List Builder</span>
                    </h3>
                    <span className="text-xs text-stone-500">
                      {cutList.length} parts defined
                    </span>
                  </div>

                  {/* Add New Part Form */}
                  <form onSubmit={handleAddItem} className="p-4 rounded-md bg-stone-50 dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-700/80 mb-6">
                    <div className="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wider mb-2.5">
                      Add Component to Cut List
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      <div className="col-span-2 sm:col-span-2">
                        <label className="text-[10px] text-stone-500 uppercase block mb-1">Part Name</label>
                        <input
                          type="text"
                          placeholder="e.g. Table Legs"
                          value={newItemName}
                          onChange={(e) => setNewItemName(e.target.value)}
                          required
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-stone-500 uppercase block mb-1">Thick (in)</label>
                        <input
                          type="number"
                          step="0.125"
                          min="0.1"
                          value={newItemThick}
                          onChange={(e) => setNewItemThick(Number(e.target.value))}
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-stone-500 uppercase block mb-1">Width (in)</label>
                        <input
                          type="number"
                          step="0.25"
                          min="0.5"
                          value={newItemWidth}
                          onChange={(e) => setNewItemWidth(Number(e.target.value))}
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-stone-500 uppercase block mb-1">Length (in)</label>
                        <input
                          type="number"
                          step="0.5"
                          min="1"
                          value={newItemLength}
                          onChange={(e) => setNewItemLength(Number(e.target.value))}
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-mono"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-stone-200 dark:border-stone-700/60">
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-stone-600 dark:text-stone-400">Quantity:</label>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={newItemQty}
                          onChange={(e) => setNewItemQty(Number(e.target.value))}
                          className="w-16 px-2 py-1 text-xs rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 font-mono"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Part</span>
                      </button>
                    </div>
                  </form>

                  {/* Cut List Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-stone-200 dark:border-stone-800 text-stone-500 uppercase tracking-wider font-semibold">
                          <th className="pb-2">Part</th>
                          <th className="pb-2 text-center">Qty</th>
                          <th className="pb-2">Dimensions</th>
                          <th className="pb-2 text-right">Net BF</th>
                          <th className="pb-2 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                        {cutList.map((item) => (
                          <tr key={item.id} className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                            <td className="py-2.5 font-medium text-stone-900 dark:text-stone-100">
                              {item.name}
                            </td>
                            <td className="py-2.5 text-center font-mono">{item.quantity}x</td>
                            <td className="py-2.5 font-mono text-stone-500 dark:text-stone-400">
                              {item.thickness}" × {item.width}" × {item.length}"
                            </td>
                            <td className="py-2.5 text-right font-mono font-semibold text-amber-800 dark:text-amber-400">
                              {calculateItemBf(item).toFixed(2)} BF
                            </td>
                            <td className="py-2.5 text-right">
                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="p-1 text-stone-400 hover:text-red-500 transition-colors"
                                title="Remove part"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column: Project Totals Summary & Copy */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-lg bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">
                    <span>Total Project Summary</span>
                    <span>{selectedSpecies ? selectedSpecies.name.split(' ')[0] : 'Hardwood'}</span>
                  </div>

                  <div className="py-4 border-y border-stone-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-stone-400">Net Board Footage:</span>
                      <span className="font-mono text-base font-semibold">{cutListNetBf.toFixed(2)} BF</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-stone-400">
                        Gross Needed (+{wasteFactor}% waste):
                      </span>
                      <span className="font-mono text-lg font-bold text-amber-400">
                        {cutListGrossBf.toFixed(2)} BF
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-stone-400 flex items-center gap-1">
                        <Scale className="w-3.5 h-3.5 text-stone-500" />
                        <span>Est. Rough Weight:</span>
                      </span>
                      <span className="font-mono text-xs text-stone-300">~{estimatedWeightLbs.toFixed(1)} lbs</span>
                    </div>

                    <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between">
                      <span className="text-sm font-semibold text-stone-200">Total Timber Cost:</span>
                      <span className="font-mono text-2xl font-bold text-white">
                        ${cutListTotalCost.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <button
                      onClick={handleCopyReport}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-950" />
                          <span>Cut-List Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Cut-List & Pricing Report</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Quick Single Board Estimator Box */}
                <div className="p-5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs space-y-3">
                  <div className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Quick Single Plank Estimator</span>
                  </div>
                  <p className="text-stone-500 dark:text-stone-400">
                    Formula: (Thickness × Width × Length in inches) ÷ 144
                  </p>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-stone-400 block mb-1">Thick</span>
                      <input
                        type="number"
                        step="0.25"
                        value={quickThickness}
                        onChange={(e) => setQuickThickness(Number(e.target.value))}
                        className="w-full p-1.5 rounded border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-mono text-xs"
                      />
                    </div>
                    <div>
                      <span className="text-stone-400 block mb-1">Width</span>
                      <input
                        type="number"
                        step="0.5"
                        value={quickWidth}
                        onChange={(e) => setQuickWidth(Number(e.target.value))}
                        className="w-full p-1.5 rounded border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-mono text-xs"
                      />
                    </div>
                    <div>
                      <span className="text-stone-400 block mb-1">Length</span>
                      <input
                        type="number"
                        step="1"
                        value={quickLength}
                        onChange={(e) => setQuickLength(Number(e.target.value))}
                        className="w-full p-1.5 rounded border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 flex items-center justify-between font-mono">
                    <span className="text-amber-900 dark:text-amber-300 font-semibold">
                      Yield: {quickTotalWithWaste.toFixed(2)} BF
                    </span>
                    <span className="text-amber-900 dark:text-amber-300 font-bold">
                      ${quickCost.toFixed(2)}
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: WOOD MOVEMENT & SEASONAL EXPANSION CALCULATOR */}
        {/* ========================================================================= */}
        {suiteTab === 'movement' && (
          <div className="space-y-8 animate-in fade-in duration-150 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Control Panel */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-5">
                  <div className="flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-amber-600" />
                    <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                      Seasonal Cross-Grain Wood Movement Calculator
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    Wood never stops breathing. Longitudinally (lengthwise), wood moves almost zero; across the grain (width), it expands and contracts dramatically with seasonal relative humidity swings. Use this tool to engineer tabletop figure-8 fasteners, breadboard slots, and drawer clearances so your builds never crack.
                  </p>

                  <div className="space-y-4 pt-2 border-t border-stone-200 dark:border-stone-800">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                        Select Wood Species
                      </label>
                      <select
                        value={movementSpeciesIdx}
                        onChange={(e) => setMovementSpeciesIdx(Number(e.target.value))}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                      >
                        {WOOD_SPECIES_DATA.map((sp, idx) => (
                          <option key={sp.name} value={idx}>
                            {sp.name} — Radial: {sp.radialShrinkage}%, Tangential: {sp.tangentialShrinkage}%
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                          Board / Tabletop Width (Inches)
                        </label>
                        <input
                          type="number"
                          step="0.5"
                          min="1"
                          value={boardWidthInches}
                          onChange={(e) => setBoardWidthInches(Number(e.target.value))}
                          className="w-full px-3 py-2 text-sm rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 font-mono"
                        />
                        <span className="text-[11px] text-stone-400">e.g. 36" dining table, or 8" drawer front</span>
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                          Grain Cut Orientation
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setGrainCutType('flatsawn')}
                            className={`px-3 py-2 text-xs font-semibold rounded-md border text-center transition-all ${
                              grainCutType === 'flatsawn'
                                ? 'bg-amber-600 text-stone-950 border-amber-600 font-bold'
                                : 'bg-stone-50 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300'
                            }`}
                          >
                            Flatsawn (Tangential)
                          </button>
                          <button
                            type="button"
                            onClick={() => setGrainCutType('quartersawn')}
                            className={`px-3 py-2 text-xs font-semibold rounded-md border text-center transition-all ${
                              grainCutType === 'quartersawn'
                                ? 'bg-amber-600 text-stone-950 border-amber-600 font-bold'
                                : 'bg-stone-50 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300'
                            }`}
                          >
                            Quartersawn (Radial)
                          </button>
                        </div>
                        <span className="text-[11px] text-stone-400">Quartersawn lumber moves nearly 50% less!</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                          Winter Moisture Content: {winterMC}%
                        </label>
                        <input
                          type="range"
                          min="4"
                          max="10"
                          step="0.5"
                          value={winterMC}
                          onChange={(e) => setWinterMC(Number(e.target.value))}
                          className="w-full accent-amber-600"
                        />
                        <span className="text-[11px] text-stone-400">Heated winter indoor air (~30% RH)</span>
                      </div>

                      <div>
                        <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                          Summer Moisture Content: {summerMC}%
                        </label>
                        <input
                          type="range"
                          min="10"
                          max="18"
                          step="0.5"
                          value={summerMC}
                          onChange={(e) => setSummerMC(Number(e.target.value))}
                          className="w-full accent-amber-600"
                        />
                        <span className="text-[11px] text-stone-400">Humid summer coastal air (~75% RH)</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Output Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-lg bg-stone-900 text-stone-100 border border-stone-800 shadow-md space-y-4">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    <span>Movement Calculation Result</span>
                    <span>USDA FPL Model</span>
                  </div>

                  <div className="py-4 border-y border-stone-800 space-y-3">
                    <span className="text-xs text-stone-400 block">
                      Estimated Seasonal Expansion / Contraction:
                    </span>
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-3xl font-bold text-amber-400">
                        ~{movementFractionString(estimatedMovementInches)}
                      </span>
                      <span className="font-mono text-sm text-stone-400">
                        ({estimatedMovementInches.toFixed(3)} inches)
                      </span>
                    </div>
                    <p className="text-xs text-stone-400">
                      Over an annual cycle, your {boardWidthInches}-inch wide {movementSpecies.name} assembly will grow and shrink by approximately <strong className="text-white">{estimatedMovementInches.toFixed(3)}"</strong> across its grain.
                    </p>
                  </div>

                  <div className="p-3.5 rounded bg-stone-800/80 border border-stone-700 text-xs space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-amber-300">
                      <ShieldAlert className="w-4 h-4 text-amber-400" />
                      <span>Workshop Joinery Rules for This Build:</span>
                    </div>
                    <ul className="text-stone-300 space-y-1.5 pl-5 list-disc">
                      <li>
                        <strong>Tabletop Fasteners:</strong> Use slotted Z-clips or figure-8 fasteners providing at least <span className="font-mono text-amber-300">{(estimatedMovementInches / 2).toFixed(2)}"</span> lateral travel on each side.
                      </li>
                      <li>
                        <strong>Breadboard Ends:</strong> Elongate outer dowel peg holes by <span className="font-mono text-amber-300">1/4"</span> into oval slots. Only glue the center 2 inches.
                      </li>
                      <li>
                        <strong>Never Pocket-Screw Aprons Solidly:</strong> Screwing cross-grain table tops firmly to aprons without expansion slots will split the tabletop along its glue lines.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: WOOD SPECIES & JANKA HARDNESS EXPLORER */}
        {/* ========================================================================= */}
        {suiteTab === 'species' && (
          <div className="space-y-6 animate-in fade-in duration-150 text-left">
            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2">
                {['All', 'Domestic Hardwood', 'Exotic Hardwood', 'Softwood'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSpeciesFilterCat(cat)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      speciesFilterCat === cat
                        ? 'bg-amber-600 text-stone-950 font-bold'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-stone-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder="Filter species (e.g. Walnut, Oak, Teak)..."
                value={speciesSearch}
                onChange={(e) => setSpeciesSearch(e.target.value)}
                className="px-3.5 py-1.5 text-xs rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 w-full sm:w-64"
              />
            </div>

            {/* Species Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpecies.map((sp) => {
                // Janka hardness scale percent (Max ~3000 lbf)
                const jankaPercent = Math.min(100, Math.round((sp.jankaHardness / 2600) * 100));

                return (
                  <div
                    key={sp.name}
                    className="p-5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-600/60 transition-all flex flex-col justify-between space-y-4 shadow-2xs"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs bg-amber-600/10 text-amber-900 dark:text-amber-300 border border-amber-600/20">
                          {sp.category}
                        </span>
                        <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400">
                          {sp.typicalCostPerBf}
                        </span>
                      </div>

                      <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                        {sp.name}
                      </h4>
                      <p className="text-xs italic text-stone-400 font-serif">
                        {sp.botanicalName}
                      </p>

                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pt-1">
                        {sp.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 dark:border-stone-800 space-y-2.5 text-xs">
                      {/* Janka scale bar */}
                      <div>
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span className="text-stone-500">Janka Hardness:</span>
                          <span className="font-mono font-bold text-stone-900 dark:text-stone-100">
                            {sp.jankaHardness} lbf
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-amber-600"
                            style={{ width: `${jankaPercent}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <span className="text-stone-400 block">Workability:</span>
                          <span className="font-semibold text-stone-800 dark:text-stone-200">{sp.workability}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block">Tearout Risk:</span>
                          <span className={`font-semibold ${sp.tearoutRisk === 'High' ? 'text-amber-600' : 'text-stone-800 dark:text-stone-200'}`}>
                            {sp.tearoutRisk}
                          </span>
                        </div>
                      </div>

                      <div className="p-2 rounded bg-stone-50 dark:bg-stone-800/60 text-[11px] text-stone-600 dark:text-stone-300">
                        <span className="font-bold text-stone-900 dark:text-stone-100 block mb-0.5">Best Finish:</span>
                        <span>{sp.recommendedFinish}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: FRACTIONS TO METRIC & DECIMAL CONVERTER */}
        {/* ========================================================================= */}
        {suiteTab === 'fractions' && (
          <div className="space-y-8 animate-in fade-in duration-150 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Interactive Dual Converter */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs space-y-4">
                  <div className="flex items-center gap-2">
                    <ArrowRightLeft className="w-5 h-5 text-amber-600" />
                    <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                      Live Workshop Unit Converter
                    </h3>
                  </div>
                  <p className="text-xs text-stone-500">
                    Switch between American imperial fractional inches and European metric system (Domino tenons, Festool rails, and European hinges):
                  </p>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                        Decimal Inches (")
                      </label>
                      <input
                        type="number"
                        step="0.03125"
                        value={inchInput}
                        onChange={(e) => handleInchChange(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-base rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 font-mono text-stone-900 dark:text-stone-100 font-bold"
                      />
                    </div>

                    <div className="flex justify-center">
                      <div className="p-1 rounded-full bg-stone-200 dark:bg-stone-800 text-amber-600">
                        <ArrowRightLeft className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                        Millimeters (mm)
                      </label>
                      <input
                        type="number"
                        step="0.5"
                        value={mmInput}
                        onChange={(e) => handleMmChange(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-base rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 font-mono text-amber-700 dark:text-amber-400 font-bold"
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-300 flex items-center gap-2">
                    <Info className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>Rule of thumb: 1 inch = exactly 25.4 millimeters. 3/4" nominal plywood is usually 18mm (~0.708").</span>
                  </div>
                </div>
              </div>

              {/* Fraction Lookup Chart */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-6 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs">
                  <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-3">
                    Standard Workshop Fraction Cheat Sheet
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-stone-200 dark:border-stone-800 text-stone-500 uppercase font-semibold">
                          <th className="pb-2">Fraction</th>
                          <th className="pb-2">Decimal Inch</th>
                          <th className="pb-2">Millimeters (mm)</th>
                          <th className="pb-2 text-right">Quick Use</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 dark:divide-stone-800 font-mono">
                        {fractionLookup.map((f) => (
                          <tr
                            key={f.fraction}
                            onClick={() => handleInchChange(f.dec.toString())}
                            className="hover:bg-stone-50 dark:hover:bg-stone-800/40 cursor-pointer transition-colors"
                          >
                            <td className="py-2 font-bold text-stone-900 dark:text-stone-100">{f.fraction}</td>
                            <td className="py-2 text-stone-600 dark:text-stone-400">{f.dec.toFixed(4)}"</td>
                            <td className="py-2 text-amber-800 dark:text-amber-400 font-semibold">{f.mm.toFixed(3)} mm</td>
                            <td className="py-2 text-right text-[11px] text-stone-400">Click to set</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
