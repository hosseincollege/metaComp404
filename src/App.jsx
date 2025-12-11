import React, { useState } from "react";
import LessonRoom from "./components/LessonRoom";

// دروس اصلی
import python from "./lessons/python";
import networks from "./lessons/networks";
import algorithms from "./lessons/algorithms";
import iot from "./lessons/iot";
import cloud from "./lessons/cloud";
import circuits from "./lessons/circuits";

// دروس رزرو
import jame from "./lessons/jame";
import reserv2 from "./lessons/reserv2";
import reserv3 from "./lessons/reserv3";
import reserv4 from "./lessons/reserv4";

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
        name === "jame" ? "#ff6b6b" :
        name === "Reserv 2" ? "#feca57" :
        name === "Reserv 3" ? "#48dbfb" :
        name === "Reserv 4" ? "#1dd1a1" :
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

  jame: normalizeLesson(jame, "jame"),
  reserv2: normalizeLesson(reserv2, "Reserv 2"),
  reserv3: normalizeLesson(reserv3, "Reserv 3"),
  reserv4: normalizeLesson(reserv4, "reserv 4"),
};

export default function App() {
  const [activeLesson, setActiveLesson] = useState(null);

  if (activeLesson) {
    return <LessonRoom lesson={activeLesson} onBack={() => setActiveLesson(null)} />;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>دانشگاه متاورس</h1>
      <p style={styles.subHeader}>یک درس را انتخاب کنید</p>

      {/* ناحیه اسکرول فقط عمودی */}
      <div style={styles.scrollArea}>
        <div style={styles.grid}>
          {Object.keys(LESSONS).map((key) => {
            const lesson = LESSONS[key];
            return (
              <div
                key={key}
                style={{ ...styles.card, borderColor: lesson.color }}
                onClick={() => setActiveLesson(lesson)}
              >
                <div style={{ ...styles.icon, backgroundColor: lesson.color }}>
                  {lesson.title.substring(0, 2).toUpperCase()}
                </div>
                <h3 style={styles.cardTitle}>{lesson.title}</h3>
              </div>
            );
          })}
        </div>
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
    color: "white",
    direction: "rtl",
    fontFamily: "sans-serif",
    overflow: "hidden", // خود کانتینر فقط ثابت می‌مونه
  },

  header: {
    fontSize: "2.2rem",
    marginBottom: "6px",
    background: "linear-gradient(to right, #4eaaff, #a355ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subHeader: {
    fontSize: "1rem",
    marginBottom: "12px",
    color: "#b6c0d1",
  },

  // فقط اسکرول عمودی
  scrollArea: {
    width: "100%",
    height: "calc(100vh - 120px)",
    overflowY: "auto",
    overflowX: "hidden", // ❌ جلوگیری از اسکرول افقی
    padding: "0 20px 40px 20px",
    boxSizing: "border-box",
  },

  // auto‑fit باعث پر شدن خودکار صفحه می‌شود
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "22px",
    justifyItems: "center",
    alignItems: "center",
  },

  card: {
    width: "140px",
    height: "160px",
    background: "rgba(30, 41, 59, 0.9)",
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
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },

  cardTitle: {
    marginTop: "10px",
    fontSize: "0.95rem",
  },
};
