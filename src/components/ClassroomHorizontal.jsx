import React, { useMemo, useState } from "react";
import { Billboard, Text } from "@react-three/drei";
import FiberLink from "./FiberLink";

export default function ClassroomHorizontal({ lesson, onTopic, hoverEffect = true }) {
  const color = lesson.color || "#4eaaff";
  const chapters = lesson.chapters || [];
  const radius = 12;

  const [hoveredTopic, setHoveredTopic] = useState(null);
  const [hoveredChapter, setHoveredChapter] = useState(null);

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
      <mesh>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
      </mesh>
      <Billboard position={[0, 3.2, 0]}>
        <Text fontSize={1.1} color="white">
          {lesson.title}
        </Text>
      </Billboard>

      {chapters.map((ch, i) => {
        const pos = chapterPositions[i];

        return (
          <group key={ch.id}>

            <FiberLink
              start={[0, 0, 0]}
              end={pos}
              color={color}
              height={3.5}
              speed={0.8}
            />

            <group position={pos}>
              <mesh>
                <sphereGeometry args={[hoveredChapter === i ? 1.2 : 0.9, 32, 32]} />
                <meshStandardMaterial
                  color={color}
                  emissive={color}
                  emissiveIntensity={hoveredChapter === i ? 0.9 : 0.5}
                />
              </mesh>

              <Billboard position={[0, 2.2, 0]}>
                <Text fontSize={0.55} color="white">
                  {ch.title}
                </Text>
              </Billboard>

              {ch.topics.map((t, idx) => {
                const ang = (idx / ch.topics.length) * Math.PI * 2;
                const tx = Math.cos(ang) * 3.4;
                const tz = Math.sin(ang) * 3.4;

                const gx = pos[0] + tx;
                const gy = pos[1];
                const gz = pos[2] + tz;

                return (
                  <group key={t.id}>
                    <FiberLink
                      start={[0, 0, 0]}
                      end={[tx, 0, tz]}
                      color={color}
                      height={0.6}
                      speed={0.5}
                    />

                    <group position={[tx, 0, tz]}>
                      <mesh
                        onPointerOver={() => hoverEffect && setHoveredTopic(t.id)}
                        onPointerOut={() => setHoveredTopic(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          onTopic(t, [gx, gy, gz]);
                        }}
                      >
                        <sphereGeometry args={[hoveredTopic === t.id ? 0.6 : 0.45, 24, 24]} />
                        <meshStandardMaterial
                          color={color}
                          emissive={color}
                          emissiveIntensity={hoveredTopic === t.id ? 1 : 0.4}
                        />
                      </mesh>

                      <Billboard position={[0, hoveredTopic === t.id ? 1.2 : 1, 0]}>
                        <Text fontSize={hoveredTopic === t.id ? 0.4 : 0.3} color="white">
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
