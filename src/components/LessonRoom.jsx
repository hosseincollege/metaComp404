import React, { useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import * as THREE from "three";

import ClassroomHorizontal from "./ClassroomHorizontal";
import ClassroomFloors from "./ClassroomFloors";
import ClassroomRandom from "./ClassroomRandom";

/* ---------------- Camera Smooth Movement ---------------- */
function CameraFlyTo({ targetPosition, isFlying, setIsFlying }) {
  const { camera, controls } = useThree();
  const desiredPos = useMemo(() => new THREE.Vector3(0, 6, 40), []);
  const desiredTarget = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useFrame((_, delta) => {
    if (!isFlying || !controls) return;

    desiredTarget.set(targetPosition[0] + 0, targetPosition[1] + 0, targetPosition[2] + 0);

    if (targetPosition[0] === 0 && targetPosition[1] === 0 && targetPosition[2] === 0) {
      desiredPos.set(0, 8, 40);
    } else {
      desiredPos.set(
        targetPosition[0] + 0,
        targetPosition[1] + 2,
        targetPosition[2] + 12
      );
    }

    const speed = delta * 3;
    camera.position.lerp(desiredPos, speed);
    controls.target.lerp(desiredTarget, speed);

    controls.update();

    if (camera.position.distanceTo(desiredPos) < 0.2) {
      setIsFlying(false);
    }
  });

  return null;
}

/* ---------------- Tooltip Beside Node ---------------- */
function TopicTooltip({ topic, position, onClose }) {
  if (!topic || !position) return null;

  const detectDir = (text) => {
    const persianRegex = /[\u0600-\u06FF]/;
    return persianRegex.test(text) ? "rtl" : "ltr";
  };

  return (
    <Html
      transform={false}
      distanceFactor={5}
      position={[
        position[0] + 0.8, 
        position[1] - 0.65,
        position[2] + 0.0,
      ]}
      style={{
        background: "rgba(15,15,20,0.92)",
        backdropFilter: "blur(14px)",
        padding: "40px",                // 10× بزرگتر از قبل
        borderRadius: "26px",
        width: "1200px",                // قبلاً 420px → الان 10× بزرگ
        color: "white",
        pointerEvents: "auto",
        border: "2px solid rgba(255,255,255,0.28)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.65)",
        fontFamily: "IRANSans, sans-serif",
      }}
    >

      {/* دکمه بستن - خیلی بزرگ‌تر */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          border: "none",
          color: "white",
          cursor: "pointer",
          fontSize: "40px",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ×
      </button>

      {/* عنوان */}
      <h4
        style={{
          margin: "0 0 25px 0",
          color: "#38bdf8",
          fontSize: "4.2rem",           // قبلاً 1.8rem → الان 10×
          fontWeight: "900",
          lineHeight: 1.3,
          direction: detectDir(topic.title),
          textAlign: detectDir(topic.title) === "rtl" ? "right" : "left",
        }}
      >
        {topic.title}
      </h4>

      {/* متن اصلی */}
      {topic.content && (
        <p
          style={{
            marginTop: 12,
            fontSize: "3.5rem",          // خیلی درشت
            lineHeight: 2.4,
            color: "#e2e8f0",
            fontWeight: "350",
            direction: detectDir(topic.content),
            textAlign: detectDir(topic.content) === "rtl" ? "right" : "left",
          }}
        >
          {topic.content}
        </p>
      )}

      {/* زیرموضوع‌ها */}
      {topic.subtopics &&
        topic.subtopics.map((s, i) => (
          <div
            key={i}
            style={{
              marginTop: 30,
              padding: "22px 26px",
              borderRadius: 16,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <strong
              style={{
                color: "#fbbf24",
                fontSize: "3rem",
                display: "block",
                marginBottom: "12px",
                direction: detectDir(s.title),
                textAlign: detectDir(s.title) === "rtl" ? "right" : "left",
              }}
            >
              • {s.title}
            </strong>

            <p
              style={{
                margin: 0,
                fontSize: "3.2rem",
                color: "#cbd5e1",
                lineHeight: 2.1,
                direction: detectDir(s.content),
                textAlign: detectDir(s.content) === "rtl" ? "right" : "left",
              }}
            >
              {s.content}
            </p>
          </div>
        ))}
    </Html>
  );
}


export default function LessonRoom({ lesson, onBack }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [targetPosition, setTargetPosition] = useState([0, 0, 0]);
  const [mode, setMode] = useState("random");
  const [isFlying, setIsFlying] = useState(false);

  const handleTopicClick = (topicData, positionArray) => {
    setSelectedTopic(topicData);
    setTargetPosition(positionArray);
    setIsFlying(true);
  };

  const handleResetView = () => {
    setSelectedTopic(null);
    setTargetPosition([0, 0, 0]);
    setIsFlying(true);
  };

  // بستن Tooltip بدون حرکت دوربین
  const handleCloseTooltip = () => {
    setSelectedTopic(null);
    // هیچ پروازی اینجا نیست، هیچ تغییری در targetPosition
  };


  const handleUserInteraction = () => {
    if (isFlying) setIsFlying(false);
  };

  if (!lesson)
    return <div style={{ color: "white", padding: 50 }}>در حال بارگذاری...</div>;

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: "#000000",
      position: "relative"
    }}>

      {/* UI PANEL */}
      <div
        style={{
          position: "absolute",
          right: 25,
          top: 25,
          width: "270px",
          zIndex: 30,
          background: "rgba(15,15,15,0.85)",
          backdropFilter: "blur(10px)",
          borderRadius: "14px",
          padding: "18px",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white"
        }}
      >
        <h3 style={{
          margin: 0,
          fontSize: "1.3rem",
          fontWeight: "bold",
          color: "#7dd3fc",
          borderBottom: "1px solid #333",
          paddingBottom: 8
        }}>
          {lesson.title}
        </h3>

        <button
          onClick={handleResetView}
          style={{
            marginTop: 14,
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#0ea5e9",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "0.95rem",
            width: "100%"
          }}
        >
          🔍 بازگشت به نمای کلی
        </button>

        <button
          onClick={onBack}
          style={{
            marginTop: 10,
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "#ef4444",
            color: "white",
            cursor: "pointer",
            fontSize: "0.95rem",
            width: "100%"
          }}
        >
          خروج
        </button>

        <div style={{ marginTop: 22 }}>
          <span style={{ fontSize: "0.9rem", color: "#cbd5e1" }}>حالت نمایش:</span>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            {["random", "horizontal", "floors"].map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  handleResetView();
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  background: mode === m ? "#0ea5e9" : "#333",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: "bold"
                }}
              >
                {m === "random" ? "پراکنده" : m === "horizontal" ? "افقی" : "طبقاتی"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Canvas camera={{ position: [0, 6, 40], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.08}
          enabled={!isFlying}
          onStart={handleUserInteraction}
        />

        <CameraFlyTo targetPosition={targetPosition} isFlying={isFlying} setIsFlying={setIsFlying} />

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

        <TopicTooltip topic={selectedTopic} position={selectedTopic ? targetPosition : null} onClose={handleCloseTooltip} />

        <Stars radius={80} depth={40} count={4500} fade />
      </Canvas>
    </div>
  );
}
