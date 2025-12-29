"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { generateFakeListings, FlatListing } from '@/lib/fakeData';
import Link from 'next/link';

export default function Detail() {
  const { id } = useParams();
  const [flat, setFlat] = useState<FlatListing | null>(null);

  useEffect(() => {
    // On génère la liste (qui est maintenant stable grâce à la modification de fakeData.ts)
    const list = generateFakeListings(50);
    // On cherche l'appartement correspondant à l'ID dans l'URL
    const foundFlat = list.find(f => f.id === id);
    setFlat(foundFlat || null);
  }, [id]);

  if (!flat) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Chargement de l'appartement...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto p-6 max-w-5xl">
        {/* Bouton retour vers la page d'accueil */}
        <Link href="/" className="text-indigo-600 font-bold hover:underline">
          ← Retour à la liste
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Image de l'appartement */}
          <img 
            src={flat.imageUrl} 
            alt={flat.title}
            className="rounded-2xl h-[400px] w-full object-cover shadow-lg" 
          />

          <div className="space-y-4">
            {/* Titre et Localisation */}
            <div>
              <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">
                Paris {flat.arrondissement.toString().slice(-2)}e
              </span>
              <h1 className="text-4xl font-black">{flat.title}</h1>
            </div>

            {/* Prix du loyer */}
            <div className="text-3xl font-bold text-indigo-700">
              {flat.price.toLocaleString()} € / mois
            </div>

            {/* Grille des caractéristiques techniques */}
            <div className="grid grid-cols-2 gap-4 border-y py-4 text-sm">
              <div>
                <span className="text-gray-400">Surface :</span> <b>{flat.surface} m²</b>
              </div>
              <div>
                <span className="text-gray-400">DPE :</span> <b>{flat.dpe}</b>
              </div>
              <div>
                <span className="text-gray-400">Étage :</span> <b>{flat.floor}</b>
              </div>
              <div>
                <span className="text-gray-400">Quartier (moyenne) :</span> <b>{flat.avgPriceDistrict}€/m²</b>
              </div>
            </div>

            {/* Description */}
            <div className="py-2">
              <h2 className="font-bold text-gray-800 mb-1">Description</h2>
              <p className="text-gray-600 italic leading-relaxed">
                {flat.description}
              </p>
            </div>

            {/* Bouton de candidature mis à jour vers la page /apply */}
            <Link 
              href="/apply" 
              className="block text-center w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-md"
            >
              Candidater via Hippo
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
