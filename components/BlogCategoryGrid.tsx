"use client";

import { motion } from "framer-motion";
import { StaggerGroup, staggerItem } from "./motion/Reveal";
import type { BlogCategory } from "@/content/blog";

export function BlogCategoryGrid({ categories }: { categories: BlogCategory[] }) {
  return (
    <StaggerGroup style={{ display: "grid", gap: 24 }}>
      {categories.map((cat) => (
        <motion.div className="blog-category" variants={staggerItem} key={cat.slug}>
          <h2 className="blog-category__title">{cat.title}</h2>
          <p className="blog-category__h1">{cat.h1}</p>
          <p className="blog-category__desc">{cat.description}</p>
          <ul className="blog-category__posts">
            {cat.suggestedPosts.map((post) => (
              <li key={post}>{post}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </StaggerGroup>
  );
}
