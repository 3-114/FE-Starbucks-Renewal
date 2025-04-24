import { useRef, useCallback } from 'react';

export function useDebouncedFetch<T>(fetcher: () => Promise<T>): () => void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFetch = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      fetcher();
    }, 300);
  }, [fetcher]);

  return debouncedFetch;
}
