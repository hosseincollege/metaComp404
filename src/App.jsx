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

import pytuni from "./lessons/pytuni";
import netuni from "./lessons/netuni";
import alguni from "./lessons/alguni";
import iotuni from "./lessons/iotuni";
import clouni from "./lessons/clouni";
import ciruni from "./lessons/ciruni";

import pytam from "./lessons/pytam";

function normalizeLesson(raw, name) {
  if (Array.isArray(raw)) {
    return {
      title: name,
      color:
        // گروه اصلی
        name === "Python" ? "#306998" :
        name === "Networks" ? "#ff8844" :
        name === "Algorithms" ? "#00cc66" :
        name === "IoT" ? "#aa44ff" :
        name === "Cloud" ? "#00aaff" :
        name === "circuits" ? "#ffcc00" :
        name === "jame" ? "#ff6b6b" :

        // گروه دانشگاهی (زنده، متفاوت، غیر‌بی‌رنگ، هم‌خانواده)
        name === "pytuni" ? "#1574da" :      // آبی عمیق‌تر، زنده
        name === "netuni" ? "#ff6a00" :      // نارنجی متمایل به تنجرین، تیز
        name === "alguni" ? "#00b34d" :      // سبز جنگلی، زنده و غلیظ
        name === "iotuni" ? "#8a22e6" :      // بنفش تیره و پر‌سچوریشن
        name === "clouni" ? "#0088dd" :      // آبی متمایل به آسمانی-زنده
        name === "ciruni" ? "#e6b800" :      // زرد کهربایی، چشم‌گیر
        name === "pytam" ? "#0961c0" :
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
  circuits: normalizeLesson(circuits, "circuits"),

  jame: normalizeLesson(jame, "jame"),
  pytuni: normalizeLesson(pytuni, "pytuni"),
  netuni: normalizeLesson(netuni, "netuni"),
  alguni: normalizeLesson(alguni, "alguni"),
  iotuni: normalizeLesson(iotuni, "iotuni"),
  clouni: normalizeLesson(clouni, "clouni"),
  ciruni: normalizeLesson(ciruni, "ciruni"),

  pytam: normalizeLesson(pytam, "pytam"),
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
