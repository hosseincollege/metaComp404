/* ================================================
   LESSONROOM.JSX — META UNIVERSITY (OPTION A)
   PART 1 / 4  —  (0–1000)
   NO EXPLANATION • PURE CODE • CLEAN • FINAL
=================================================== */

import React, { useState, useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Html,
  Text,
  Stars,
  Line,
  Billboard,
} from "@react-three/drei";
import * as THREE from "three";

import python from "../lessons/python";
import networks from "../lessons/networks";
import algorithms from "../lessons/algorithms";
import iot from "../lessons/iot";
import cloud from "../lessons/cloud";

/* ------------------ DATA NORMALIZATION ------------------ */

function normalizeLesson(raw, name = "Course") {
  if (Array.isArray(raw)) {
    return {
      title: name,
      color: "#4eaaff",
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
};

/* ------------------ CONSTANT VIEW STATES ------------------ */

const VIEW = {
  LOBBY: "LOBBY",
  CLASS: "CLASS",
  TOPIC: "TOPIC",
};

/* ------------------ TOPIC MODAL ------------------ */

function TopicModal({ topic, onClose }) {
  if (!topic) return null;
  return (
    <Html center zIndexRange={[100, 0]}>
      <div
        style={{
          width: "480px",
          maxHeight: "70vh",
          overflowY: "auto",
          padding: "20px",
          background: "rgba(0,0,0,0.8)",
          borderRadius: "12px",
          border: "2px solid #4eaaff",
          color: "white",
          direction: "rtl",
          pointerEvents: "auto",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>{topic.title}</h2>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: 0,
              width: 32,
              height: 32,
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        <p>{topic.content}</p>

        {topic.subtopics &&
          topic.subtopics.map((s, i) => (
            <div
              key={i}
              style={{
                marginTop: 12,
                padding: 10,
                borderRight: "3px solid #4eaaff",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              <strong>{s.title}</strong>
              <p style={{ margin: 0 }}>{s.content}</p>
            </div>
          ))}
      </div>
    </Html>
  );
}

/* ------------------ DATA STREAM (BEZIER LINE) ------------------ */

function DataStream({ start, end, color }) {
  const curve = useMemo(() => {
    const p1 = new THREE.Vector3(...start);
    const p2 = new THREE.Vector3(...end);
    const mid = p1.clone().add(p2).multiplyScalar(0.5);
    mid.y += 1.5;
    return new THREE.QuadraticBezierCurve3(p1, mid, p2);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(40), [curve]);

  return (
    <Line
      points={points}
      color={color}
      transparent
      opacity={0.4}
      lineWidth={1}
    />
  );
}

/* ------------------ TOPIC NODE ------------------ */

function TopicNode({ data, position, color, onSelect }) {
  return (
    <group position={position}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onSelect(data);
        }}
      >
        {/*زیرفصل*/}
        <sphereGeometry args={[0.3, 24, 24]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <Billboard position={[0, 1, 0]}>
        <Text fontSize={0.28} color="white">
          {data.title}
        </Text>
      </Billboard>
    </group>
  );
}

/* ------------------ CHAPTER NODE (MAIN SPHERES) ------------------ */
/*        Option A → topics around chapter (graph style)            */

function ChapterNode({ chapter, position, color, onTopic }) {
  const topics = chapter.topics || [];
  const radius = 2;

  return (
    <group position={position}>
      <mesh>
        {/*سرفصل*/}
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <Billboard position={[0, 2, 0]}>
        <Text fontSize={0.45} color="white">
          {chapter.title}
        </Text>
      </Billboard>

      {topics.map((t, i) => {
        const angle = (i / topics.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const pos = [x, 0, z];

        return (
          <group key={t.id}>
            <DataStream start={[0, 0, 0]} end={pos} color={color} />

            <TopicNode
              data={t}
              position={pos}
              color={color}
              onSelect={onTopic}
            />
          </group>
        );
      })}
    </group>
  );
}
/* ------------------ CLASSROOM (CHAPTER GRAPH AROUND CORE) ------------------ */

function Classroom({ lesson, onBack, onTopic }) {
  const color = lesson.color || "#4eaaff";
  const chapters = lesson.chapters || [];
  const radius = 6;

  return (
    <group>
      {/* گروه دکمه بازگشت */}
      <group position={[-8, 6, 0]} onClick={onBack}>
        {/* اضافه کردن گوی برای دکمه بازگشت */}
        <mesh>
          {/*اصلی*/}
          <sphereGeometry args={[0.8, 32, 32]} /> {/* اندازه گوی */}
          <meshStandardMaterial
            color="#A0A0A0" // رنگ خاکستری برای گوی
            emissive="#707070" // رنگ نوردهی برای جلوه بیشتر
            emissiveIntensity={0.6}
            transparent={true} // کمی شفافیت
            opacity={0.8} // میزان شفافیت
          />
        </mesh>
        {/* متن بازگشت بالای گوی و همیشه رو به دوربین */}
        <Billboard position={[0, 1.5, 0]}> {/* <--- تغییر در موقعیت Y برای قرار گرفتن بالاتر از گوی */}
          <Text fontSize={0.4} color="white"> {/* <--- تنظیم اندازه فونت برای خوانایی بهتر */}
            ← بازگشت
          </Text>
        </Billboard>
      </group>

      <mesh>
        <sphereGeometry args={[1.09, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>

      <Billboard position={[0, 3, 0]}>
        <Text fontSize={1.0} color="white">
          {lesson.title}
        </Text>
      </Billboard>

      {chapters.map((ch, i) => {
        const angle = (i / chapters.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const pos = [x, 0, z];

        return (
          <group key={ch.id}>
            <DataStream start={[0, 0, 0]} end={pos} color={color} />

            <ChapterNode
              chapter={ch}
              position={pos}
              color={color}
              onTopic={onTopic}
            />
          </group>
        );
      })}

      <Stars radius={80} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}


/* ------------------ LOBBY ------------------ */

function Lobby({ onSelect }) {
  const keys = Object.keys(LESSONS);
  return (
    <group>
      <Billboard position={[0, 5, 0]}>
        <Text fontSize={1} color="white">
          انتخاب درس
        </Text>
      </Billboard>

      {keys.map((k, i) => {
        const l = LESSONS[k];
        const x = (i - (keys.length - 1) / 2) * 5;

        return (
          <group
            key={k}
            position={[x, 0, 0]}
            onClick={() => onSelect(k)}
          >
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color={l.color} />
            </mesh>

            <Billboard position={[0, 2.5, 0]}>
              <Text fontSize={0.5} color="white">
                {l.title}
              </Text>
            </Billboard>
          </group>
        );
      })}
    </group>
  );
}

/* ------------------ MAIN ------------------ */

export default function LessonRoom({ lesson, onBack }) {
  const [view, setView] = useState(VIEW.LOBBY);
  const [topic, setTopic] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 8, 18], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />

        {view === VIEW.LOBBY && (
          <Lobby
            onSelect={(key) => {
              setActiveLesson(LESSONS[key]);
              setView(VIEW.CLASS);
            }}
          />
        )}

        {view === VIEW.CLASS && (
          <Classroom
            lesson={activeLesson}
            onBack={() => setView(VIEW.LOBBY)}
            onTopic={(t) => {
              setTopic(t);
              setView(VIEW.TOPIC);
            }}
          />
        )}

        {view === VIEW.TOPIC && (
          <>
            <Classroom
              lesson={activeLesson}
              onBack={() => setView(VIEW.LOBBY)}
              onTopic={(t) => {
                setTopic(t);
                setView(VIEW.TOPIC);
              }}
            />
            <TopicModal
              topic={topic}
              onClose={() => setView(VIEW.CLASS)}
            />
          </>
        )}
      </Canvas>
    </div>
  );
}

/* ================= END PART 1 ================= */
/* ================================================
   LESSONROOM.JSX — META UNIVERSITY (OPTION A)
   PART 2 / 4  —  (1000–2000)
   NO EXPLANATION • PURE CODE • CLEAN • FINAL
=================================================== */

//////////////////////////////////////////////////////////////////
// CHAPTER NODE — INTERACTIVE MAIN NODE (Option A)
//////////////////////////////////////////////////////////////////

function ChapterNodeA({ chapter, position, color, onSelectTopic }) {
  const topics = chapter.topics || [];
  const radius = 3;

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
        />
      </mesh>

      <Billboard position={[0, 2, 0]}>
        <Text fontSize={0.46} color="white">
          {chapter.title}
        </Text>
      </Billboard>

      {topics.map((t, i) => {
        const angle = (i / topics.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const pos = [x, 0, z];

        return (
          <group key={t.id}>
            <Line
              points={[
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(x, 0, z),
              ]}
              color={color}
              transparent
              opacity={0.4}
            />

            <TopicBubbleA
              topic={t}
              position={pos}
              color={color}
              onSelect={onSelectTopic}
            />
          </group>
        );
      })}
    </group>
  );
}

//////////////////////////////////////////////////////////////////
// TOPIC BUBBLE — SMALL NODES AROUND CHAPTER
//////////////////////////////////////////////////////////////////

function TopicBubbleA({ topic, position, color, onSelect }) {
  return (
    <group position={position}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          onSelect(topic);
        }}
      >
        <sphereGeometry args={[0.55, 20, 20]} />
        <meshStandardMaterial color={color} />
      </mesh>

      <Billboard position={[0, 1, 0]}>
        <Text fontSize={0.28} color="white">
          {topic.title}
        </Text>
      </Billboard>
    </group>
  );
}

//////////////////////////////////////////////////////////////////
// CLASSROOM A — CHAPTER NODES AROUND CORE
//////////////////////////////////////////////////////////////////

function ClassroomA({ lesson, onBack, onTopic }) {
  const color = lesson.color || "#4eaaff";
  const chapters = lesson.chapters || [];
  const radius = 11;

  return (
    <group>
      <group
        position={[-8, 6, 0]}
        onClick={onBack}
      >
        <Text fontSize={0.6} color="white">← بازگشت</Text>
      </group>

      <mesh>
        <sphereGeometry args={[2.8, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.8}
        />
      </mesh>

      <Billboard>
        <Text fontSize={0.9} color="white">
          {lesson.title}
        </Text>
      </Billboard>

      {chapters.map((ch, i) => {
        const angle = (i / chapters.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const pos = [x, 0, z];

        return (
          <group key={ch.id}>
            <Line
              points={[
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(x, 0, z),
              ]}
              color={color}
              transparent
              opacity={0.4}
            />

            <ChapterNodeA
              chapter={ch}
              position={pos}
              color={color}
              onSelectTopic={onTopic}
            />
          </group>
        );
      })}

      <Stars radius={80} depth={40} count={5000} factor={4} fade speed={1} />
    </group>
  );
}

//////////////////////////////////////////////////////////////////
// TOPIC MODAL — FLOATING HTML CARD
//////////////////////////////////////////////////////////////////

function TopicModalA({ topic, onClose }) {
  if (!topic) return null;
  return (
    <Html center zIndexRange={[200, 0]}>
      <div
        style={{
          width: "500px",
          maxHeight: "75vh",
          overflowY: "auto",
          padding: "20px",
          borderRadius: "14px",
          background: "rgba(0,0,0,0.75)",
          border: "2px solid #4eaaff",
          backdropFilter: "blur(10px)",
          color: "white",
          direction: "rtl",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>{topic.title}</h2>
          <button
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: 0,
              background: "rgba(255,255,255,0.2)",
              color: "white",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>

        <p>{topic.content}</p>

        {topic.subtopics?.map((s, i) => (
          <div
            key={i}
            style={{
              marginTop: 12,
              padding: 10,
              borderRight: "4px solid #4eaaff",
              background: "rgba(255,255,255,0.12)",
            }}
          >
            <strong>{s.title}</strong>
            <p>{s.content}</p>
          </div>
        ))}
      </div>
    </Html>
  );
}

//////////////////////////////////////////////////////////////////
// LOBBY A — MAIN MENU INSIDE 3D SPACE
//////////////////////////////////////////////////////////////////

function LobbyA({ onSelect }) {
  const keys = Object.keys(LESSONS_A);

  return (
    <group>
      <Billboard position={[0, 5, 0]}>
        <Text fontSize={1} color="white">انتخاب درس</Text>
      </Billboard>

      {keys.map((k, i) => {
        const L = LESSONS_A[k];
        const x = (i - (keys.length - 1) / 2) * 5;

        return (
          <group
            key={k}
            position={[x, 0, 0]}
            onClick={() => onSelect(k)}
          >
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color={L.color} />
            </mesh>

            <Billboard position={[0, 2.6, 0]}>
              <Text fontSize={0.5} color="white">{L.title}</Text>
            </Billboard>
          </group>
        );
      })}
    </group>
  );
}

//////////////////////////////////////////////////////////////////
// DATA REGISTRY — NORMALIZED COURSE DATA (ARRAY→OBJECT)
//////////////////////////////////////////////////////////////////

function normalize(raw, name, color) {
  if (Array.isArray(raw)) {
    return {
      title: name,
      color,
      chapters: raw.map((c, i) => ({
        id: "ch" + i,
        title: c.section || "بدون عنوان",
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

const LESSONS_A = {
  python: normalize(python, "Python", "#4080ff"),
  networks: normalize(networks, "Networks", "#ff8844"),
  algorithms: normalize(algorithms, "Algorithms", "#33ffaa"),
  iot: normalize(iot, "IoT", "#aa66ff"),
  cloud: normalize(cloud, "Cloud", "#44eecc"),
};

//////////////////////////////////////////////////////////////////
// END OF PART 2 — READY FOR PART 3
//////////////////////////////////////////////////////////////////
/* ================================================
   LESSONROOM.JSX — META UNIVERSITY (OPTION A)
   PART 3 / 4  —  (2000–3000)
   NO EXPLANATION • PURE CODE • CLEAN • FINAL
=================================================== */

