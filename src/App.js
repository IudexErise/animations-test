import styles from './App.module.css';
import Button from './components/button/button';
import Circle from './components/circle/circle';
import Cube from './components/cube/cube';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.animation}>
        <div className={styles.cubes}>
          <Cube text='1' />
          <Cube text='2' />
        </div>
        <Circle />
      </div>
      <Button />
    </div>
  );
}

export default App;
