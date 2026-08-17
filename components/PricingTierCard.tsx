"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { staggerItem } from "./motion/Reveal";

export interface PricingTier {
  name: string;
  price: string;
  for: string;
  includes: string[];
  featured: boolean;
}

export function PricingTierCard({ tier }: { tier: PricingTier }) {
  return (
    <motion.div
      variants={staggerItem}
      className={`pricing-tier ${tier.featured ? "pricing-tier--featured" : ""}`}
    >
      {tier.featured && <span className="pricing-tier__badge">Most Popular</span>}
      <h3 className="pricing-tier__name">{tier.name}</h3>
      <p className="pricing-tier__price">{tier.price}</p>
      <p className="pricing-tier__for">{tier.for}</p>
      <ul className="pricing-tier__includes">
        {tier.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="pricing-tier__cta">
        <Button href="/contact" block variant={tier.featured ? "primary" : "secondary"}>
          Get a Quote
        </Button>
      </div>
    </motion.div>
  );
}
