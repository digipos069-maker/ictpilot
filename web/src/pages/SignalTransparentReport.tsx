import { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Pagination from '../components/Pagination';

export default function SignalTransparentReport() {
  useDocumentTitle("Signal Transparency");
  const [page, setPage] = useState(1);
  
  // Mock data for the historical signals
  const signalHistory = [
    { id: 'SIG-9842', date: 'Oct 28, 2026', asset: 'XAU/USD', action: 'Sell', entry: '2024.50', exit: '2012.00', result: 'Win', pips: '+125', rr: '1:3.2' },
    { id: 'SIG-9841', date: 'Oct 27, 2026', asset: 'EUR/USD', action: 'Buy', entry: '1.0910', exit: '1.0945', result: 'Win', pips: '+35', rr: '1:2.0' },
    { id: 'SIG-9840', date: 'Oct 26, 2026', asset: 'GBP/JPY', action: 'Buy', entry: '190.200', exit: '189.700', result: 'Loss', pips: '-50', rr: '-1.0' },
    { id: 'SIG-9839', date: 'Oct 25, 2026', asset: 'BTC/USD', action: 'Buy', entry: '62500', exit: '64800', result: 'Win', pips: '+2300', rr: '1:4.1' },
    { id: 'SIG-9838', date: 'Oct 24, 2026', asset: 'USD/JPY', action: 'Sell', entry: '150.80', exit: '149.90', result: 'Win', pips: '+90', rr: '1:2.5' },
    { id: 'SIG-9837', date: 'Oct 23, 2026', asset: 'AUD/USD', action: 'Buy', entry: '0.6520', exit: '0.6490', result: 'Loss', pips: '-30', rr: '-1.0' },
    { id: 'SIG-9836', date: 'Oct 22, 2026', asset: 'XAU/USD', action: 'Buy', entry: '1985.00', exit: '2010.00', result: 'Win', pips: '+250', rr: '1:5.0' },
    { id: 'SIG-9835', date: 'Oct 20, 2026', asset: 'EUR/GBP', action: 'Sell', entry: '0.8540', exit: '0.8510', result: 'Win', pips: '+30', rr: '1:1.5' },
  ];

  // Mock data for monthly performance
  const monthlyData = [
    { month: 'Oct 2026', pips: '+1,420', status: 'positive' },
    { month: 'Sep 2026', pips: '+2,150', status: 'positive' },
    { month: 'Aug 2026', pips: '-340', status: 'negative' },
    { month: 'Jul 2026', pips: '+3,890', status: 'positive' },
    { month: 'Jun 2026', pips: '+1,200', status: 'positive' },
    { month: 'May 2026', pips: '+950', status: 'positive' },
  ];

  return (
    <div className="pt-32 pb-24 px-8 max-w-container-max mx-auto min-h-screen flex flex-col gap-8">
      {/* Transparency Header */}
      <header className="mb-4 text-center max-w-3xl mx-auto">
        <span className="font-label-caps text-label-caps text-primary mb-2 block tracking-widest uppercase">Verified Audit Ledger</span>
        <h1 className="font-headline-md text-headline-md text-on-surface mb-4">Signal Transparency Report</h1>
        <p className="text-on-surface-variant">
          We believe in absolute transparency. Every AI-generated signal is permanently logged below. Review our all-time historical performance and verify the edge for yourself.
        </p>
      </header>

      {/* All-Time Performance Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center border-t-2 border-t-[#032EA1]/50">
          <div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-2">Total Signals</div>
          <div className="text-3xl font-bold text-on-surface">1,240</div>
          <div className="text-[10px] text-on-surface-variant mt-2 font-mono">Since Jan 2025</div>
        </div>
        
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center border-t-2 border-t-secondary/50">
          <div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-2">All-Time Win Rate</div>
          <div className="text-3xl font-bold text-secondary">88.5%</div>
          <div className="text-[10px] text-secondary mt-2 font-mono flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">verified</span> Verified Edge
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center border-t-2 border-t-[#F7931A]/50">
          <div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-2">Average RR</div>
          <div className="text-3xl font-bold text-on-surface">1:2.8</div>
          <div className="text-[10px] text-on-surface-variant mt-2 font-mono">Risk to Reward</div>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center border-t-2 border-t-primary/50">
          <div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold mb-2">Net Pips Captured</div>
          <div className="text-3xl font-bold text-primary">+14,500</div>
          <div className="text-[10px] text-on-surface-variant mt-2 font-mono">Across All Pairs</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-4">
        
        {/* Left Column: Monthly Breakdown */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="glass-card rounded-2xl p-6 border border-outline-variant/20 sticky top-24">
            <div className="flex items-center gap-2 mb-6 border-b border-outline-variant/20 pb-4">
              <span className="material-symbols-outlined text-on-surface">calendar_month</span>
              <h3 className="text-lg font-bold text-on-surface">Monthly Breakdown</h3>
            </div>
            
            <div className="flex flex-col gap-3">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/10">
                  <span className="text-sm font-bold text-on-surface-variant">{data.month}</span>
                  <span className={`text-sm font-mono font-bold ${data.status === 'positive' ? 'text-secondary' : 'text-error'}`}>
                    {data.pips} Pips
                  </span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 border border-outline-variant/30 text-on-surface-variant hover:text-on-surface transition-colors py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              Load Previous Year
            </button>
          </div>
        </div>

        {/* Right Column: Signal Ledger */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="glass-card rounded-2xl overflow-hidden border border-outline-variant/20">
            <div className="p-6 border-b border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-high/30">
              <h2 className="text-xl font-bold text-on-surface">Historical Signal Ledger</h2>
              <div className="flex gap-2">
                <button className="bg-surface-container border border-outline-variant/30 px-4 py-1.5 rounded-full text-xs font-bold text-on-surface flex items-center gap-1 hover:bg-surface-variant transition-colors">
                  <span className="material-symbols-outlined text-[14px]">download</span> Export CSV
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-surface-container-lowest text-on-surface-variant text-xs uppercase tracking-wider border-b border-outline-variant/20">
                    <th className="p-4 font-bold">Signal ID</th>
                    <th className="p-4 font-bold">Date</th>
                    <th className="p-4 font-bold">Asset & Action</th>
                    <th className="p-4 font-bold text-right">Entry / Exit</th>
                    <th className="p-4 font-bold text-right">R:R</th>
                    <th className="p-4 font-bold text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {signalHistory.map((signal, idx) => (
                    <tr key={signal.id} className={`border-b border-outline-variant/10 hover:bg-surface-variant/20 transition-colors ${idx % 2 === 0 ? 'bg-surface-container-lowest/20' : ''}`}>
                      <td className="p-4 font-mono text-xs text-outline">{signal.id}</td>
                      <td className="p-4 font-bold text-on-surface-variant">{signal.date}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${signal.action === 'Buy' ? 'bg-secondary/10 text-secondary border border-secondary/20' : 'bg-error/10 text-error border border-error/20'}`}>
                            {signal.action}
                          </span>
                          <span className="font-mono font-bold text-on-surface">{signal.asset}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right font-mono text-xs text-on-surface-variant">
                        <div>En: {signal.entry}</div>
                        <div>Ex: {signal.exit}</div>
                      </td>
                      <td className="p-4 text-right font-mono text-xs text-on-surface-variant">{signal.rr}</td>
                      <td className="p-4 text-right">
                        <div className={`font-bold ${signal.result === 'Win' ? 'text-secondary' : 'text-error'}`}>
                          {signal.result}
                        </div>
                        <div className={`text-[10px] font-mono ${signal.result === 'Win' ? 'text-secondary' : 'text-error'}`}>
                          {signal.pips} Pips
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <Pagination 
              currentPage={page}
              totalPages={155} // Math.ceil(1240 / 8)
              totalItems={1240}
              itemsPerPage={8}
              onPageChange={setPage}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
