import { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function Journal() {
  useDocumentTitle("Trading Journal");

  // Mock data for the trade log
  const trades = [
    {
      id: 'TRD-1042',
      date: 'Oct 24, 2026',
      time: '14:30',
      pair: 'EUR/USD',
      type: 'Short',
      entry: '1.09420',
      exit: '1.08820',
      pnl: '+$600.00',
      pips: '+60',
      status: 'win',
      strategy: 'London Breakout'
    },
    {
      id: 'TRD-1041',
      date: 'Oct 23, 2026',
      time: '09:15',
      pair: 'XAU/USD',
      type: 'Long',
      entry: '2015.40',
      exit: '2012.00',
      pnl: '-$340.00',
      pips: '-34',
      status: 'loss',
      strategy: 'Order Block Rejection'
    },
    {
      id: 'TRD-1040',
      date: 'Oct 23, 2026',
      time: '11:00',
      pair: 'GBP/JPY',
      type: 'Long',
      entry: '189.900',
      exit: '191.100',
      pnl: '+$1,200.00',
      pips: '+120',
      status: 'win',
      strategy: 'RSI Divergence'
    },
    {
      id: 'TRD-1039',
      date: 'Oct 22, 2026',
      time: '15:45',
      pair: 'BTC/USD',
      type: 'Long',
      entry: '61200.00',
      exit: '64230.00',
      pnl: '+$3,030.00',
      pips: '+3030',
      status: 'win',
      strategy: 'Macro Trend Following'
    },
    {
      id: 'TRD-1038',
      date: 'Oct 21, 2026',
      time: '08:30',
      pair: 'USD/CAD',
      type: 'Short',
      entry: '1.3580',
      exit: '1.3610',
      pnl: '-$300.00',
      pips: '-30',
      status: 'loss',
      strategy: 'News Catalyst'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-8 max-w-container-max mx-auto min-h-screen flex flex-col gap-8">
      {/* Page Header */}
      <header className="mb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-label-caps text-label-caps text-secondary mb-2 block">Trade Mastery</span>
          <h1 className="font-headline-md text-headline-md text-on-surface">Trading Journal</h1>
          <p className="text-on-surface-variant max-w-2xl mt-2">
            Track your performance, review AI insights, and refine your edge with institutional-grade analytics.
          </p>
        </div>
        <button className="bg-[#032EA1] text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shrink-0">
          <span className="material-symbols-outlined">add</span>
          Log New Trade
        </button>
      </header>

      {/* Performance Dashboard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-2xl flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
          </div>
          <div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Net P&L (Month)</div>
          <div className="text-2xl lg:text-3xl font-bold text-on-surface">+$8,450.00</div>
          <div className="text-xs text-secondary mt-2 font-bold">+12.4% vs Last Month</div>
        </div>
        
        <div className="glass-card p-6 rounded-2xl flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">monitoring</span>
            </div>
          </div>
          <div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Profit Factor</div>
          <div className="text-2xl lg:text-3xl font-bold text-on-surface">2.41</div>
          <div className="text-xs text-secondary mt-2 font-bold">Top 5% of Traders</div>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">pie_chart</span>
            </div>
          </div>
          <div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Win Rate</div>
          <div className="text-2xl lg:text-3xl font-bold text-on-surface">68.5%</div>
          <div className="text-xs text-on-surface-variant mt-2 font-bold">Avg Win: $650 | Avg Loss: $280</div>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full bg-outline-variant/30 flex items-center justify-center text-on-surface">
              <span className="material-symbols-outlined">list_alt</span>
            </div>
          </div>
          <div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-1">Total Trades (Month)</div>
          <div className="text-2xl lg:text-3xl font-bold text-on-surface">42</div>
          <div className="text-xs text-on-surface-variant mt-2 font-bold">28 Wins | 14 Losses</div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-4">
        
        {/* Left/Center Column: Trade Log */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          <div className="glass-card rounded-2xl overflow-hidden border border-outline-variant/20">
            <div className="p-6 border-b border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-high/30">
              <h2 className="text-xl font-bold text-on-surface">Recent Trade Log</h2>
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-48">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-lg py-2 pl-9 pr-4 text-xs text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-outline" placeholder="Search pairs..." type="text"/>
                </div>
                <button className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg p-2 text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">filter_list</span>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-lowest text-on-surface-variant text-xs uppercase tracking-wider border-b border-outline-variant/20">
                    <th className="p-4 font-bold">Date & Time</th>
                    <th className="p-4 font-bold">Pair</th>
                    <th className="p-4 font-bold">Direction</th>
                    <th className="p-4 font-bold">Strategy</th>
                    <th className="p-4 font-bold">Entry / Exit</th>
                    <th className="p-4 font-bold text-right">Net P&L</th>
                    <th className="p-4 font-bold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {trades.map((trade, idx) => (
                    <tr key={trade.id} className={`border-b border-outline-variant/10 hover:bg-surface-variant/20 transition-colors ${idx % 2 === 0 ? 'bg-surface-container-lowest/20' : ''}`}>
                      <td className="p-4">
                        <div className="font-bold text-on-surface">{trade.date}</div>
                        <div className="text-xs text-on-surface-variant">{trade.time}</div>
                      </td>
                      <td className="p-4 font-mono font-bold">{trade.pair}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${trade.type === 'Long' ? 'bg-secondary/20 text-secondary' : 'bg-error/20 text-error'}`}>
                          {trade.type}
                        </span>
                      </td>
                      <td className="p-4 text-on-surface-variant text-xs">{trade.strategy}</td>
                      <td className="p-4 font-mono text-xs text-on-surface-variant">
                        <div>En: {trade.entry}</div>
                        <div>Ex: {trade.exit}</div>
                      </td>
                      <td className={`p-4 text-right font-mono font-bold ${trade.status === 'win' ? 'text-secondary' : 'text-error'}`}>
                        <div>{trade.pnl}</div>
                        <div className="text-[10px] opacity-80">{trade.pips} Pips</div>
                      </td>
                      <td className="p-4 text-center">
                        <button className="w-8 h-8 rounded-full bg-surface-container hover:bg-primary/20 hover:text-primary text-on-surface-variant transition-colors flex items-center justify-center mx-auto">
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-outline-variant/20 flex justify-center bg-surface-container-high/30">
              <button className="text-sm font-bold text-primary hover:text-primary-container transition-colors">View All Historical Trades</button>
            </div>
          </div>
        </div>

        {/* Right Column: AI Analysis */}
        <div className="flex flex-col gap-6">
          <div className="glass-card rounded-2xl p-6 border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="flex items-center gap-2 mb-6 border-b border-outline-variant/20 pb-4 relative z-10">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              <h3 className="text-lg font-bold text-on-surface">AI Performance Review</h3>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div>
                <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">thumb_up</span> Strongest Edge
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  You are highly profitable trading <strong className="text-on-surface">GBP/JPY</strong> and <strong className="text-on-surface">EUR/USD</strong> during the London session (07:00 - 11:00 GMT). Your "London Breakout" strategy has an <strong className="text-secondary">82% win rate</strong> this month.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-error uppercase tracking-wider mb-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">warning</span> Critical Leak
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Your performance drops significantly on <strong className="text-on-surface">XAU/USD (Gold)</strong> after 14:00 GMT. 4 of your last 5 losses occurred here due to early stop-loss triggers before NY session volatility. 
                </p>
              </div>
              
              <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10">
                <div className="text-xs font-bold text-on-surface mb-2">AI Recommendation</div>
                <div className="text-sm text-primary italic">
                  "Consider pausing XAU/USD trading during the NY crossover, or widen your stop loss by 1.5x ATR to account for structural volatility sweeps."
                </div>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-surface-container hover:bg-surface-variant border border-outline-variant/30 text-on-surface transition-colors py-3 rounded-full text-sm font-bold relative z-10">
              Run Deep Analysis on Last 100 Trades
            </button>
          </div>
          
          <div className="glass-card rounded-2xl p-6 border border-outline-variant/20">
            <h3 className="text-lg font-bold text-on-surface mb-4">Psychology Tracker</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant font-bold">Discipline (Following Plan)</span>
                  <span className="text-secondary font-bold">88%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[88%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant font-bold">Patience (Waiting for setups)</span>
                  <span className="text-tertiary font-bold">75%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[75%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-on-surface-variant font-bold">FOMO (Revenge Trading)</span>
                  <span className="text-error font-bold">12%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-error w-[12%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
