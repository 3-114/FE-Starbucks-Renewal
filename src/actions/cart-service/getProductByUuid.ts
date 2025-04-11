'use server';
import { dummyProduct } from '@/data/ProductData';

export async function getProductByUuid(uuid: string) {
  return dummyProduct[uuid];
}

export async function removeItem(uuid: string) {
  console.log(uuid)
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true };
}

export async function updateQuantity(id: string, quantity: number) {
  console.log(id,quantity)
  await new Promise((resolve) => setTimeout(resolve, 300));
  return { success: true };
}

export async function ToggleCheckbox(id: string, checked: boolean) {
  console.log(`[ToggleCheckbox] ${id} → ${checked}`);
  await new Promise((res) => setTimeout(res, 200));
  return { success: true };
}