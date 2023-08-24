import React from "react";
import { highScores } from "../utilities/highScoreData";
import styles from "../styles/HighScore.module.css";

export default function HighScore() {
  return (
    <div>
      <div className={styles.highscores}>
        {highScores.map((highScore, index) => (
          <ul key={index} className={styles.list}>
            <li>User -- {index + 1}</li>
            <li>Username: {highScore.username}</li>
            <li>Date: {highScore.date}</li>
            <li>Score: {highScore.score}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
