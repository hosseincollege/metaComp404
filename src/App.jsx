import React, { useState } from "react";
import LessonRoom from "./components/LessonRoom";

// --- وارد کردن فایل‌های دیتا (مسیرها را طبق پروژه خود چک کنید) ---
import python from "./lessons/python";
import networks from "./lessons/networks";
import algorithms from "./lessons/algorithms";
import iot from "./lessons/iot";
import cloud from "./lessons/cloud";

// --- تابع نرمال‌سازی دیتا (همان تابعی که قبلا در LessonRoom بود) ---
function normalizeLesson(raw, name) {
  if (Array.isArray(raw)) {
    return {
      title: name,
      // رنگ‌ها را اینجا می‌توانیم اختصاصی کنیم
      color: name === "Python" ? "#306998" : 
             name === "Networks" ? "#ff8844" :
             name === "Algorithms" ? "#00cc66" :
             name === "IoT" ? "#aa44ff" : "#00aaff",
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

// --- لیست نهایی درس‌ها ---
const LESSONS = {
  python: normalizeLesson(python, "Python"),
  networks: normalizeLesson(networks, "Networks"),
  algorithms: normalizeLesson(algorithms, "Algorithms"),
  iot: normalizeLesson(iot, "IoT"),
  cloud: normalizeLesson(cloud, "Cloud"),
};

export default function App() {
  // استیت: کدام درس الان فعال است؟ (اگر null باشد یعنی در منو هستیم)
  const [activeLesson, setActiveLesson] = useState(null);

  // اگر درسی انتخاب شده باشد، کامپوننت سه بعدی را نشان بده
  if (activeLesson) {
    return (
      <LessonRoom 
        lesson={activeLesson} 
        onBack={() => setActiveLesson(null)} 
      />
    );
  }

  // اگر درسی انتخاب نشده، منوی انتخاب (Lobby) را نشان بده
  // (اینجا از HTML/CSS استفاده می‌کنیم که تمیزتر و سبک‌تر از سه بعدی برای منو است)
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>دانشگاه متاورس</h1>
      <p style={styles.subHeader}>لطفاً یک درس را برای ورود انتخاب کنید</p>
      
      <div style={styles.grid}>
        {Object.keys(LESSONS).map((key) => {
          const lesson = LESSONS[key];
          return (
            <div 
              key={key} 
              style={{...styles.card, borderColor: lesson.color}}
              onClick={() => setActiveLesson(lesson)}
            >
              <div style={{...styles.icon, backgroundColor: lesson.color}}>
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

// --- استایل‌های ساده درون خطی برای زیبایی منو ---
const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#0f172a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    color: "white",
    direction: "rtl",
  },
  header: {
    fontSize: "3rem",
    marginBottom: "1rem",
    background: "linear-gradient(to right, #4eaaff, #a355ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subHeader: {
    fontSize: "1.2rem",
    color: "#94a3b8",
    marginBottom: "3rem",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "1000px",
  },
  card: {
    width: "180px",
    height: "200px",
    backgroundColor: "rgba(30, 41, 59, 0.8)",
    border: "2px solid #334155",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  cardTitle: {
    marginTop: "15px",
    fontSize: "1.2rem",
  },
  icon: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  },
};
