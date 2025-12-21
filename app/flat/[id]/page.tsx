"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { generateFakeListings, FlatListing } from '@/lib/fakeData';
import Link from 'next/link';

export default function Detail() {
  const { id } = useParams();
  const [flat, setFlat] = useState<FlatListing | null>(null);
  useEffect(() => {
    const list = generateFakeListings(50);
    setFlat(list.find(f => f.id === id) || list[0]);
  }, [id]);
  if (!flat) return null;
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto p-6 max-w-5xl">
        <Link href="/" className="text-indigo-600 font-bold underline">← Retour</Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <img src={flat.imageUrl} className="rounded-2xl h-[400px] w-full object-cover shadow-lg" />
          <div className="space-y-4">
            <h1 className="text-4xl font-black">{flat.title}</h1>
            <div className="text-3xl font-bold text-indigo-700">{flat.price} € / mois</div>
            <div className="grid grid-cols-2 gap-4 border-y py-4 text-sm">
              <div><span className="text-gray-400">Surface:</span> <b>{flat.surface} m²</b></div>
              <div><span className="text-gray-400">DPE:</span> <b>{flat.dpe}</b></div>
              <div><span className="text-gray-400">Étage:</span> <b>{flat.floor}</b></div>
              <div><span className="text-gray-400">Quartier:</span> <b>{flat.avgPriceDistrict}€/m²</b></div>
            </div>
            <p className="text-gray-600 italic leading-relaxed">{flat.description}</p>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg">Candidater via Hippo</button>
          </div>
        </div>
      </div>
    </main>
  );
}
