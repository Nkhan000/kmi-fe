"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExpandableGrid({ data }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <motion.div
      className="h-[32rem] overflow-hidden rounded-lg grid gap-2"
      animate={{
        gridTemplateColumns:
          expandedIndex === 0 ? "1080px 300px" : "300px 1080px",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ display: "grid" }}
    >
      {data.map(({ img, title, description }, index) => (
        <div
          key={index}
          onClick={() => setExpandedIndex(index)}
          className="h-full relative rounded-lg flex flex-col justify-center cursor-pointer border-8 border-green-200 overflow-hidden"
        >
          <div className="min-h-full">
            <div className="min-h-full flex">
              <div className="max-w-[300px] min-w-[300px] flex flex-col justify-between overflow-hidden p-8 pl-2">
                <div>
                  <p className="text-[2.8rem] leading-[4rem] text-primary-50 font-semibold capitalize">
                    {title}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {expandedIndex !== index && (
                    <span className="font-semibold">
                      Click to Expand &#10140;
                    </span>
                  )}
                </div>
              </div>
              <div className="min-w-full min-h-max">
                <div className="relative min-h-full">
                  <Image
                    fill
                    src={img}
                    alt="user"
                    className="object-cover opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
//   className="min-h-max relative rounded-lg flex items-center justify-center cursor-pointer border-8 border-green-200"
