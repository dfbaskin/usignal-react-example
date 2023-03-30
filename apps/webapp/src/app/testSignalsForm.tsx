import InputField from './inputField';
import { defineMySignals, MySignalsType } from './mySignals';
import { SignalsProvider, useSignalsContext } from './useSignalsContext';

export function TestSignalsForm() {
  return (
    <SignalsProvider defineSignals={defineMySignals}>
      <TestSignalContent />
    </SignalsProvider>
  );
}

function TestSignalContent() {
  return (
    <div>
      <div>
        <FirstNameField />
      </div>
      <div>
        <LastNameField />
      </div>
      <div>
        <FullNameField />
      </div>
    </div>
  );
}

function FirstNameField() {
  const { firstName } = useSignalsContext<MySignalsType>({
    firstName: null,
  });
  return <InputField label="First:" name="first" signal={firstName} />;
}

function LastNameField() {
  const { lastName } = useSignalsContext<MySignalsType>({
    lastName: null,
  });
  return <InputField label="Last:" name="last" signal={lastName} />;
}

function FullNameField() {
  const { fullName } = useSignalsContext<MySignalsType>({
    fullName: null,
  });
  return (
    <InputField label="Full:" name="full" signal={fullName} readOnly={true} />
  );
}

export default TestSignalsForm;
