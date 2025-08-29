export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50 w-full" style={{ height: 'var(--header-height, 80px)' }}>
      <div className="w-full flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20">
            <span className="material-symbols-outlined text-gray-700 text-xl">menu</span>
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
            Recreational
          </h1>
        </div>
        
        {/* Add a placeholder for potential future navigation items */}
        <div className="flex items-center gap-2">
          {/* Future navigation items can go here */}
        </div>
      </div>
    </header>
  );
} 