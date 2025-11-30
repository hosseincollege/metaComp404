import React, { useState } from "react";
import LessonRoom from "./components/LessonRoom";

import python from "./lessons/python";
import networks from "./lessons/networks";
import algorithms from "./lessons/algorithms";
import iot from "./lessons/iot";
import cloud from "./lessons/cloud";
import circuits from "./lessons/circuits";

function normalizeLesson(raw, name) {
  if (Array.isArray(raw)) {
    return {
      title: name,
      color:
        name === "Python" ? "#306998" :
        name === "Networks" ? "#ff8844" :
        name === "Algorithms" ? "#00cc66" :
        name === "IoT" ? "#aa44ff" :
        name === "Cloud" ? "#00aaff" :
        name === "Electrical Circuits" ? "#ffcc00" :
        "#ffffff",
      chapters: raw.map((c, i) => ({
        id: "ch" + i,
        title: c.section || "Untitled",
        topics: (c.topics || []).map((t, j) => ({
          id: `t_${i}_${j}`,
          title: t.title,
          content: t.content,
          subtopics: t.subtopics || [],
        })),
      })),
    };
  }
  return raw;
}

const LESSONS = {
  python: normalizeLesson(python, "Python"),
  networks: normalizeLesson(networks, "Networks"),
  algorithms: normalizeLesson(algorithms, "Algorithms"),
  iot: normalizeLesson(iot, "IoT"),
  cloud: normalizeLesson(cloud, "Cloud"),
  circuits: normalizeLesson(circuits, "Electrical Circuits"),
};

export default function App() {
  const [activeLesson, setActiveLesson] = useState(null);

  if (activeLesson) {
    return (
      <LessonRoom
        lesson={activeLesson}
        onBack={() => setActiveLesson(null)}
      />
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>دانشگاه متاورس</h1>
      <p style={styles.subHeader}>یک درس را انتخاب کنید</p>

      <div style={styles.grid}>
        {Object.keys(LESSONS).map((key) => {
          const lesson = LESSONS[key];
          return (
            <div
              key={key}
              style={{ ...styles.card, borderColor: lesson.color }}
              onClick={() => setActiveLesson(lesson)}
            >
              <div
                style={{
                  ...styles.icon,
                  backgroundColor: lesson.color,
                }}
              >
                {lesson.title.substring(0, 2).toUpperCase()}
              </div>
              <h3 style={styles.cardTitle}>{lesson.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0f172a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    overflow: "hidden", // جلوگیری از اسکرول
    color: "white",
    direction: "rtl",
    fontFamily: "sans-serif",
  },

  header: {
    fontSize: "2.2rem",
    marginBottom: "4px",
    background: "linear-gradient(to right, #4eaaff, #a355ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subHeader: {
    fontSize: "1rem",
    marginBottom: "14px",
    color: "#b6c0d1",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 140px)", // کوچکتر
    gridTemplateRows: "repeat(2, 160px)",
    gap: "14px 18px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },

  card: {
    width: "140px",
    height: "160px",
    background: "rgba(30, 41, 59, 0.8)",
    borderRadius: "14px",
    border: "2px solid #334155",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "0.25s",
  },

  icon: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    fontWeight: "bold",
    boxShadow: "0 0 12px rgba(255,255,255,0.2)",
  },

  cardTitle: {
    marginTop: "10px",
    fontSize: "0.95rem",
  },
};
