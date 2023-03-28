import { useEffect, useReducer } from 'react';
import { signal, computed, effect, batch, Signal } from 'usignal';

interface Props {
  label: string;
  name: string;
  signal: {
    value: string;
  };
  readOnly?: boolean;
}

export function InputField(props: Props) {
  const { label, name, signal, readOnly } = props;
  const [, render] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const dispose = effect(() => {
      signal.value;
      render();
    });
    return dispose;
  }, [signal]);

  return (
    <label>
      <span>{label}</span>
      <input
        name={name}
        value={signal.value}
        readOnly={Boolean(readOnly)}
        onChange={(evt) => {
          signal.value = evt.target.value;
        }}
      />
    </label>
  );
}

export default InputField;
