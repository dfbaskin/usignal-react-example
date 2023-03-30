import { signal, computed } from 'usignal';

export function defineMySignals() {
  const firstName = signal('John');
  const lastName = signal('Doe');
  const fullName = computed(() => `${firstName} ${lastName}`);
  return {
    firstName,
    lastName,
    fullName,
  };
}

export type MySignalsType = ReturnType<typeof defineMySignals>;
