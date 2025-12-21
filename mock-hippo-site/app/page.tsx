"use client";
import { useEffect, useState } from 'react';
import { generateFakeListings, FlatListing } from '@/lib/fakeData';
import Link from 'next/link';

export default function Home() {
  const [data, setData] = useState<FlatListing[]>([]);
  useEffect(() => { setData(generateFakeListings()); }, []);
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-900 text-white p-4">
        <div className="container mx-auto font-bold">Hippo Homes Sandbox 🦛</div>
      </nav>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {data.map(item => (
            <Link key={item.id} href={"/flat/" + item.id} className="bg-white border rounded-xl overflow-hidden shadow-sm">
              <img src={item.imageUrl} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="text-indigo-600 font-bold text-sm">Paris {item.arrondissement.toString().slice(-2)}e</div>
                <h3 className="font-bold truncate">{item.title}</h3>
                <div className="mt-2 text-xl font-black">{item.price} €</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
