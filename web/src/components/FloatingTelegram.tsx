export default function FloatingTelegram() {
  return (
    <a
      href="https://t.me/your_telegram_group" // Replace with actual link
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#2AABEE] hover:bg-[#229ED9] text-white rounded-full shadow-[0_4px_14px_rgba(42,171,238,0.4)] hover:shadow-[0_6px_20px_rgba(42,171,238,0.6)] transition-all hover:scale-110 active:scale-95 group"
      aria-label="Join our Telegram Community"
    >
      <svg
        className="w-7 h-7 -ml-1 mt-0.5" // Slight offset to visually center the telegram plane
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.98 1.25-5.58 3.67-.53.36-.1.01 1.01-.35.34-.11 1.04-.32 1.34-.48.27-.14.58-.12.79.02.26.17.49.44.75.76.22.28.46.58.74.88.08.09.21.13.33.09.11-.03.2-.12.24-.23.1-.24.3-.85.5-1.54.43-1.46.91-3.13 1.35-4.52.12-.39.26-.51.41-.53.15-.02.32.08.52.28z" />
      </svg>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-surface-container-high border border-outline-variant/30 text-on-surface text-sm font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
        Join Community
      </span>
    </a>
  );
}
