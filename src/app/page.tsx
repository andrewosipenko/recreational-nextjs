import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Map from '@/components/Map';
import HotelCard from '@/components/HotelCard';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50 w-full">
      <Header />
      <main className="flex-grow w-full" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <Introduction />
        <div className="h-[calc(100vh-var(--header-height)-8rem)] relative w-full">
          <Map />
          <HotelCard />
        </div>
      </main>
    </div>
  );
}
