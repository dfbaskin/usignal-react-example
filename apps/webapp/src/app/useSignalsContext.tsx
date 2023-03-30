import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
} from 'react';
import { effect } from 'usignal';

export type SignalsContextType = Record<string, unknown>;

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

export function useSignalsContext<T extends SignalsContextType>(
  signals: Partial<{
    [key in keyof T]: null;
  }>
) {
  type SelectedSignalsType = Pick<T, keyof typeof signals>;
  type SignalsRefType = {
    updateCount: number;
    selectedSignals: SelectedSignalsType;
  }

  const ctx = useContext(signalsContext);

  const signalsRef = useRef<SignalsRefType>();
  if (!signalsRef.current) {
    signalsRef.current = {
      updateCount: 0,
      selectedSignals: Object.fromEntries(
        Object.keys(signals).map((k) => [k, ctx[k]])
      ) as SelectedSignalsType
    };
  }

  const subscribe = useCallback((callback: () => void) => {
    return effect(() => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      for (const signal of Object.values(signalsRef.current!.selectedSignals)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        signal.value;
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      signalsRef.current!.updateCount += 1;
      callback();
    });
  }, []);

  useSyncExternalStore(
    subscribe,
    () => signalsRef.current?.updateCount
  );

  return signalsRef.current.selectedSignals;
}
