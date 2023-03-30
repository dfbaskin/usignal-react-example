import { useSignalsContext } from './useSignalsContext';

interface Props {
  label: string;
  name: string;
  signalName: string;
  readOnly?: boolean;
}

export function InputField2(props: Props) {
  const { label, name, signalName, readOnly } = props;
  const { [signalName]: signal } = useSignalsContext({
    [signalName]: null,
  });

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

export default InputField2;
