import { createContext, ReactNode, useContext, useMemo, useRef } from 'react';
import { useSignals } from './useSignals';

export type SignalsType<T = unknown> = {
  value: T;
};

export type SignalsContextType = Record<string, SignalsType>;

const signalsContext = createContext<SignalsContextType>({});

export function SignalsProvider(props: {
  defineSignals: () => SignalsContextType;
  children: ReactNode;
}) {
  const { defineSignals, children } = props;
  const { Provider } = signalsContext;
  const signalsRef = useRef<SignalsContextType>();
  if (!signalsRef.current) {
    // Define signals only called once
    signalsRef.current = defineSignals();
  }
  return <Provider value={signalsRef.current}>{children}</Provider>;
}

export function useSignalsContext<T extends { [key: string]: null }>(
  signals: T
) {
  const ctx = useContext(signalsContext);
  const selectedSignals = useMemo(
    () => Object.fromEntries(Object.keys(signals).map((k) => [k, ctx[k]])),
    [ctx, signals]
  );
  useSignals(Object.values(selectedSignals));
  return selectedSignals as {
    [key in keyof T]: SignalsType<string>; // hack to string
  };
}
