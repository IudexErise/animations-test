import React from "react";
import styles from './cube.module.css';

export default function Cube({text, movable}) {
  return (
    <div className={movable ? styles.cubeActive : styles.cubeInactive}>
      {text}
    </div>
  )
}