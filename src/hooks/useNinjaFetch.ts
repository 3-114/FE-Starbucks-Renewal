import { useEffect, useState, useRef } from 'react';

export function useNinjaFetch<T>(
  fetcher: () => Promise<T>,
  shouldFetch: boolean
): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!shouldFetch || hasFetched.current) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetcher();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Fetch error:', err);
      } finally {
        hasFetched.current = true;
        setLoading(false);
      }
    };

    fetchData();
  }, [fetcher, shouldFetch]);

  return { data, loading, error };
}
