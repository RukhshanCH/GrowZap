"use client";

import Link from "next/link";
import { StaggerGroup, staggerItem } from "./motion/Reveal";
import { motion } from "framer-motion";

interface ServiceCard {
  title: string;
  href: string;
  description: string;
}

export function ServiceCardGrid({ items }: { items: ServiceCard[] }) {
  return (
    <StaggerGroup className="card-deck">
      {items.map((item) => (
        <motion.div variants={staggerItem} key={item.href}>
          <Link href={item.href} className="service-card">
            <span className="service-card__title">{item.title}</span>
            <p className="service-card__desc">{item.description}</p>
            <span className="service-card__arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 14L14 4M14 4H6M14 4V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </motion.div>
      ))}
    </StaggerGroup>
  );
}

export function IndustryCardGrid({ items }: { items: { title: string; href: string }[] }) {
  return (
    <StaggerGroup className="industry-deck">
      {items.map((item) => (
        <motion.div variants={staggerItem} key={item.href}>
          <Link href={item.href} className="industry-card">
            <span>{item.title}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      ))}
    </StaggerGroup>
  );
}
