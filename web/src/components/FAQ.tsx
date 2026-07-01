export default function FAQ() {
  return (
    <>
{/* FAQ Section */}
<section className="py-section-padding px-8 bg-surface-container-low">
<div className="max-w-container-max mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div>
<span className="font-label-caps text-label-caps text-secondary mb-4 block">Frequently Asked Questions</span>
<h2 className="font-headline-md text-headline-md mb-8">AI Signal Support and FAQs</h2>
<p className="text-on-surface-variant mb-12">Get clear answers to common questions about our AI accuracy, supported brokers, and risk management so you can trade with confidence.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-[#032EA1] text-white px-8 py-3 rounded-full font-bold">Start Securely</button>
<button className="border border-outline-variant text-on-surface px-8 py-3 rounded-full font-bold hover:bg-surface-variant transition-all">Trading Support</button>
</div>
</div>
<div className="space-y-4">
<div className="glass-card p-6 rounded-2xl cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-bold text-lg">Are these signals beginner-friendly?</h3>
<span className="material-symbols-outlined text-primary">expand_more</span>
</div>
<div className="mt-4 text-on-surface-variant text-sm">
                            Yes, our AI provides clear entry, stop loss, and take profit levels. You can also automate execution so you don't have to watch the charts.
                        </div>
</div>
<div className="glass-card p-6 rounded-2xl cursor-pointer hover:border-primary/40 flex justify-between items-center">
<h3 className="font-bold text-lg">Which markets do you cover?</h3>
<span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
</div>
<div className="glass-card p-6 rounded-2xl cursor-pointer hover:border-primary/40 flex justify-between items-center">
<h3 className="font-bold text-lg">Can I automate trades on MT4/MT5?</h3>
<span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
</div>
<div className="glass-card p-6 rounded-2xl cursor-pointer hover:border-primary/40 flex justify-between items-center">
<h3 className="font-bold text-lg">What is the average win rate?</h3>
<span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
</div>
<div className="glass-card p-6 rounded-2xl cursor-pointer hover:border-primary/40 flex justify-between items-center">
<h3 className="font-bold text-lg">Is my trading capital secure?</h3>
<span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
</div>
</div>
</div>
</div>
</section>
    </>
  );
}
