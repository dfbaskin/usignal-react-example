import { signal, computed } from 'usignal';
import InputField from './inputField';

const firstName = signal('John');
const lastName = signal('Doe');
const fullName = computed(() => `${firstName} ${lastName}`);

export function TestSignalUsingGlobals() {
  return (
    <div>
      <div>
        <InputField label="First:" name="first" signal={firstName} />
      </div>
      <div>
        <InputField label="Last:" name="last" signal={lastName} />
      </div>
      <div>
        <InputField
          label="Full:"
          name="full"
          signal={fullName}
          readOnly={true}
        />
      </div>
    </div>
  );
}

export default TestSignalUsingGlobals;
