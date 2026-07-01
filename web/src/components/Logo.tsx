export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="material-symbols-outlined text-on-primary text-xl">dataset</span>
      </div>
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-surface">ICTPilot</span>
    </a>
  );
}
