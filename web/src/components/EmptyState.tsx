import React from 'react';

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  actionButton?: React.ReactNode;
}

export default function EmptyState({ 
  icon = "inbox", 
  title, 
  description,
  actionButton 
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center glass-card rounded-2xl border border-outline-variant/20 h-64">
      <div className="w-16 h-16 rounded-full bg-surface-container-highest/50 flex items-center justify-center mb-4 border border-outline-variant/10">
        <span className="material-symbols-outlined text-[32px] text-on-surface-variant/50">{icon}</span>
      </div>
      <h3 className="text-lg font-bold text-on-surface mb-2">{title}</h3>
      <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
        {description}
      </p>
      {actionButton && (
        <div className="mt-6">{actionButton}</div>
      )}
    </div>
  );
}
