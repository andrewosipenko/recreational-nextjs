export default function Map() {
  return (
    <div 
      className="h-full w-full bg-cover bg-center relative overflow-hidden" 
      style={{
        backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYZPgJZD-qulXe0l3X2rDqBU83tQS8cMg7DybSNB1RxidkFxFQ6eqD_J7u9xwYCgy6zPyhsu6IboEQ5KT2ZiXtvqCtDFIbEyLY1mRg8j8s1-uWg4A9xGnbBaesl-Yq69hokP7yJ6kHrnslWTz05555AK3s1_E5a4Ri2IKjUa04YDsDXepfsP-bVZe0IdaexN5LPraOpClrEaFONuSs3Ac4pzRW5IO02dLvqEQvgEFHu5LbwHuQB73ulj9179_F6z0dEYWZ4XRB5lU")'
      }}
    >
      
      {/* Main hotel marker (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button className="flex flex-col items-center group cursor-pointer">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300 ring-4 ring-red-600/30 hover:ring-red-600/50">
            <span className="material-symbols-outlined text-white text-2xl">hotel</span>
          </div>
          <div className="mt-2 bg-white px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium text-gray-800">Hotel Gołębiewski</span>
          </div>
        </button>
      </div>

      {/* Secondary hotel marker (top-left) */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <button className="flex flex-col items-center group cursor-pointer">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: 'var(--primary-color)' }}>
            <span className="material-symbols-outlined text-white text-xl">hotel</span>
          </div>
          <div className="mt-2 bg-white px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium text-gray-800">Hotel B</span>
          </div>
        </button>
      </div>

      {/* Secondary hotel marker (bottom-right) */}
      <div className="absolute top-2/3 left-3/4 -translate-x-1/2 -translate-y-1/2">
        <button className="flex flex-col items-center group cursor-pointer">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 hover:shadow-xl" style={{ backgroundColor: 'var(--primary-color)' }}>
            <span className="material-symbols-outlined text-white text-xl">hotel</span>
          </div>
          <div className="mt-2 bg-white px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium text-gray-800">Hotel C</span>
          </div>
        </button>
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-5 right-5 flex flex-col gap-3 z-10">
        <div className="flex flex-col rounded-xl shadow-lg bg-white/95 backdrop-blur-sm overflow-hidden">
          <button className="p-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
            <span className="material-symbols-outlined text-xl">add</span>
          </button>
          <hr className="border-gray-200" />
          <button className="p-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
            <span className="material-symbols-outlined text-xl">remove</span>
          </button>
        </div>
        <button className="p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100">
          <span className="material-symbols-outlined text-xl">near_me</span>
        </button>
      </div>
    </div>
  );
} 