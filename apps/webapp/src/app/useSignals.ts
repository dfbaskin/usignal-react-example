import { useEffect, useReducer, useRef } from 'react';
import { effect } from 'usignal';

interface SignalType {
  value: unknown;
}

export function useSignals(signals: SignalType[]) {
  const signalsRef = useRef<SignalType[]>([]);
  signalsRef.current = signals;
  const [, render] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const dispose = effect(() => {
      for (const signal of signalsRef.current ?? []) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        signal.value;
      }
      render();
    });
    return dispose;
  }, []);
}
