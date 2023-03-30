import { signal, computed } from 'usignal';
import InputField2 from './inputField2';
import { SignalsProvider } from './useSignalsContext';

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
  return (
    <div>
      <div>
        <InputField2 label="First:" name="first" signalName="firstName" />
      </div>
      <div>
        <InputField2 label="Last:" name="last" signalName="lastName" />
      </div>
      <div>
        <InputField2
          label="Full:"
          name="full"
          signalName="fullName"
          readOnly={true}
        />
      </div>
    </div>
  );
}

export default TestSignalUsingContext;
