import { useEffect, useState, useRef } from 'react';

export function useNinjaFetch<T>(
  fetcher: (signal: AbortSignal) => Promise<T>,
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

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetcher(controller.signal);
        setData(result);
      } catch (err) {
        if (!(err instanceof DOMException && err.name === 'AbortError')) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          console.error('Fetch error:', err);
        }
      } finally {
        hasFetched.current = true;
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [fetcher, shouldFetch]);

  return { data, loading, error };
}
