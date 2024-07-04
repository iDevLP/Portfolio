import { z } from "astro:content";

export const Skill = z.object({
    name: z.string(),
    image: z.string()
});

export const SkillSchema = z.array(
    Skill
);