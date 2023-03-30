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
