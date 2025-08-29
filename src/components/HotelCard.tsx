export default function HotelCard() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="flex">
          <div className="flex-shrink-0">
            <img
              alt="Hotel Gołębiewski"
              className="h-48 w-48 object-cover"
              src="https://lh3.googleusercontent.com/p/AF1QipM7lT6L8X4vFzJjY2B8U7G9D5K8L7H2A9R5F4W3=s1360-w1360-h1020"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <div className="uppercase tracking-wide text-sm text-[var(--primary-color)] font-semibold">
              Hotel
            </div>
            <a
              className="block mt-1 text-2xl leading-tight font-bold text-black hover:underline"
              href="#"
            >
              Hotel Gołębiewski
            </a>
            <a
              className="mt-4 text-gray-600 hover:text-[var(--primary-color)] hover:underline"
              href="#"
            >
              Odwiedź stronę
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 