import { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Markets() {
  useDocumentTitle("Live Markets");
  
  return (
    <div className="pt-32 pb-24 px-8 max-w-container-max mx-auto min-h-screen">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface">Global Markets</h2>
          <p className="font-body-md text-on-surface-variant mt-1">Real-time AI analysis across primary liquidity pools.</p>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
            <input className="w-full bg-surface-container border border-outline-variant/50 rounded-lg py-2 pl-10 pr-4 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline" placeholder="Search symbol..." type="text"/>
          </div>
          <button className="bg-surface-container border border-outline-variant/50 rounded-lg p-2 text-on-surface-variant hover:text-on-surface hover:border-outline transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Card 1: XAUUSD */}
        <div className="glass-card rounded-xl border border-outline-variant/50 p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors shadow-sm">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/30 text-[14px] font-bold text-secondary">
                  AU
              </div>
              <div>
                <h3 className="font-bold text-[18px] leading-tight text-on-surface tracking-tight">XAUUSD</h3>
                <span className="text-xs text-on-surface-variant">Gold / US Dollar</span>
              </div>
            </div>
            <div className="bg-secondary/10 border border-secondary/30 px-2 py-1 rounded-md flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              <span className="text-[10px] text-secondary font-bold uppercase tracking-wider">Strong Bullish</span>
            </div>
          </div>
          
          <div className="flex justify-between items-end mt-4">
            <div>
              <div className="font-mono text-[24px] text-on-surface leading-none tracking-tight">2,024.50</div>
              <div className="font-mono text-[12px] text-secondary mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> +17.20 (0.85%)
              </div>
            </div>
            <div className="w-24 h-10 text-secondary">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <path d="M0,35 Q10,35 20,25 T40,20 T60,15 T80,5 T100,2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path className="opacity-20" d="M0,35 Q10,35 20,25 T40,20 T60,15 T80,5 T100,2 L100,40 L0,40 Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-outline-variant/30 mt-auto">
            <div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold">Vol Index (VIX)</div>
              <div className="font-mono text-sm text-on-surface mt-0.5">14.2 <span className="text-outline text-[10px]">Low</span></div>
            </div>
            <div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold">AI Sentiment</div>
              <div className="font-mono text-sm text-on-surface mt-0.5">82/100</div>
            </div>
          </div>
        </div>

        {/* Card 2: BTCUSD */}
        <div className="glass-card rounded-xl border border-outline-variant/50 p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors shadow-sm">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F7931A]/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/30 text-[14px] font-bold text-[#F7931A]">
                  ₿
              </div>
              <div>
                <h3 className="font-bold text-[18px] leading-tight text-on-surface tracking-tight">BTCUSD</h3>
                <span className="text-xs text-on-surface-variant">Bitcoin</span>
              </div>
            </div>
            <div className="bg-secondary/10 border border-secondary/30 px-2 py-1 rounded-md flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              <span className="text-[10px] text-secondary font-bold uppercase tracking-wider">Bullish</span>
            </div>
          </div>
          
          <div className="flex justify-between items-end mt-4">
            <div>
              <div className="font-mono text-[24px] text-on-surface leading-none tracking-tight">51,200.00</div>
              <div className="font-mono text-[12px] text-secondary mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> +614.40 (1.20%)
              </div>
            </div>
            <div className="w-24 h-10 text-secondary">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <path d="M0,30 Q15,35 25,20 T45,25 T65,10 T85,15 T100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path className="opacity-20" d="M0,30 Q15,35 25,20 T45,25 T65,10 T85,15 T100,5 L100,40 L0,40 Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-outline-variant/30 mt-auto">
            <div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold">Vol Index (BVIX)</div>
              <div className="font-mono text-sm text-on-surface mt-0.5">48.5 <span className="text-primary text-[10px]">Med</span></div>
            </div>
            <div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold">AI Sentiment</div>
              <div className="font-mono text-sm text-on-surface mt-0.5">68/100</div>
            </div>
          </div>
        </div>

        {/* Card 3: EURUSD */}
        <div className="glass-card rounded-xl border border-outline-variant/50 p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors shadow-sm">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-error/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/30 text-[14px] font-bold text-primary">
                  €
              </div>
              <div>
                <h3 className="font-bold text-[18px] leading-tight text-on-surface tracking-tight">EURUSD</h3>
                <span className="text-xs text-on-surface-variant">Euro / US Dollar</span>
              </div>
            </div>
            <div className="bg-error/10 border border-error/30 px-2 py-1 rounded-md flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-error"></div>
              <span className="text-[10px] text-error font-bold uppercase tracking-wider">Bearish</span>
            </div>
          </div>
          
          <div className="flex justify-between items-end mt-4">
            <div>
              <div className="font-mono text-[24px] text-on-surface leading-none tracking-tight">1.09241</div>
              <div className="font-mono text-[12px] text-error mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">arrow_downward</span> -0.0012 (0.11%)
              </div>
            </div>
            <div className="w-24 h-10 text-error">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <path d="M0,5 Q15,2 25,15 T45,10 T65,25 T85,20 T100,35" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path className="opacity-20" d="M0,5 Q15,2 25,15 T45,10 T65,25 T85,20 T100,35 L100,40 L0,40 Z" fill="currentColor"></path>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-outline-variant/30 mt-auto">
            <div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold">Vol Index (EVZ)</div>
              <div className="font-mono text-sm text-on-surface mt-0.5">6.8 <span className="text-outline text-[10px]">Low</span></div>
            </div>
            <div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold">AI Sentiment</div>
              <div className="font-mono text-sm text-on-surface mt-0.5">34/100</div>
            </div>
          </div>
        </div>

        {/* Card 4: SPX */}
        <div className="glass-card rounded-xl border border-outline-variant/50 p-6 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/30 text-[12px] font-bold text-on-surface">
                  SPX
              </div>
              <div>
                <h3 className="font-bold text-[18px] leading-tight text-on-surface tracking-tight">SPX500</h3>
                <span className="text-xs text-on-surface-variant">S&amp;P 500 Index</span>
              </div>
            </div>
            <div className="bg-outline-variant/30 border border-outline-variant/50 px-2 py-1 rounded-md flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
              <span className="text-[10px] text-outline font-bold uppercase tracking-wider">Neutral</span>
            </div>
          </div>
          
          <div className="flex justify-between items-end mt-4">
            <div>
              <div className="font-mono text-[24px] text-on-surface leading-none tracking-tight">5,005.20</div>
              <div className="font-mono text-[12px] text-outline mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">horizontal_rule</span> 0.00 (0.00%)
              </div>
            </div>
            <div className="w-24 h-10 text-outline">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <path d="M0,20 Q20,15 40,25 T60,18 T80,22 T100,20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-outline-variant/30 mt-auto">
            <div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold">Vol Index (VIX)</div>
              <div className="font-mono text-sm text-on-surface mt-0.5">13.5 <span className="text-outline text-[10px]">Low</span></div>
            </div>
            <div>
              <div className="text-[10px] text-on-surface-variant uppercase font-bold">AI Sentiment</div>
              <div className="font-mono text-sm text-on-surface mt-0.5">52/100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
