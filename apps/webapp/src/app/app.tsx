import styles from './app.module.scss';
import TestSignal from './testSignal';

export function App() {
  return (
    <div className={styles['container']}>
      <h1>uSignal/React</h1>
      <TestSignal />
    </div>
  );
}

export default App;
