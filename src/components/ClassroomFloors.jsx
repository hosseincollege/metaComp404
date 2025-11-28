import React, { useMemo } from "react";
import { Billboard, Text, Stars } from "@react-three/drei";
import * as THREE from "three";
import FiberLink from "./FiberLink";

export default function ClassroomFloors({ lesson, onTopic }) {
  const color = lesson.color || "#4eaaff";
  const chapters = lesson.chapters || [];
  const gapY = 7;

  const chapterPositions = useMemo(() => {
    return chapters.map((_, i) => {
      const y = i * gapY;
      // کمی لرزش تصادفی در X و Z
      const jitterX = (Math.random() - 0.5) * 2; 
      const jitterZ = (Math.random() - 0.5) * 2;
      return new THREE.Vector3(jitterX, y, jitterZ);
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

            {/* اتصال عمودی به طبقه بالا */}
            {nextPos && (
              <FiberLink
                start={[pos.x, pos.y, pos.z]}
                end={[nextPos.x, nextPos.y, nextPos.z]}
                color={color}
                height={0} // برای اتصال عمودی، قوس 0 بهتر است (خط صاف‌تر) یا قوس کم
                speed={1}
              />
            )}

            <group position={pos}>
              <mesh>
                <sphereGeometry args={[0.9, 32, 32]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} />
              </mesh>
              <Billboard position={[0, 2, 0]}>
                <Text fontSize={0.6} color="white">{ch.title}</Text>
              </Billboard>

              {/* تاپیک‌ها دور فصل */}
              {ch.topics.map((t, idx) => {
                const angle = (idx / ch.topics.length) * Math.PI * 2;
                const radius = 3.5;
                const tx = Math.cos(angle) * radius;
                const tz = Math.sin(angle) * radius;
                const topicRelPos = [tx, 0, tz];
                
                const gX = pos.x + tx;
                const gY = pos.y;
                const gZ = pos.z + tz;

                return (
                  <group key={t.id}>
                    {/* اتصال افقی فصل به تاپیک */}
                    <FiberLink
                      start={[0, 0, 0]}
                      end={topicRelPos}
                      color={color}
                      height={0.5}
                      speed={0.5}
                    />

                    <group position={topicRelPos}>
                      <mesh onClick={(e) => {
                          e.stopPropagation();
                          onTopic(t, [gX, gY, gZ]);
                      }}>
                        <sphereGeometry args={[0.35, 24, 24]} />
                        <meshStandardMaterial color={color} emissiveIntensity={0.2} />
                      </mesh>
                      <Billboard position={[0, 0.8, 0]}>
                        <Text fontSize={0.3} color="white">{t.title}</Text>
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
