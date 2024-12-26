'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PuneToKarwarRoute() {
  const router = useRouter(); // Initialize the router

  const handleBookNowClick = () => {
    router.push('/HomePage'); // Navigates to the home page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-green-500 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">AIMCAB - Pune to Karwar Route</h1>
        <p className="mt-2 text-lg">Book your cab for a scenic journey from Pune to the beautiful coastal town of Karwar</p>
      </header>

      {/* Route Information Section */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Pune to Karwar - A Coastal Escape Awaits</h2>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-500">Distance & Duration</h3>
          <p className="text-gray-600 mt-2">The distance between Pune and Karwar is approximately 460 kilometers. The journey typically takes around 8 to 10 hours, depending on traffic and road conditions.</p>

          <h3 className="text-xl font-semibold text-green-500 mt-4">Route Highlights</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Scenic drive through the Western Ghats and coastal landscapes</li>
            <li>Enjoy the serene beauty of Karwar, known for its pristine beaches and calm environment</li>
            <li>Visit famous spots like Rabindranath Tagore Beach and the famous Karwar Marine Aquarium</li>
          </ul>
        </div>
      </section>

      {/* Available Vehicles Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Available Cars</h2>
        <div className="flex overflow-x-auto space-x-6 py-8 px-4">
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/car5.jpg" // Replace with your image path
              alt="Hatchback"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">Hatchback</p>
          </div>

          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/car1.jpeg" // Replace with your image path
              alt="Sedan"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">Sedan</p>
          </div>
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/suv.jpg" // Replace with your image path
              alt="SUV"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">SUV</p>
          </div>
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/muv.png" // Replace with your image path
              alt="MUV"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">MUV</p>
          </div>
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/car2.jpg" // Replace with your image path
              alt="Luxury"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">Luxury</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="mt-16 bg-green-500 text-white py-8 px-4 text-center rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Book Your Ride Now!</h2>
        <p className="mt-2">Select your preferred vehicle and get ready for a relaxing coastal journey to Karwar.</p>
        <button 
          onClick={handleBookNowClick} // Handle click to navigate to the home page
          className="mt-4 px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-100 transition"
        >
          Book Now
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-500 text-white py-4 text-center mt-16">
        <p>&copy; 2024 AIMCAB - Your trusted cab service for Pune to Karwar</p>
      </footer>
    </div>
  );
}