import styles from './app.module.scss';
import TestSignalsForm from './testSignalsForm';

export function App() {
  return (
    <div className={styles['container']}>
      <h1>uSignal/React</h1>
      <TestSignalsForm />
    </div>
  );
}

export default App;
