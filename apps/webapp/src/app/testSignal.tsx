import { useEffect, useReducer } from 'react';
import { signal, computed, effect, batch, Signal } from 'usignal';

const firstName = signal('John');
const lastName = signal('Doe');
const fullName = computed(() => `${firstName} ${lastName}`);

export function TestSignal() {
  const [, render] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const dispose = effect(() => {
      const value = fullName.value;
      render();
    });
    return dispose;
  }, []);
  return (
    <div>
      <div>
        <label>
          <span>First</span>
          <input
            name="first"
            value={firstName.value}
            onChange={(evt) => {
              firstName.value = evt.target.value;
            }}
          />
        </label>
        <label>
          <span>Last</span>
          <input
            name="last"
            value={lastName.value}
            onChange={(evt) => {
              lastName.value = evt.target.value;
            }}
          />
        </label>
      </div>
      <div>FullName: {fullName.value}</div>
    </div>
  );
}

export default TestSignal;
