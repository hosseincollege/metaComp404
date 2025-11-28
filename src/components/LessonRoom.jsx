import React, { useState, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";

// کامپوننت‌های نمایش سه‌بعدی
import ClassroomHorizontal from "./ClassroomHorizontal"; 
import ClassroomFloors from "./ClassroomFloors";
import ClassroomRandom from "./ClassroomRandom";

/* ========================================================
   1) Camera Fly-To (Smooth cinematic movement) - FIX FOR LOCK
======================================================== */
// هدف: حرکت نرم دوربین، و رها کردن کنترل‌ها پس از رسیدن
function CameraFlyTo({ targetPosition, isFlying, setIsFlying }) {
  const { camera, controls } = useThree();
  // استفاده از useMemo برای جلوگیری از ایجاد مجدد اشیاء در هر رندر
  const desiredPos = useMemo(() => new THREE.Vector3(0, 5, 35), []);
  const desiredTarget = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useFrame((_, delta) => {
    // فقط در صورتی که در حالت پرواز باشیم، موقعیت‌ها را به‌روز می‌کنیم
    if (!isFlying || !controls) return;

    // هدف نگاه جدید
    desiredTarget.set(targetPosition[0], targetPosition[1], targetPosition[2]);

    // موقعیت جدید دوربین
    if (targetPosition[0] === 0 && targetPosition[1] === 0 && targetPosition[2] === 0) {
        // نمای کلی
        desiredPos.set(0, 5, 35);
    } else {
        // موقعیت نزدیک به گوی
        desiredPos.set(targetPosition[0], targetPosition[1] + 1.5, targetPosition[2] + 4);
    }
    
    // حرکت نرم (Lerp)
    const speed = delta * 3; 
    camera.position.lerp(desiredPos, speed); 
    controls.target.lerp(desiredTarget, speed); 

    controls.update();

    // وقتی رسید، کنترل کامل به کاربر داده میشه (این خط جلوی قفل شدن را می‌گیرد)
    if (camera.position.distanceTo(desiredPos) < 0.15) {
      setIsFlying(false);
    }
  });

  return null;
}

/* ========================================================
   2) Tooltip 3D کنار گوی انتخاب‌شده (تنظیم موقعیت و دکمه بستن)
======================================================== */
function TopicTooltip({ topic, position, onClose }) {
  if (!topic || !position) return null;

  return (
    <Html
      // موقعیت Tooltip بسیار نزدیک‌تر به گوی
      position={[position[0] + 0.8, position[1] + 0.5, position[2]]} 
      center
      style={{
        background: "rgba(15,23,42,0.85)",
        padding: "14px",
        borderRadius: "12px",
        color: "white",
        width: "220px",
        pointerEvents: "auto",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 6px 25px rgba(0,0,0,0.45)"
      }}
    >
      {/* دکمه بستن (X) */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "5px",
          right: "5px", 
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
          lineHeight: "14px",
          fontWeight: "bold",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100
        }}
      >
        ×
      </button>
      
      <h4 style={{ margin: 0, color: "#38bdf8", fontSize: "1rem" }}>{topic.title}</h4>

      {topic.content && (
        <p style={{ marginTop: 6, fontSize: "0.85rem", lineHeight: 1.6 }}>
          {topic.content}
        </p>
      )}

      {topic.subtopics &&
        topic.subtopics.map((s, i) => (
          <div
            key={i}
            style={{
              marginTop: 8,
              padding: 6,
              borderRadius: 6,
              background: "rgba(255,255,255,0.06)"
            }}
          >
            <strong style={{ color: "#fbbf24" }}>• {s.title}</strong>
            <p style={{ margin: "4px 0", fontSize: "0.8rem", color: "#cbd5e1" }}>
              {s.content}
            </p>
          </div>
        ))}
    </Html>
  );
}

