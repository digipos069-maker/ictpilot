import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function MyProfile() {
  useDocumentTitle('My Profile | ICTPilot');

  return (
    <div className="pt-32 pb-section-padding px-6 min-h-[70vh] flex flex-col items-center justify-center">
      <div className="glass-card p-12 rounded-3xl text-center max-w-2xl w-full border border-primary/20">
        <div className="w-24 h-24 bg-surface-container rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-primary">
          <span className="material-symbols-outlined text-5xl text-primary">account_circle</span>
        </div>
        <h1 className="font-display-md text-display-md mb-4 text-glow">Welcome</h1>
        <p className="text-on-surface-variant font-body-lg text-body-lg">
          Welcome to your profile! Here you can manage your settings, subscription, and trading preferences.
        </p>
      </div>
    </div>
  );
}
