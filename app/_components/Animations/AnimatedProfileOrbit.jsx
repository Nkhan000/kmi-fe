"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const accounts = [
  { id: 1, platform: "Twitter", img: "/twitter.png" },
  { id: 2, platform: "GitHub", img: "/github.png" },
  { id: 3, platform: "LinkedIn", img: "/linkedin.png" },
  { id: 4, platform: "Instagram", img: "/instagram.png" },
  { id: 5, platform: "Facebook", img: "/facebook.png" },
  { id: 6, platform: "YouTube", img: "/youtube.png" },
  { id: 7, platform: "Reddit", img: "/reddit.png" },
  { id: 8, platform: "Snapchat", img: "/snapchat.png" },
  { id: 9, platform: "Pinterest", img: "/pinterest.png" },
  { id: 10, platform: "Discord", img: "/discord.png" },
  // { id: 11, platform: "Discord", img: "/discord.png" },
  // { id: 12, platform: "Discord", img: "/discord.png" },
  // { id: 13, platform: "Discord", img: "/discord.png" },
  // { id: 14, platform: "Discord", img: "/discord.png" },
  // { id: 15, platform: "Discord", img: "/discord.png" },
  // { id: 16, platform: "Discord", img: "/discord.png" },
  // { id: 17, platform: "Discord", img: "/discord.png" },
  // { id: 18, platform: "Discord", img: "/discord.png" },
  // { id: 19, platform: "Discord", img: "/discord.png" },
  // { id: 20, platform: "Discord", img: "/discord.png" },
  // { id: 21, platform: "Discord", img: "/discord.png" },
  // { id: 22, platform: "Discord", img: "/discord.png" },
  // { id: 23, platform: "Discord", img: "/discord.png" },
  // { id: 24, platform: "Discord", img: "/discord.png" },
  // { id: 25, platform: "Discord", img: "/discord.png" },
  // { id: 26, platform: "Discord", img: "/discord.png" },
  // { id: 27, platform: "Discord", img: "/discord.png" },
  // { id: 28, platform: "Discord", img: "/discord.png" },
  // { id: 29, platform: "Discord", img: "/discord.png" },
  // { id: 30, platform: "Discord", img: "/discord.png" },
];

const orbitRadius = 100; // Distance from center

export default function ProfileOrbit() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Calculate initial positions on the client only
  const positions = useMemo(() => {
    return accounts.map((_, index) => {
      const currentRadius =
        index % 2 == 0 ? orbitRadius + 120 : orbitRadius + 50; // Larger radius for outer orbit
      const angle = (index / accounts.length) * (Math.PI * 2);
      return {
        x: currentRadius * Math.cos(angle),
        y: currentRadius * Math.sin(angle),
      };
    });
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Center Profile */}
      <div className="relative w-52 h-52 z-10">
        <Image
          fill
          src="/pp.jpg"
          alt="User"
          className="rounded-full border-2 border-gray-300 shadow-lg object-cover"
        />
      </div>

      {/* Orbiting Accounts */}
      {accounts.map((account, index) => (
        <motion.div
          key={account.id}
          className="absolute w-16 h-16"
          initial={{
            x: [positions[index].x, -positions[index].x],
            y: [positions[index].y, -positions[index].y],
            // opacity: 0,
          }}
          transition={{
            duration: 2,
            // repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/pp.jpg"
            alt={account.platform}
            fill
            className="rounded-full border border-gray-400 shadow-md bg-white object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
