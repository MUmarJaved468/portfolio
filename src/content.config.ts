import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.string()
  })
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.string()
  })
});

export const collections = { notes, publications };
