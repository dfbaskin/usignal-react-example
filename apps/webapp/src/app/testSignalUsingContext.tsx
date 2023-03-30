import { signal, computed } from 'usignal';
import InputField from './inputField';
import { SignalsProvider, useSignalsContext } from './useSignalsContext';

function defineSignals() {
  const firstName = signal('John');
  const lastName = signal('Doe');
  const fullName = computed(() => `${firstName} ${lastName}`);
  return {
    firstName,
    lastName,
    fullName,
  };
}

export function TestSignalUsingContext() {
  return (
    <SignalsProvider defineSignals={defineSignals}>
      <TestSignalContent />
    </SignalsProvider>
  );
}

function TestSignalContent() {
  const { firstName, lastName, fullName } = useSignalsContext({
    firstName: null,
    lastName: null,
    fullName: null,
  });
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

export default TestSignalUsingContext;
