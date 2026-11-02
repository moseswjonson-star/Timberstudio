import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Upload, ArrowRight, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<string>('commission');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [selectedWood, setSelectedWood] = useState<string[]>(['American Black Walnut']);
  const [budget, setBudget] = useState<string>('$3,500 – $7,500');
  const [timeline, setTimeline] = useState<string>('3–4 Months');
  const [dimensions, setDimensions] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [fileName, setFileName] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  const woodOptions = [
    'American Black Walnut',
    'Quarter-Sawn White Oak',
    'Curly Hard Maple',
    'Black Cherry',
    'Urban Salvage Timber',
    'Open to Recommendation'
  ];

  const handleToggleWood = (wood: string) => {
    if (selectedWood.includes(wood)) {
      if (selectedWood.length > 1) {
        setSelectedWood(selectedWood.filter(w => w !== wood));
      }
    } else {
      setSelectedWood([...selectedWood, wood]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const generatedId = `TC-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedId(generatedId);
      setIsSubmitting(false);
    }, 900);
  };

  const handleReset = () => {
    setSubmittedId(null);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setDimensions('');
    setFileName(null);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-stone-200 dark:border-stone-800 bg-[#faf7f2]/50 dark:bg-[#151311]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
            <Mail className="w-4 h-4" />
            <span>Studio Inquiries & Commission Registry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-stone-900 dark:text-stone-100 tracking-tight">
            Start a Bespoke Project
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base max-w-2xl">
            Whether you desire a custom live-edge walnut dining table, an architectural credenza, or wish to inquire about tool testing & affiliate collaborations, we respond within 24 to 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Workshop Contact Details */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-lg bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-5">
              <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100">
                TimberCraft Workshop & Bench
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-700 dark:text-amber-400 mt-1 shrink-0" />
                  <div>
                    <strong className="block text-stone-900 dark:text-stone-100 font-semibold">Studio Location:</strong>
                    <span>1420 S. Timbermill Way, Suite 4B<br />Spokane, WA 99201, United States</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-700 dark:text-amber-400 mt-1 shrink-0" />
                  <div>
                    <strong className="block text-stone-900 dark:text-stone-100 font-semibold">Direct Email:</strong>
                    <a href="mailto:commissions@timbercraft.studio" className="text-amber-800 dark:text-amber-400 hover:underline">
                      commissions@timbercraft.studio
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-700 dark:text-amber-400 mt-1 shrink-0" />
                  <div>
                    <strong className="block text-stone-900 dark:text-stone-100 font-semibold">Workshop Hours:</strong>
                    <span>Monday – Friday: 7:30 AM – 5:00 PM PST<br />Saturday: By Appointment Only</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600 inline mr-1" />
                <span>All custom furniture includes our Lifetime Structural Joinery Guarantee.</span>
              </div>
            </div>

            {/* Current Commission Queue Status Card */}
            <div className="p-5 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-xs space-y-2">
              <div className="text-amber-900 dark:text-amber-300 font-bold uppercase tracking-wider">
                Current Studio Build Queue
              </div>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                We accept a maximum of 4 major dining table or credenza commissions per quarter to ensure zero corners are cut. Current lead time for new commissions is approximately 8 to 12 weeks.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Commission Form */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xs">
              
              {submittedId ? (
                /* Success State */
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                    Commission Request Received
                  </h3>

                  <p className="text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-900 dark:text-stone-100">{name}</strong>. Johnson and our shop team will review your project dimensions, timber choice, and grain layout requirements.
                  </p>

                  <div className="p-4 rounded-md bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 inline-block font-mono text-xs text-stone-800 dark:text-stone-200">
                    Project Reference Ticket: <span className="font-bold text-amber-700 dark:text-amber-400">{submittedId}</span>
                  </div>

                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    A confirmation has been logged. We will reach out to <span className="font-medium text-stone-800 dark:text-stone-200">{email}</span> within 24 hours.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-800 dark:text-stone-200 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 rounded-md transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Inquiry Type Radio Buttons */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-2.5">
                      1. Type of Inquiry
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {[
                        { id: 'commission', label: 'Furniture Commission' },
                        { id: 'architectural', label: 'Millwork / Built-Ins' },
                        { id: 'affiliate', label: 'Tool Review & Press' },
                        { id: 'consultation', label: 'General / Question' },
                      ].map((type) => (
                        <button
                          type="button"
                          key={type.id}
                          onClick={() => setInquiryType(type.id)}
                          className={`p-2.5 rounded-md border text-center font-medium transition-all ${
                            inquiryType === type.id
                              ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-semibold'
                              : 'border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-amber-500/50'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="eleanor@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                      />
                    </div>
                  </div>

                  {/* Wood Species Interest (Multi-select) */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex items-center justify-between mb-2">
                      <span>2. Preferred Timber Species</span>
                      <span className="text-[11px] text-stone-400 font-normal">Select one or more</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {woodOptions.map((wood) => {
                        const isSelected = selectedWood.includes(wood);
                        return (
                          <button
                            type="button"
                            key={wood}
                            onClick={() => handleToggleWood(wood)}
                            className={`px-3 py-1.5 text-xs rounded-md border transition-all ${
                              isSelected
                                ? 'bg-stone-900 dark:bg-amber-600 text-white border-stone-900 dark:border-amber-600 font-medium'
                                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-300/80 dark:border-stone-700 hover:border-amber-500'
                            }`}
                          >
                            {isSelected && <span className="mr-1.5">✓</span>}
                            {wood}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                        Target Budget Range
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-600"
                      >
                        <option value="$1,500 – $3,500">$1,500 – $3,500 (Small tables, benches, boxes)</option>
                        <option value="$3,500 – $7,500">$3,500 – $7,500 (Standard dining tables, credenzas)</option>
                        <option value="$7,500 – $15,000">$7,500 – $15,000 (Large architectural tables, sets)</option>
                        <option value="$15,000+">$15,000+ (Full room suite or historic replication)</option>
                        <option value="Tool Review / Media">Tool Review / Media Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                        Desired Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-1 focus:ring-amber-600"
                      >
                        <option value="Flexible (Heirloom priority)">Flexible (Craft quality first)</option>
                        <option value="2–3 Months">Within 2 to 3 Months</option>
                        <option value="4–6 Months">Within 4 to 6 Months</option>
                        <option value="Rush / Under 8 Weeks">Rush (Subject to shop schedule)</option>
                      </select>
                    </div>
                  </div>

                  {/* Dimensions & Space Details */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                      Approximate Dimensions or Room Space (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 96 inches long × 42 inches wide × 30 inches high (Seats 8 to 10)"
                      value={dimensions}
                      onChange={(e) => setDimensions(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                    />
                  </div>

                  {/* Project Vision & Details */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                      Project Vision, Joinery Preferences or Inquiries *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your design aesthetics (e.g. mid-century Japanese, live-edge, sculpted joints, breadboard ends), finish requirements, or specific tool questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-600"
                    />
                  </div>

                  {/* Optional File/Sketch upload */}
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 block mb-1">
                      Attach Architectural Floor Plan or Inspiration Sketch (Optional)
                    </label>
                    <div className="flex items-center gap-3">
                      <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-300 dark:border-stone-700 rounded-md">
                        <Upload className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                        <span>Choose File</span>
                        <input
                          type="file"
                          accept=".png,.jpg,.jpeg,.pdf,.dwg"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                      <span className="text-xs text-stone-500">
                        {fileName ? fileName : 'No file chosen (PDF, PNG, JPG up to 25MB)'}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 dark:bg-amber-600 hover:bg-amber-700 dark:hover:bg-amber-500 rounded-md transition-all shadow-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Logging Project Ticket...</span>
                      ) : (
                        <>
                          <span>Transmit Commission Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
