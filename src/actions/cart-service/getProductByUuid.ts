'use server';
import { dummyProduct } from '@/data/ProductData';

export async function getProductByUuid(uuid: string) {
  return dummyProduct[uuid];
}
