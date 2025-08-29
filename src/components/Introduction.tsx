export default function Introduction() {
  return (
    <div className="w-full px-4 py-6 sm:py-8 lg:py-10">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
        <div className="flex-shrink-0">
          <img
            alt="Andrzej's photo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg ring-2 ring-white"
            src="https://lh3.googleusercontent.com/pw/AP1GczPrvN9hBkdS_P2Fz1mJ3t8bC5Yp2oG3i2C1g9g1n7i3o_fJz2v2b3h4qR9bB0v5s6f7a8c9e0d1b2a3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z"
          />
        </div>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center sm:text-left max-w-2xl">
          Hej, my name is Andrzej, I like to travel in Poland and prepared a list of recreational places for myself but later on decided to share on the internet.
        </p>
      </div>
    </div>
  );
} 