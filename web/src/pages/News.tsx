import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import type { RootState } from '../store/store';

interface NewsEvent {
  id: string;
  time: string;
  countdown: string;
  title: string;
  country: string;
  impact: string;
  effectLevel: number;
  affectedPairs: string[];
  forecast: string;
  previous: string;
  actual: string;
  status: string;
}

export default function News() {
  useDocumentTitle("Market News");
  const token = useSelector((state: RootState) => state.auth.token);
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [impactFilter, setImpactFilter] = useState('ALL');
  const [dateFilter, setDateFilter] = useState('today');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Integrate API from api/postman/news.json
        const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
        
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        };
        
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
        
        // Build query string based on filters
        const queryParams = new URLSearchParams();
        if (impactFilter !== 'ALL') {
          queryParams.append('filter', impactFilter);
        }
        queryParams.append('date', dateFilter);

        const response = await fetch(`${baseUrl}/api/v1/news?${queryParams.toString()}`, {
          headers
        });
        if (!response.ok) {
          throw new Error('Failed to fetch news events');
        }
        const data = await response.json();
        setNewsEvents(data.data || data);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [token, impactFilter, dateFilter]);

  // Helper function to render the "Level of Effect" meter (flames)
  const renderEffectMeter = (level: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((i) => (
          <span 
            key={i} 
            className={`material-symbols-outlined text-[16px] ${i <= level ? (level === 3 ? 'text-error animate-pulse' : level === 2 ? 'text-[#F7931A]' : 'text-primary') : 'text-outline-variant opacity-30'}`}
          >
            local_fire_department
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="pt-32 pb-24 px-8 max-w-container-max mx-auto min-h-screen flex flex-col gap-8">
      {/* Page Header & Filters */}
      <header className="mb-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-label-caps text-label-caps text-secondary mb-2 block">Macro Intelligence</span>
          <h1 className="font-headline-md text-headline-md text-on-surface">Economic Impact Feed</h1>
          <p className="text-on-surface-variant max-w-2xl mt-2">
            Track global economic events and instantly see their projected level of effect on your favorite trading pairs.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-full p-1 flex overflow-x-auto no-scrollbar">
            <button onClick={() => setImpactFilter('ALL')} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${impactFilter === 'ALL' ? 'bg-[#032EA1]/20 text-primary border border-primary/30' : 'text-on-surface-variant hover:text-on-surface border border-transparent'}`}>All News</button>
            <button onClick={() => setImpactFilter('HIGH')} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${impactFilter === 'HIGH' ? 'bg-[#032EA1]/20 text-primary border border-primary/30' : 'text-on-surface-variant hover:text-on-surface border border-transparent'}`}>High Impact</button>
            <button onClick={() => setImpactFilter('MEDIUM')} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${impactFilter === 'MEDIUM' ? 'bg-[#032EA1]/20 text-primary border border-primary/30' : 'text-on-surface-variant hover:text-on-surface border border-transparent'}`}>Medium Impact</button>
            <button onClick={() => setImpactFilter('LOW')} className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${impactFilter === 'LOW' ? 'bg-[#032EA1]/20 text-primary border border-primary/30' : 'text-on-surface-variant hover:text-on-surface border border-transparent'}`}>Low Impact</button>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">calendar_today</span>
            <select 
              value={dateFilter} 
              onChange={(e) => setDateFilter(e.target.value)}
              className="bg-surface-container-lowest border border-outline-variant/30 rounded-full py-2 pl-9 pr-8 text-xs font-bold text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer"
            >
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="week">This Week</option>
            </select>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-4">
        
        {/* Left/Center Column: Live Macro Feed */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          <h2 className="text-xl font-bold text-on-surface border-b border-outline-variant/20 pb-4">Today's Events</h2>
          
          {loading && <div className="text-on-surface-variant py-4">Loading news events...</div>}
          {error && <div className="text-error py-4">Error loading news: {error}</div>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newsEvents.map((event) => (
              <div key={event.id} className="glass-card rounded-2xl p-5 border border-outline-variant/20 hover:border-primary/30 transition-colors group">
                <div className="flex flex-col gap-4 h-full">
                  
                  {/* Time & Title */}
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center justify-center min-w-[70px] bg-surface-container-lowest rounded-xl p-2 border border-outline-variant/10">
                      <div className="text-sm font-bold text-on-surface">{event.time.split(' ')[0]}</div>
                      <div className="text-[10px] text-on-surface-variant">{event.time.split(' ')[1]}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex items-center gap-1 text-[10px] text-on-surface-variant font-bold border border-outline-variant/20 rounded px-1.5 py-0.5">
                          <span className="material-symbols-outlined text-[12px]">public</span> {event.country}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-tight">{event.title}</h3>
                    </div>
                  </div>

                  {/* Impact & Affected Pairs */}
                  <div className="border-t border-outline-variant/20 pt-4 flex flex-col justify-center mt-auto">
                    <div className="text-[10px] text-on-surface-variant uppercase font-bold mb-1">Level of Effect</div>
                    <div className="flex items-center gap-2 mb-2">
                      {renderEffectMeter(event.effectLevel)}
                      <span className={`text-xs font-bold ${event.effectLevel === 3 ? 'text-error' : event.effectLevel === 2 ? 'text-[#F7931A]' : 'text-primary'}`}>
                        {event.impact}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {event.affectedPairs.map(pair => (
                        <span key={pair} className="text-[10px] bg-surface-container-high px-1.5 py-0.5 rounded border border-outline-variant/10 text-on-surface font-mono">
                          {pair}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            <button className="bg-surface-container border border-outline-variant/30 text-on-surface px-6 py-2 rounded-full text-sm font-bold hover:bg-surface-variant transition-colors">
              Load Older Events
            </button>
          </div>
        </div>

        {/* Right Column: AI Market Impact Analysis */}
        <div className="flex flex-col gap-6">
          <div className="glass-card rounded-2xl p-6 border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent sticky top-24">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="flex items-center gap-2 mb-6 border-b border-outline-variant/20 pb-4 relative z-10">
              <span className="material-symbols-outlined text-primary">online_prediction</span>
              <h3 className="text-lg font-bold text-on-surface">AI Impact Analysis</h3>
            </div>
            
            <div className="mb-6 relative z-10">
              <div className="inline-block px-3 py-1 bg-error/10 border border-error/20 text-error rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                High Volatility Warning
              </div>
              <h4 className="text-xl font-bold text-on-surface mb-2">US Core CPI (MoM)</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Inflation data is expected to cause severe market turbulence. Our neural networks have simulated 10,000 potential outcomes based on historical reactions.
              </p>
              
              <div className="space-y-3">
                <div className="bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10 border-l-2 border-l-secondary">
                  <div className="text-xs font-bold text-on-surface mb-1 flex justify-between">
                    <span>If Actual &gt; 0.3%</span>
                    <span className="text-secondary">Bullish USD</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant">Expect immediate sell-off in XAU/USD (Target: 2005.00) and EUR/USD. High probability of DXY rally above 104.50.</div>
                </div>
                
                <div className="bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10 border-l-2 border-l-error">
                  <div className="text-xs font-bold text-on-surface mb-1 flex justify-between">
                    <span>If Actual &lt; 0.3%</span>
                    <span className="text-error">Bearish USD</span>
                  </div>
                  <div className="text-[11px] text-on-surface-variant">Expect aggressive short-covering in Gold. XAU/USD projected to test 2035.00 resistance.</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 border-t border-outline-variant/20 pt-4 relative z-10">
              <div className="text-xs font-bold text-on-surface uppercase tracking-wider mb-3">Affected Pairs Heatmap</div>
              <div className="flex flex-wrap gap-2">
                <div className="bg-error/10 text-error border border-error/20 px-3 py-1 rounded text-xs font-bold font-mono">XAU/USD</div>
                <div className="bg-error/10 text-error border border-error/20 px-3 py-1 rounded text-xs font-bold font-mono">EUR/USD</div>
                <div className="bg-[#F7931A]/10 text-[#F7931A] border border-[#F7931A]/20 px-3 py-1 rounded text-xs font-bold font-mono">BTC/USD</div>
                <div className="bg-outline-variant/10 text-on-surface-variant border border-outline-variant/20 px-3 py-1 rounded text-xs font-bold font-mono">GBP/USD</div>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-[#032EA1] text-white hover:brightness-110 transition-all py-3 rounded-full text-sm font-bold relative z-10 flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-[18px]">tune</span>
              Auto-Adjust Stop Losses
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
