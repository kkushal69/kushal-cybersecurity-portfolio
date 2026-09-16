"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export default function SkillCard({
  icon: Icon,
  title,
  text,
  tags
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  tags: string[];
}) {
  return (
    <motion.article
      className="skill-card"
      whileHover={{ y: -7, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="skill-icon"><Icon size={21} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="tags">
        {tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </motion.article>
  );
}
