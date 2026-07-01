import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import type { RootState } from '../store/store';
import TradingLoader from '../components/TradingLoader';
import EmptyState from '../components/EmptyState';

interface NewsDetailData {
  id: string;
  eventTime: string;
  title: string;
  country: string;
  category: string;
  impact: string;
  effectLevel: number;
  affectedPairs: string[];
  status: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  useDocumentTitle("News Detail");
  const token = useSelector((state: RootState) => state.auth.token);
  
  const [event, setEvent] = useState<NewsDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
        };
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const response = await fetch(`${baseUrl}/api/v1/news/${id}`, { headers });
        if (!response.ok) {
          throw new Error('Failed to fetch news details');
        }
        const data = await response.json();
        setEvent(data.data || data);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchDetail();
  }, [id, token]);

  const renderEffectMeter = (level: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((i) => (
          <span 
            key={i} 
            className={`material-symbols-outlined text-[20px] ${i <= level ? (level === 3 ? 'text-error animate-pulse' : level === 2 ? 'text-[#F7931A]' : 'text-primary') : 'text-outline-variant opacity-30'}`}
          >
            local_fire_department
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="pt-32 pb-24 px-8 max-w-4xl mx-auto min-h-screen flex flex-col gap-6">
      <Link to="/news" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors w-fit mb-4 text-sm font-bold">
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back to Feed
      </Link>

      {loading ? (
        <TradingLoader />
      ) : error ? (
         <div className="text-error py-4">Error: {error}</div>
      ) : !event ? (
         <EmptyState title="Not Found" description="This news event could not be found." />
      ) : (
        <div className="glass-card rounded-3xl p-8 border border-outline-variant/20 relative overflow-hidden shadow-2xl shadow-primary/5">
          {/* Decorative Background Blob */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

          <header className="mb-8 border-b border-outline-variant/20 pb-8 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded bg-surface-container-highest border border-outline-variant/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">public</span> {event.country}
                </span>
                <span className="px-3 py-1 rounded bg-surface-container-highest border border-outline-variant/10 text-xs font-bold uppercase tracking-wider">
                  {event.category}
                </span>
                <span className={`px-3 py-1 rounded border text-xs font-bold uppercase tracking-wider ${
                  event.status === 'UPCOMING' ? 'bg-[#F7931A]/10 text-[#F7931A] border-[#F7931A]/20' : 
                  'bg-secondary/10 text-secondary border-secondary/20'
                }`}>
                  {event.status}
                </span>
              </div>
              <div className="text-sm font-bold text-on-surface-variant">
                {new Date(event.eventTime).toLocaleString(undefined, {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                  hour: '2-digit', minute: '2-digit'
                })}
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-headline-md text-on-surface leading-tight">
              {event.title}
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="flex flex-col gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10">
                <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary">analytics</span>
                  Impact Analysis
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface text-[24px]">online_prediction</span>
                  </div>
                  <div>
                    <div className="text-sm text-on-surface-variant mb-1">Projected Volatility</div>
                    <div className="flex items-center gap-3">
                      {renderEffectMeter(event.effectLevel)}
                      <span className={`font-bold ${event.effectLevel === 3 ? 'text-error' : event.effectLevel === 2 ? 'text-[#F7931A]' : 'text-primary'}`}>
                        {event.impact} IMPACT
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {event.source && (
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10">
                  <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-primary">link</span>
                    Source Reference
                  </h3>
                  <a href={event.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-highest border border-outline-variant/30 px-6 py-3 rounded-full text-on-surface transition-all w-fit font-bold shadow-sm hover:shadow-md mt-2">
                    <span>View Original Source</span>
                    <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 h-full">
                <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary">currency_exchange</span>
                  Affected Assets
                </h3>
                <div className="flex flex-wrap gap-2">
                  {event.affectedPairs && event.affectedPairs.map(pair => (
                    <div key={pair} className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg border border-outline-variant/20 shadow-inner">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="font-mono font-bold text-on-surface">{pair}</span>
                    </div>
                  ))}
                  {(!event.affectedPairs || event.affectedPairs.length === 0) && (
                    <div className="text-sm text-on-surface-variant">No specific assets flagged.</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}
