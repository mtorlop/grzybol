
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const devlog = defineCollection({
  loader: glob({
    base: './src/content/devlog',
    pattern: '**/*.md',
  }),

  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    month: z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/).optional(),
    category: z.string(),
    order: z.number().int().default(0),
  }),
});

export const collections = { devlog };