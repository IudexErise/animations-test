import React from "react";
import styles from './cube.module.css';

export default function Cube({text}) {
  return (
    <div className={styles.cube}>
      {text}
    </div>
  )
}