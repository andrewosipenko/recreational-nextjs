export default function HotelCard() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 w-full">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden md:max-w-2xl transform transition-transform duration-300 hover:scale-[1.02] w-full">
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0">
            <img
              alt="Hotel Gołębiewski"
              className="h-48 w-full md:w-48 object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipM7lT6L8X4vFzJjY2B8U7G9D5K8L7H2A9R5F4W3=s1360-w1360-h1020"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <div className="uppercase tracking-wide text-sm font-semibold mb-1" style={{ color: 'var(--primary-color)' }}>
              Hotel
            </div>
            <h2 className="text-xl md:text-2xl leading-tight font-bold text-gray-900 mb-3">
              Hotel Gołębiewski
            </h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Experience luxury and comfort in the heart of Poland. Perfect for both business and leisure travelers.
            </p>
            <a
              className="inline-flex items-center hover:underline font-medium transition-colors duration-200"
              style={{ color: 'var(--primary-color)' }}
              href="#"
            >
              Odwiedź stronę
              <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 