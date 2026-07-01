import { useEffect, useState } from 'react';

const initialPairs = [
  { symbol: 'EUR/USD', price: 1.0924, change: 0.12 },
  { symbol: 'GBP/USD', price: 1.2645, change: -0.05 },
  { symbol: 'USD/JPY', price: 150.32, change: 0.45 },
  { symbol: 'BTC/USD', price: 64230.00, change: 2.34 },
  { symbol: 'ETH/USD', price: 3450.20, change: 1.89 },
  { symbol: 'XAU/USD', price: 2034.50, change: -0.21 },
  { symbol: 'AUD/USD', price: 0.6542, change: 0.08 },
  { symbol: 'USD/CAD', price: 1.3520, change: -0.15 },
];

export default function PriceTicker() {
  const [pairs, setPairs] = useState(initialPairs);

  useEffect(() => {
    // Simulate live price updates
    const interval = setInterval(() => {
      setPairs(prevPairs => 
        prevPairs.map(pair => {
          // Randomize change slightly
          const fluctuation = (Math.random() - 0.5) * 0.02; // Small fluctuation
          const newChange = pair.change + fluctuation;
          // Calculate new price based on fluctuation
          const newPrice = pair.price * (1 + fluctuation / 100);
          
          return {
            ...pair,
            price: newPrice,
            change: newChange
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-lg border-t border-outline-variant/20 py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Duplicate the list to create a seamless infinite loop */}
        {[...pairs, ...pairs, ...pairs].map((pair, index) => {
          const isPositive = pair.change >= 0;
          return (
            <div key={index} className="flex items-center gap-2 mx-6">
              <span className="font-bold text-sm text-on-surface">{pair.symbol}</span>
              <span className="text-sm font-mono">
                {pair.price < 10 ? pair.price.toFixed(4) : pair.price.toFixed(2)}
              </span>
              <span className={`text-xs flex items-center ${isPositive ? 'text-tertiary' : 'text-error'}`}>
                <span className="material-symbols-outlined text-[14px]">
                  {isPositive ? 'arrow_upward' : 'arrow_downward'}
                </span>
                {Math.abs(pair.change).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
