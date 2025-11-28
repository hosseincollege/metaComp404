import React, { useMemo, useState } from "react";
import { Billboard, Text } from "@react-three/drei";
import * as THREE from "three";
import FiberLink from "./FiberLink";

export default function ClassroomRandom({ lesson, onTopic }) {
  const color = lesson.color || "#4eaaff";
  const chapters = lesson.chapters || [];
  const gapY = 8;

  const [hoveredTopic, setHoveredTopic] = useState(null);
  const [hoveredChapter, setHoveredChapter] = useState(null);
  const [clickedTopic, setClickedTopic] = useState(null);

  const chapterPositions = useMemo(() => {
    return chapters.map((_, i) => {
      const y = i * gapY;
      const angle = i * 2.1;
      const radius = 7 + Math.random() * 4;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      return new THREE.Vector3(x, y, z);
    });
  }, [chapters]);

  const totalHeight = chapters.length * gapY;

  return (
    <group>
      {chapters.map((ch, i) => {
        const pos = chapterPositions[i];
        const nextPos = chapterPositions[i + 1];

        return (
          <group key={ch.id}>
            {nextPos && (
              <FiberLink
                start={[pos.x, pos.y, pos.z]}
                end={[nextPos.x, nextPos.y, nextPos.z]}
                color={color}
                height={2}
                speed={1}
              />
            )}

            <group position={pos}>
              <mesh>
                <sphereGeometry args={[hoveredChapter === i ? 1.25 : 1, 32, 32]} />
                <meshStandardMaterial
                  color={color}
                  emissive={color}
                  emissiveIntensity={hoveredChapter === i ? 1.1 : 0.6}
                />
              </mesh>

              <Billboard position={[0, 2.2, 0]}>
                <Text fontSize={0.7} color="white">
                  {ch.title}
                </Text>
              </Billboard>

              {/* TOPICS */}
              {ch.topics.map((t, idx) => {
                const angle = (idx / ch.topics.length) * Math.PI * 2;
                const r = 3.5;
                const tx = Math.cos(angle) * r;
                const tz = Math.sin(angle) * r;
                const gx = pos.x + tx;
                const gy = pos.y;
                const gz = pos.z + tz;

                const isHover = hoveredTopic === t.id;
                const isClicked = clickedTopic === t.id;

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
                        onPointerOver={() => setHoveredTopic(t.id)}
                        onPointerOut={() => setHoveredTopic(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setClickedTopic(t.id);
                          onTopic(t, [gx, gy, gz]);
                        }}
                      >
                        <sphereGeometry
                          args={[
                            isHover || isClicked ? 0.65 : 0.45,
                            24,
                            24
                          ]}
                        />
                        <meshStandardMaterial
                          color={color}
                          emissive={color}
                          emissiveIntensity={isHover || isClicked ? 1 : 0.4}
                        />
                      </mesh>

                      <Billboard position={[0, isHover || isClicked ? 1.2 : 0.9, 0]}>
                        <Text fontSize={isHover || isClicked ? 0.45 : 0.35} color="#eee">
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
