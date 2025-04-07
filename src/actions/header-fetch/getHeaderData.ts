import { GnbType } from '@/types/Initial/InitialDataTypes';

export async function getHeaderData(section: string): Promise<GnbType[]> {
  const res = await fetch(`${process.env.API_URL}/header/${section}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch header data for section: ${section}`);
  }

  const data: GnbType[] = await res.json();
  return data;
}
