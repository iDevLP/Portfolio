import { z } from "astro:content";

export const PostSchema = z.object({
    title: z.string(),
    image: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string(),
    url: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string())
});