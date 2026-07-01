import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <>
{/* Hero Section */}
<section className="relative pt-40 pb-section-padding px-8 overflow-hidden bg-background">
{/* Video Background */}
<video 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
>
  <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
</video>

<div className="glow-circle absolute -top-40 -left-40 w-[600px] h-[600px] opacity-40 z-0"></div>
<div className="glow-circle absolute top-1/2 -right-40 w-[800px] h-[800px] opacity-30 z-0"></div>
<div className="max-w-container-max mx-auto text-center relative z-10">
<span className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-6 block uppercase">Powered by AI Market Analysis</span>
<h1 className="font-display-lg text-display-lg md:text-display-lg mb-8 max-w-4xl mx-auto leading-tight">
                Master the Markets with <span className="text-primary text-glow italic">AI-Driven Signals</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
                Gain the trading edge with ultra-fast, highly accurate AI signals for Forex and Crypto markets, designed for institutional-level performance.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
<Link to="/register" className="bg-[#032EA1] hover:brightness-110 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2">
                    Get Started <span className="material-symbols-outlined">arrow_forward</span>
</Link>
<Link to="/ai-signal" className="gradient-border-btn cursor-pointer group flex">
<div className="btn-content text-on-surface group-hover:bg-transparent transition-all w-full">
                        View Live Signal
                    </div>
</Link>
</div>
{/* Stats & Swap Widget Preview */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-4 glass-card p-8 rounded-2xl text-left">
<span className="text-primary text-sm font-bold uppercase mb-4 block">Premium Alert</span>
<h3 className="font-headline-sm text-headline-sm mb-6">Next AI Signal In</h3>
<div className="grid grid-cols-4 gap-4 mb-8">
<div className="text-center">
<div className="text-2xl font-bold font-display-lg">00</div>
<div className="text-xs text-on-surface-variant">Days</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold font-display-lg">02</div>
<div className="text-xs text-on-surface-variant">Hours</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold font-display-lg">16</div>
<div className="text-xs text-on-surface-variant">Minutes</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold font-display-lg">42</div>
<div className="text-xs text-on-surface-variant">Seconds</div>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between text-sm">
<span>Active Subscribers</span>
<span className="text-primary">Win Rate (30d)</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-primary h-full w-[92%] rounded-full"></div>
</div>
<div className="flex justify-between text-xs font-bold">
<span>12,450 / 15,000</span>
<span>92.5%</span>
</div>
</div>
</div>
<div className="lg:col-span-4 flex justify-center py-12 lg:py-0">
<div className="relative w-64 h-64 floating">

</div>
</div>
<div className="lg:col-span-4 glass-card p-8 rounded-2xl text-left">
<div className="flex justify-between items-center mb-6">
<span className="font-bold">CONNECT BROKER</span>
<div className="flex items-center gap-1 bg-surface-container px-3 py-1 rounded-full text-xs">
<span className="material-symbols-outlined text-sm text-yellow-400">candlestick_chart</span> MT5
                        </div>
</div>
<div className="space-y-4 mb-6">
<div className="bg-surface-container p-4 rounded-xl flex justify-between items-center">
<div>
<div className="text-xs text-on-surface-variant mb-1">Risk Amount</div>
<div className="text-lg font-bold">$500.00</div>
</div>
<span className="material-symbols-outlined text-error">trending_down</span>
</div>
<div className="bg-surface-container p-4 rounded-xl flex justify-between items-center">
<div>
<div className="text-xs text-on-surface-variant mb-1">Target Reward</div>
<div className="text-lg font-bold">$1500.00</div>
</div>
<span className="material-symbols-outlined text-tertiary">trending_up</span>
</div>
</div>
<button className="w-full bg-[#032EA1] text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all">
                        START TRADING
                    </button>
</div>
</div>
</div>
</section>
    </>
  );
}
