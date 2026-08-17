"use client";

import { motion } from "framer-motion";

interface GrowthBarsProps {
  className?: string;
  tone?: "brand" | "on-dark";
  heights?: number[];
}

const DEFAULT_HEIGHTS = [34, 56, 46, 78, 64];

/**
 * The recurring brand motif: ascending bars that echo the GrowZap mark's
 * built-in bar chart, with an upward arrow — used sparingly as a section
 * divider / stat visual, animated to "grow" into view.
 */
export function GrowthBars({ className, tone = "brand", heights = DEFAULT_HEIGHTS }: GrowthBarsProps) {
  const max = Math.max(...heights);
  const barWidth = 14;
  const gap = 10;
  const width = heights.length * barWidth + (heights.length - 1) * gap;
  const height = max + 26;

  const fill =
    tone === "brand"
      ? "url(#growzap-bar-gradient)"
      : "url(#growzap-bar-gradient-dark)";

  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="growzap-bar-gradient" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#4275b2" />
          <stop offset="100%" stopColor="#998fc6" />
        </linearGradient>
        <linearGradient id="growzap-bar-gradient-dark" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#7ea8da" />
          <stop offset="100%" stopColor="#e3e7f2" />
        </linearGradient>
      </defs>
      {heights.map((h, i) => {
        const x = i * (barWidth + gap);
        const y = height - h;
        return (
          <motion.rect
            key={i}
            x={x}
            width={barWidth}
            rx={3}
            fill={fill}
            initial={{ height: 0, y: height }}
            whileInView={{ height: h, y }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
          />
        );
      })}
    </svg>
  );
}
