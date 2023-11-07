import React, { useEffect, useState } from "react";
import styles from './button.module.css';

export default function Button() {

  const [timer, setTimer] = useState('Start');
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
    setTimer(5);
  }

  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      setTimer('Start');
      setDisabled(false);
    }
  }, [timer])

  return (
    <button className={styles.button} disabled={disabled} onClick={() => handleClick()}>
      {timer}
    </button>
  )
}