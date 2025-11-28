import React, { useMemo } from "react";
import { Billboard, Text, Stars } from "@react-three/drei";
import FiberLink from "./FiberLink";

export default function ClassroomHorizontal({ lesson, onTopic }) {
  const color = lesson.color || "#4eaaff";
  const chapters = lesson.chapters || [];
  const radius = 12; // شعاع دایره اصلی

  const chapterPositions = useMemo(() => {
    return chapters.map((_, i) => {
      const angle = (i / chapters.length) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return [x, 0, z];
    });
  }, [chapters]);

  return (
    <group>
      {/* درس اصلی (مرکز) */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
      </mesh>
      <Billboard position={[0, 3, 0]}>
         <Text fontSize={1} color="white">{lesson.title}</Text>
      </Billboard>

      {chapters.map((ch, i) => {
        const pos = chapterPositions[i];

        return (
          <group key={ch.id}>
            
            {/* خط اتصال از مرکز (درس) به فصل */}
            <FiberLink 
                start={[0,0,0]} 
                end={pos} 
                color={color} 
                height={4} // قوس زیاد چون فاصله زیاد است
                speed={0.8}
            />

            <group position={pos}>
              <mesh>
                <sphereGeometry args={[0.9, 32, 32]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} />
              </mesh>
              <Billboard position={[0, 2, 0]}>
                <Text fontSize={0.5} color="white">{ch.title}</Text>
              </Billboard>

              {/* تاپیک‌ها */}
              {ch.topics.map((t, idx) => {
                const angle2 = (idx / ch.topics.length) * Math.PI * 2;
                const tx = Math.cos(angle2) * 3;
                const tz = Math.sin(angle2) * 3;
                const topicRelPos = [tx, 0, tz];
                
                // محاسبه پوزیشن جهانی
                const gX = pos[0] + tx;
                const gY = pos[1];
                const gZ = pos[2] + tz;

                return (
                  <group key={t.id}>
                    {/* خط اتصال از فصل به تاپیک */}
                    <FiberLink 
                        start={[0,0,0]} 
                        end={topicRelPos} 
                        color={color} 
                        height={0.8}
                        speed={0.5}
                    />

                    <group position={topicRelPos}>
                      <mesh onClick={(e) => {
                          e.stopPropagation();
                          onTopic(t, [gX, gY, gZ]);
                      }}>
                        <sphereGeometry args={[0.4, 24, 24]} />
                        <meshStandardMaterial color={color} />
                      </mesh>
                      <Billboard position={[0, 1, 0]}>
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
