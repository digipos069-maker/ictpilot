export default function HowItWorks() {
  return (
    <>
{/* Three Simple Steps Section */}
<section className="py-section-padding px-8 bg-surface-container-low overflow-hidden relative">
<div className="max-w-container-max mx-auto text-center">
<span className="font-label-caps text-label-caps text-primary mb-4 block">HOW IT WORKS</span>
<h2 className="font-headline-md text-headline-md mb-6">Three Simple Steps to<br/>Master the Markets</h2>
<p className="text-on-surface-variant mb-20">Connect your broker, receive high-accuracy signals, and automate your trades securely.</p>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-center px-4">
{/* SVG Connector Line (Desktop) */}
<svg className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 h-64 z-0 pointer-events-none" fill="none" viewBox="0 0 1200 300">
<path className="step-path" d="M100,150 C250,150 250,50 400,50 C550,50 550,250 700,250 C850,250 850,150 1000,150" stroke="url(#step-gradient)" strokeWidth="2"></path>
<defs>
<linearGradient id="step-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stopColor="#fda9ff"></stop>
<stop offset="50%" stopColor="#6001d1"></stop>
<stop offset="100%" stopColor="#3cddc7"></stop>
</linearGradient>
</defs>
</svg>
{/* Step 1 */}
<div className="relative z-10 space-y-6">
<div className="glass-card inline-block p-6 rounded-2xl bg-surface-container-low">
<h4 className="font-bold mb-2">Connect Broker</h4>
<p className="text-sm text-on-surface-variant">Link your MT4/MT5 or crypto exchange securely via API.</p>
</div>
</div>
{/* Step 2 */}
<div className="relative z-10 space-y-6">
<div className="glass-card inline-block p-6 rounded-2xl bg-surface-container-low border-primary/40">
<h4 className="font-bold mb-2">Receive AI Signals</h4>
<p className="text-sm text-on-surface-variant">Get instant alerts for high-probability trade setups in real-time.</p>
</div>
</div>
{/* Step 3 */}
<div className="relative z-10 space-y-6">
<div className="glass-card inline-block p-6 rounded-2xl bg-surface-container-low">
<h4 className="font-bold mb-2">Automate &amp; Scale</h4>
<p className="text-sm text-on-surface-variant">Let our system execute trades automatically or enter them manually.</p>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
