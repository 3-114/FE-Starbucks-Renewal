import { useState, useEffect, useRef, useCallback } from 'react';

export function useDebouncedFetch<T>(
  initialState: T,
  serverAction: (state: T) => Promise<void>,
  delay = 10
): readonly [T, (nextState: T) => void] {
  const [localState, setLocalState] = useState<T>(initialState);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastSyncedState = useRef(initialState);

  const updateState = useCallback(
    (nextState: T) => {
      setLocalState(nextState);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(async () => {
        if (nextState !== lastSyncedState.current) {
          try {
            await serverAction(nextState);
            lastSyncedState.current = nextState;
          } catch (error) {
            console.error('서버 동기화 실패:', error);
            setLocalState(lastSyncedState.current);
          }
        }
      }, delay);
    },
    [serverAction, delay]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return [localState, updateState] as const;
}
