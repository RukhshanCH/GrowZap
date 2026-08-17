"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { RichText } from "@/lib/richText";
import { GrowthBars } from "./GrowthBars";

interface HomeHeroProps {
  h1: string;
  intro: string;
  heroCta: string;
}

export function HomeHero({ h1, intro, heroCta }: HomeHeroProps) {
  return (
    <section className="home-hero section--dark">
      <div className="container home-hero__inner">
        <motion.div
          className="home-hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow eyebrow--on-dark">Full-Service Digital Marketing</p>
          <h1 className="home-hero__title">{h1}</h1>
          <p className="lead home-hero__lead">
            <RichText text={intro} />
          </p>
          <div className="home-hero__actions">
            <Button href="/contact" variant="on-dark">
              {heroCta}
            </Button>
            <Button href="/services" variant="ghost" showArrow={false}>
              Explore Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="home-hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="home-hero__visual-card">
            <span className="home-hero__visual-label">Organic traffic growth</span>
            <GrowthBars tone="on-dark" heights={[30, 46, 40, 68, 58, 84]} className="home-hero__bars" />
            <span className="home-hero__visual-caption">Zap ahead of the search results.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
