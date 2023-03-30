import styles from './app.module.scss';
import TestSignalUsingContext from './testSignalUsingContext';
import TestSignalUsingGlobals from './testSignalUsingGlobals';

export function App() {
  return (
    <div className={styles['container']}>
      <h1>uSignal/React</h1>
      <h2>Using Global Signals</h2>
      <TestSignalUsingGlobals />
      <h2>Using Signals on Context</h2>
      <TestSignalUsingContext />
    </div>
  );
}

export default App;
