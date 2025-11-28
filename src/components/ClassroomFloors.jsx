import React, { useMemo, useState } from "react";
import { Billboard, Text } from "@react-three/drei";
import * as THREE from "three";
import FiberLink from "./FiberLink";

export default function ClassroomFloors({ lesson, onTopic }) {
  const color = lesson.color || "#4eaaff";
  const chapters = lesson.chapters || [];
  const gapY = 7;

  const [hoveredTopic, setHoveredTopic] = useState(null);
  const [hoveredChapter, setHoveredChapter] = useState(null);
  const [clickedTopic, setClickedTopic] = useState(null);

  const chapterPositions = useMemo(() => {
    return chapters.map((_, i) => {
      const y = i * gapY;
      const jitterX = (Math.random() - 0.5) * 2;
      const jitterZ = (Math.random() - 0.5) * 2;
      return new THREE.Vector3(jitterX, y, jitterZ);
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
                height={0.3}
                speed={1}
              />
            )}

            <group position={pos}>
              <mesh>
                <sphereGeometry args={[hoveredChapter === i ? 1.1 : 0.9, 32, 32]} />
                <meshStandardMaterial
                  color={color}
                  emissive={color}
                  emissiveIntensity={hoveredChapter === i ? 1 : 0.6}
                />
              </mesh>

              <Billboard position={[0, 2, 0]}>
                <Text fontSize={0.65} color="white">
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
                      height={0.4}
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
                            isHover || isClicked ? 0.55 : 0.38,
                            24,
                            24
                          ]}
                        />
                        <meshStandardMaterial
                          color={color}
                          emissive={color}
                          emissiveIntensity={isHover || isClicked ? 1 : 0.3}
                        />
                      </mesh>

                      <Billboard position={[0, isHover || isClicked ? 1.1 : 0.8, 0]}>
                        <Text fontSize={isHover || isClicked ? 0.42 : 0.32} color="white">
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
