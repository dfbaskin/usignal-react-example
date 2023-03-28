interface Props {
  label: string;
  name: string;
  signal: {
    value: string;
  };
}

export function InputField(props: Props) {
  const { label, name, signal } = props;
  return (
    <label>
      <span>{label}</span>
      <input
        name={name}
        value={signal.value}
        onChange={(evt) => {
          signal.value = evt.target.value;
        }}
      />
    </label>
  );
}

export default InputField;
