import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages?: number;
  hasNextPage?: boolean;
  onPageChange: (page: number) => void;
  totalItems?: number;
  itemsPerPage?: number;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  hasNextPage,
  onPageChange,
  totalItems,
  itemsPerPage
}: PaginationProps) {
  
  const canGoPrev = currentPage > 1;
  const canGoNext = totalPages ? currentPage < totalPages : !!hasNextPage;

  let pagesToShow = [];
  if (totalPages) {
    const maxPages = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxPages - 1);
    if (end - start + 1 < maxPages) {
       start = Math.max(1, end - maxPages + 1);
    }
    for (let i = start; i <= end; i++) {
      pagesToShow.push(i);
    }
  } else {
    // If no total pages known, show contextual pages based on current and hasNext
    if (currentPage > 1) pagesToShow.push(currentPage - 1);
    pagesToShow.push(currentPage);
    if (hasNextPage) pagesToShow.push(currentPage + 1);
  }

  const startItem = itemsPerPage ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = itemsPerPage ? Math.min((totalItems || 0), currentPage * itemsPerPage) : 0;

  return (
    <div className="p-4 border-t border-outline-variant/20 flex flex-col sm:flex-row justify-between items-center gap-4 bg-surface-container-high/30">
      <span className="text-xs text-on-surface-variant text-center sm:text-left">
        {totalItems && itemsPerPage 
          ? `Showing ${startItem}-${endItem} of ${totalItems.toLocaleString()} items` 
          : `Page ${currentPage}`
        }
      </span>
      <div className="flex gap-1">
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!canGoPrev}
          className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-[16px]">chevron_left</span>
        </button>
        
        {pagesToShow.map(p => (
          <button 
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-8 h-8 rounded flex items-center justify-center text-sm transition-colors ${
              p === currentPage 
                ? 'bg-primary/20 text-primary font-bold' 
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-variant'
            }`}
          >
            {p}
          </button>
        ))}

        <button 
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!canGoNext}
          className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
