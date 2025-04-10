'use server';

import { revalidatePath } from 'next/cache';

export async function ToggleCheckbox(id: string, checked: boolean) {
  console.log(`Updating checkbox for item ${id} → ${checked}`);
  revalidatePath('/cart');
}
