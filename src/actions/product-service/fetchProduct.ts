'use server';

import { dummyProducts } from '@/data/ProductData';

export async function getProductUuidsByCategory(
  category: string
): Promise<string[]> {
  return Object.values(dummyProducts)
    .filter((product) => product.category === category)
    .map((product) => product.uuid);
}
