"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a server. 
    // Here we just simulate success without a database.
    setSubmitted(true);
  };

  const FileInput = ({ label, id }: { label: string; id: string }) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">{label}</label>
      <input type="file" id={id} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" required />
    </div>
  );

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">
          <div className="text-5xl mb-4">✅</div>
          <h1 className="text-2xl font-bold mb-2">Dossier Envoyé !</h1>
          <p className="text-gray-600 mb-6">Votre candidature a été transmise au propriétaire. Les fichiers ont été traités localement (non sauvegardés).</p>
          <Link href="/" className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto max-w-3xl bg-white p-8 rounded-2xl shadow-sm border">
        <h1 className="text-3xl font-black mb-8 text-indigo-900">Candidature Location</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-bold border-b pb-2">Documents Locataire</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FileInput label="Pièce d'identité (Passport/CNI)" id="passport" />
              <FileInput label="Justificatif de revenus" id="income" />
              <FileInput label="Dernier avis d'imposition" id="tax" />
              <FileInput label="Contrat de travail" id="contract" />
              <FileInput label="3 dernières quittances" id="rent" />
              <FileInput label="Lettre de recommandation" id="ref" />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold border-b pb-2">Documents Garant</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FileInput label="ID du Garant" id="g-id" />
              <FileInput label="Revenus du Garant" id="g-income" />
              <FileInput label="Impôts du Garant" id="g-tax" />
            </div>
          </section>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold text-lg transition-colors">
            Soumettre mon dossier complet
          </button>
        </form>
      </div>
    </main>
  );
}
