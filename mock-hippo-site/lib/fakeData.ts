import { sample, random } from 'lodash';
export interface FlatListing {
  id: string; title: string; price: number; charges: number; surface: number;
  arrondissement: number; description: string; imageUrl: string;
  year: number; floor: number; hasElevator: boolean;
  dpe: string; ges: string; heating: string; avgPriceDistrict: number;
}
const districtStats: Record<number, number> = {
  75001: 47, 75002: 49, 75003: 45, 75004: 49, 75005: 43, 75006: 48, 75007: 46, 
  75008: 45, 75009: 39, 75010: 36, 75011: 37, 75012: 35, 75013: 36, 75014: 37, 
  75015: 36, 75016: 38, 75017: 38, 75018: 34, 75019: 32, 75020: 32
};
export const generateFakeListings = (count = 24): FlatListing[] => {
  return Array.from({ length: count }, (_, i) => {
    const arr = random(75001, 75020);
    const surface = random(18, 90);
    const avg = districtStats[arr] || 35;
    return {
      id: "flat-" + (i + 1),
      title: sample(['Studio', 'Appartement', 'Loft']) + " " + sample(['lumineux', 'cosy', 'moderne']),
      price: Math.round(surface * (avg + random(-5, 5))),
      charges: random(50, 200),
      surface, arrondissement: arr,
      description: "Bel appartement typiquement parisien. Parfait état.",
      imageUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=800",
      year: random(1880, 1960), floor: random(0, 6), hasElevator: random(0, 1) === 1,
      dpe: sample(['B', 'C', 'D', 'E', 'F']), ges: sample(['A', 'B', 'C']),
      heating: sample(['Individuel électrique', 'Collectif gaz']), avgPriceDistrict: avg
    };
  });
};
