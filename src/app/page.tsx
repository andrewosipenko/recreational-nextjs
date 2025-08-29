import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Map from '@/components/Map';
import HotelCard from '@/components/HotelCard';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Introduction />
        <div className="h-[calc(100vh-14rem)] relative">
          <Map />
          <HotelCard />
        </div>
      </main>
    </div>
  );
}
