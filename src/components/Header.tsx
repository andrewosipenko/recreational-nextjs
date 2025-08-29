export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span className="material-symbols-outlined text-gray-700">menu</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Recreational</h1>
        </div>
      </div>
    </header>
  );
} 