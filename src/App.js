import { useState } from 'react';
import styles from './App.module.css';
import Button from './components/button/button';
import Circle from './components/circle/circle';
import Cube from './components/cube/cube';

function App() {

  const [move, setMove] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.animation}>
          <div className={styles.movable}>
          <Cube text='1' movable={true} />
          <Circle move={move}/>
          </div>
          <Cube text='2' movable={false} />
      </div>
      <Button setMove={setMove}/>
    </div>
  );
}

export default App;
