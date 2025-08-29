export default function Map() {
  return (
    <div className="h-full w-full bg-cover bg-center relative" 
         style={{
           backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYZPgJZD-qulXe0l3X2rDqBU83tQS8cMg7DybSNB1RxidkFxFQ6eqD_J7u9xwYCgy6zPyhsu6IboEQ5KT2ZiXtvqCtDFIbEyLY1mRg8j8s1-uWg4A9xGnbBaesl-Yq69hokP7yJ6kHrnslWTz05555AK3s1_E5a4Ri2IKjUa04YDsDXepfsP-bVZe0IdaexN5LPraOpClrEaFONuSs3Ac4pzRW5IO02dLvqEQvgEFHu5LbwHuQB73ulj9179_F6z0dEYWZ4XRB5lU")'
         }}>
      
      {/* Main hotel marker (center) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button className="flex flex-col items-center group">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform ring-4 ring-red-600/50">
            <span className="material-symbols-outlined text-white text-2xl">hotel</span>
          </div>
        </button>
      </div>

      {/* Secondary hotel marker (top-left) */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <button className="flex flex-col items-center group">
          <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-white text-xl">hotel</span>
          </div>
        </button>
      </div>

      {/* Secondary hotel marker (bottom-right) */}
      <div className="absolute top-2/3 left-3/4 -translate-x-1/2 -translate-y-1/2">
        <button className="flex flex-col items-center group">
          <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-white text-xl">hotel</span>
          </div>
        </button>
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-5 right-5 flex flex-col gap-2 z-10">
        <div className="flex flex-col rounded-md shadow-md bg-white">
          <button className="p-3 text-gray-700 hover:bg-gray-100 rounded-t-md">
            <span className="material-symbols-outlined">add</span>
          </button>
          <hr className="border-gray-200" />
          <button className="p-3 text-gray-700 hover:bg-gray-100 rounded-b-md">
            <span className="material-symbols-outlined">remove</span>
          </button>
        </div>
        <button className="p-3 bg-white rounded-md shadow-md text-gray-700 hover:bg-gray-100">
          <span className="material-symbols-outlined">near_me</span>
        </button>
      </div>
    </div>
  );
} 