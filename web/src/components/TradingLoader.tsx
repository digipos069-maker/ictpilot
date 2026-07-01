interface TradingLoaderProps {
  fullScreen?: boolean;
}

export default function TradingLoader({ fullScreen = false }: TradingLoaderProps) {
  const containerClasses = fullScreen 
    ? "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/90 backdrop-blur-md"
    : "flex flex-col items-center justify-center p-12 w-full h-full min-h-[300px]";

  return (
    <div className={containerClasses}>
      <style>{`
        @keyframes smoothCandle {
          0%, 100% { height: 1rem; }
          50% { height: 3.5rem; }
        }
        @keyframes smoothCandleWick {
          0%, 100% { height: 3rem; }
          50% { height: 5rem; }
        }
        .candle-body {
          animation: smoothCandle 1.5s ease-in-out infinite;
        }
        .candle-wick {
          animation: smoothCandleWick 1.5s ease-in-out infinite;
          position: absolute;
          width: 2px;
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
        }
      `}</style>

      {/* Candlestick Animation Container */}
      <div className="flex items-center justify-center gap-4 h-24 scale-50">
        
        {/* Candlestick 1 */}
        <div className="relative flex items-center justify-center">
          <div className="candle-wick bg-secondary" style={{ animationDelay: '0s' }}></div>
          <div className="candle-body w-3 bg-secondary rounded-sm shadow-[0_0_10px_rgba(210,187,255,0.5)]" style={{ animationDelay: '0s' }}></div>
        </div>

        {/* Candlestick 2 */}
        <div className="relative flex items-center justify-center">
          <div className="candle-wick bg-error" style={{ animationDelay: '0.2s' }}></div>
          <div className="candle-body w-3 bg-error rounded-sm shadow-[0_0_10px_rgba(255,180,171,0.5)]" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Candlestick 3 */}
        <div className="relative flex items-center justify-center">
          <div className="candle-wick bg-secondary" style={{ animationDelay: '0.4s' }}></div>
          <div className="candle-body w-3 bg-secondary rounded-sm shadow-[0_0_10px_rgba(210,187,255,0.5)]" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Candlestick 4 */}
        <div className="relative flex items-center justify-center">
          <div className="candle-wick bg-error" style={{ animationDelay: '0.6s' }}></div>
          <div className="candle-body w-3 bg-error rounded-sm shadow-[0_0_10px_rgba(255,180,171,0.5)]" style={{ animationDelay: '0.6s' }}></div>
        </div>

        {/* Candlestick 5 */}
        <div className="relative flex items-center justify-center">
          <div className="candle-wick bg-primary" style={{ animationDelay: '0.8s' }}></div>
          <div className="candle-body w-3 bg-primary rounded-sm shadow-[0_0_15px_rgba(253,169,255,0.6)]" style={{ animationDelay: '0.8s' }}></div>
        </div>
      </div>
    </div>
  );
}
