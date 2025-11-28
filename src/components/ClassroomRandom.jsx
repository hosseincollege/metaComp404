import React, { useMemo } from "react";
import { Billboard, Text, Stars } from "@react-three/drei";
import * as THREE from "three";
import FiberLink from "./FiberLink"; // ایمپورت فایل جداگانه

export default function ClassroomRandom({ lesson, onTopic }) {
  const color = lesson.color || "#4eaaff";
  const chapters = lesson.chapters || [];
  const gapY = 8;

  // محاسبه موقعیت فصل‌ها به صورت مارپیچ بالا رونده
  const chapterPositions = useMemo(() => {
    return chapters.map((_, i) => {
      const y = i * gapY;
      const angle = i * 2.2;
      const radius = 7 + Math.random() * 5; // شعاع متغیر
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return new THREE.Vector3(x, y, z);
    });
  }, [chapters]);

  const totalHeight = chapters.length * gapY;

  return (
    <group position={[0, -totalHeight / 2.5, 0]}>
      
      {chapters.map((ch, i) => {
        const pos = chapterPositions[i];
        const nextPos = chapterPositions[i + 1];

        return (
          <group key={ch.id}>

            {/* 1. خط اتصال بین فصل‌ها (Chapter to Chapter) */}
            {nextPos && (
              <FiberLink
                start={[pos.x, pos.y, pos.z]}
                end={[nextPos.x, nextPos.y, nextPos.z]}
                color={color}
                height={2.5} // قوس بلند برای فاصله زیاد
                speed={1}
              />
            )}

            {/* گروه خود فصل */}
            <group position={pos}>
              
              {/* کره اصلی فصل */}
              <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                  color={color}
                  emissive={color}
                  emissiveIntensity={0.5}
                />
              </mesh>

              <Billboard position={[0, 2.2, 0]}>
                <Text fontSize={0.7} color="white" outlineWidth={0.02} outlineColor="black">
                  {ch.title}
                </Text>
              </Billboard>

              {/* تاپیک‌های زیرمجموعه */}
              {ch.topics.map((t, idx) => {
                const angle = (idx / ch.topics.length) * Math.PI * 2;
                const r = 3.5;
                const tx = Math.cos(angle) * r;
                const tz = Math.sin(angle) * r;
                
                // مختصات نسبی (لوکال) تاپیک
                const topicRelPos = [tx, 0, tz];
                
                // مختصات جهانی برای ارسال به دوربین
                const globalX = pos.x + tx;
                const globalY = pos.y;
                const globalZ = pos.z + tz;

                return (
                  <group key={t.id}>
                    
                    {/* 2. خط اتصال بین فصل و تاپیک (Chapter to Topic) */}
                    <FiberLink
                      start={[0, 0, 0]} // مبدا مرکز فصل است
                      end={topicRelPos} // مقصد تاپیک است
                      color={color}
                      height={0.5} // قوس کم برای فاصله کوتاه
                      speed={0.5}
                    />

                    <group position={topicRelPos}>
                      <mesh
                        onClick={(e) => {
                          e.stopPropagation();
                          onTopic(t, [globalX, globalY, globalZ]);
                        }}
                        onPointerOver={() => document.body.style.cursor = 'pointer'}
                        onPointerOut={() => document.body.style.cursor = 'auto'}
                      >
                        <sphereGeometry args={[0.4, 24, 24]} />
                        <meshStandardMaterial color={color} />
                      </mesh>

                      <Billboard position={[0, 0.9, 0]}>
                        <Text fontSize={0.35} color="#ddd">
                          {t.title}
                        </Text>
                      </Billboard>
                    </group>
                  </group>
                );
              })}
            </group>
          </group>
        );
      })}
    </group>
  );
}