/* ========================================================
   3) Main Scene Component
======================================================== */
export default function LessonRoom({ lesson, onBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [targetPosition, setTargetPosition] = useState([0, 0, 0]); 
  const [mode, setMode] = useState("random"); 
  const [isFlying, setIsFlying] = useState(false); // ردیابی وضعیت پرواز

  /* کلیک روی گوی */
  const handleTopicClick = (topicData, positionArray) => {
    setSelectedTopic(topicData);
    setTargetPosition(positionArray); 
    setIsFlying(true); // شروع پرواز
  };

  /* بازگشت به نمای کلی یا بستن Tooltip */
  const handleResetView = () => {
    setSelectedTopic(null);
    setTargetPosition([0, 0, 0]); 
    setIsFlying(true); // شروع پرواز برای بازگشت
  };
  
  /* فعال کردن مجدد کنترل‌ها توسط تعامل کاربر */
  const handleUserInteraction = () => {
    if (isFlying) {
      setIsFlying(false);
    }
  };

  if (!lesson)
    return <div style={{ color: "white", padding: 50 }}>در حال بارگذاری...</div>;

  /* ========================================================
     UI + Canvas Scene
  ======================================================== */
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#020617", position: "relative" }}>

      {/* --- UI Panel --- */}
      <div
        style={{
          position: "absolute",
          right: 20,
          top: 20,
          width: "240px",
          zIndex: 30,
          background: "rgba(30,41,59,0.8)",
          backdropFilter: "blur(8px)",
          borderRadius: "12px",
          padding: "15px",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white"
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "1rem",
            color: "#7dd3fc",
            borderBottom: "1px solid #475569",
            paddingBottom: 8
          }}
        >
          {lesson.title}
        </h3>

        <button
          onClick={handleResetView}
          style={{
            marginTop: 10,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#0ea5e9",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            width: "100%"
          }}
        >
          🔍 بازگشت به نمای کلی
        </button>

        <button
          onClick={onBack}
          style={{
            marginTop: 10,
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#ef4444",
            color: "white",
            cursor: "pointer",
            width: "100%"
          }}
        >
          خروج
        </button>

        <div style={{ marginTop: 20 }}>
          <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>حالت نمایش:</span>
          <div style={{ display: "flex", gap: 5, marginTop: 5 }}>
            {["random", "horizontal", "floors"].map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  handleResetView();
                }}
                style={{
                  flex: 1,
                  padding: "6px",
                  borderRadius: "6px",
                  border: "none",
                  background: mode === m ? "#0ea5e9" : "#334155",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "0.75rem"
                }}
              >
                {m === "random" ? "پراکنده" : m === "horizontal" ? "افقی" : "طبقاتی"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- 3D Scene --- */}
      <Canvas camera={{ position: [0, 5, 35], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.08}
          // کلید اصلی حل مشکل: کنترل‌ها فقط وقتی پرواز نیست فعال هستند
          enabled={!isFlying} 
          // اگر کاربر شروع به تعامل کرد، پرواز را قطع کن و کنترل را به او بده
          onStart={handleUserInteraction} 
        />

        {/* کامپوننت مدیریت دوربین با حرکت نرم */}
        <CameraFlyTo 
          targetPosition={targetPosition} 
          isFlying={isFlying}
          setIsFlying={setIsFlying}
        />

        <group>
          {mode === "horizontal" && (
            <ClassroomHorizontal lesson={lesson} onTopic={handleTopicClick} />
          )}
          {mode === "floors" && (
            <ClassroomFloors lesson={lesson} onTopic={handleTopicClick} />
          )}
          {mode === "random" && (
            <ClassroomRandom lesson={lesson} onTopic={handleTopicClick} />
          )}
        </group>

        {/* Tooltip سه‌بعدی */}
        <TopicTooltip 
          topic={selectedTopic} 
          position={selectedTopic ? targetPosition : null} 
          onClose={handleResetView}
        />

        <Stars radius={90} depth={50} count={5000} fade />
      </Canvas>
    </div>
  );
}