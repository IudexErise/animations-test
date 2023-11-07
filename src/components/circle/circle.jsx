import React from "react";
import styles from './circle.module.css';

export default function Circle({move}) {
  return (
    <div className={move ? styles.circleActive : styles.circleInactive} />
  )
}