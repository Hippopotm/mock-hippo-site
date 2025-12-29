import { sample } from 'lodash';

export interface FlatListing {
  id: string; title: string; price: number; surface: number;
  arrondissement: number; description: string; imageUrl: string;
  floor: number; dpe: string; avgPriceDistrict: number;
}

const districtStats: Record<number, number> = {
  75001: 47, 75002: 49, 75003: 45, 75004: 49, 75005: 43, 75006: 48, 75010: 36, 75018: 34
};

export const generateFakeListings = (count = 24): FlatListing[] => {
  return Array.from({ length: count }, (_, i) => {
    // Use the index 'i' to make values predictable instead of random
    const arr = 75001 + (i % 20); 
    const surface = 20 + (i * 3) % 60;
    const avg = districtStats[arr] || 35;
    
    // Price is now a fixed calculation based on index
    const price = Math.round(surface * (avg + (i % 5))); 

    return {
      id: `flat-${i + 1}`,
      title: `${i % 2 === 0 ? 'Studio' : 'Appartement'} ${i % 3 === 0 ? 'moderne' : 'lumineux'}`,
      price,
      surface,
      arrondissement: arr,
      description: "Bel appartement typiquement parisien. État impeccable.",
      imageUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=800",
      floor: (i % 6),
      dpe: ['B', 'C', 'D'][i % 3],
      avgPriceDistrict: avg
    };
  });
};
