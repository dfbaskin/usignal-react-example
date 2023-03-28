import produce from 'immer';
import { useEffect, useReducer } from 'react';
import { signal, computed, effect, batch, Signal } from 'usignal';
import InputField from './inputField';

const firstName = signal('John');
const lastName = signal('Doe');
const fullName = computed(() => `${firstName} ${lastName}`);

export function TestSignal() {
  const [, render] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    let value = {
      first: firstName.value,
      last: lastName.value,
    };
    const dispose = effect(() => {
      const updated = produce(value, (draft) => {
        draft.first = firstName.value;
        draft.last = lastName.value;
      });
      if (updated !== value) {
        value = updated;
        render();
      }
    });
    return dispose;
  }, []);
  return (
    <div>
      <div>
        <InputField
          label="First:"
          name="first"
          signal={firstName}
        />
      </div>
      <div>
        <InputField
          label="Last:"
          name="last"
          signal={lastName}
        />
      </div>
      <div>FullName: {fullName.value}</div>
    </div>
  );
}

export default TestSignal;
