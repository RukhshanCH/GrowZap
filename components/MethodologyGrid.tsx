"use client";

import { motion } from "framer-motion";
import { StaggerGroup, staggerItem } from "./motion/Reveal";

export interface MethodStep {
  title: string;
  body: string;
}

export function MethodologyGrid({ items }: { items: MethodStep[] }) {
  return (
    <StaggerGroup className="methodology-grid">
      {items.map((m, i) => (
        <motion.div className="methodology-card" variants={staggerItem} key={m.title}>
          <span className="methodology-card__index">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="methodology-card__title">{m.title}</h3>
          <p className="methodology-card__body">{m.body}</p>
        </motion.div>
      ))}
    </StaggerGroup>
  );
}
