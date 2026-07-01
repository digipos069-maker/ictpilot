import Logo from './Logo';

export default function Footer() {
  return (
    <>
{/* Footer */}
<footer className="w-full px-8 pt-section-padding pb-8 max-w-container-max mx-auto bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
<div className="md:col-span-4">
<div className="mb-6">
  <Logo />
</div>
<h3 className="font-bold text-xl mb-4">Discover the Power of ICTPilot AI Signals</h3>
<p className="text-on-surface-variant mb-8 max-w-xs">Dominate the markets with institutional-grade AI signals, automated execution, and strict risk management.</p>
<div className="text-sm text-on-surface-variant mb-6">
                    Address: 74 Bk Roy Poipara Sonadanga<br/>Khulna District, Bangladesh
                </div>
<div className="flex gap-4">
<a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined text-lg">close</span>
</a>
<a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined text-lg">camera</span>
</a>
<a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined text-lg">play_circle</span>
</a>
<a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined text-lg">send</span>
</a>
</div>
</div>
<div className="md:col-span-2">
<h4 className="font-bold mb-6">Product</h4>
<ul className="space-y-4 text-on-surface-variant">
<li><a className="hover:text-tertiary transition-colors" href="#">Advantage</a></li>
<li><a className="hover:text-tertiary transition-colors" href="#">Features</a></li>
<li><a className="hover:text-tertiary transition-colors" href="#">Compare</a></li>
<li><a className="hover:text-tertiary transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-bold mb-6">Company</h4>
<ul className="space-y-4 text-on-surface-variant">
<li><a className="hover:text-tertiary transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-tertiary transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-tertiary transition-colors" href="#">FAQs</a></li>
<li><a className="hover:text-tertiary transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-bold mb-6">Resources</h4>
<ul className="space-y-4 text-on-surface-variant">
<li><a className="hover:text-tertiary transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-tertiary transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-tertiary transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-tertiary transition-colors" href="#">API Access</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-bold mb-6">Stay Ahead in Market Trends</h4>
<div className="relative mb-4">
<input className="w-full bg-surface-container border-outline-variant/30 rounded-full px-6 py-3 text-sm focus:border-primary focus:ring-0" placeholder="Enter your email" type="email"/>
</div>
<button className="w-full bg-[#032EA1] text-white py-3 rounded-full font-bold hover:brightness-110 transition-all">
                    Explore Now
                </button>
</div>
</div>
<div className="pt-8 border-t border-outline-variant/10 flex flex-col md:row md:flex-row justify-between items-center gap-4">
<div className="text-sm text-on-surface-variant">© 2026 ICTPilot Global, LLC. All rights reserved.</div>
<div className="flex gap-6 text-sm text-on-surface-variant">
<a className="hover:text-tertiary" href="#">Privacy Policy</a>
<a className="hover:text-tertiary" href="#">Terms</a>
<a className="hover:text-tertiary" href="#">Disclaimer</a>
</div>
</div>
</footer>
    </>
  );
}
