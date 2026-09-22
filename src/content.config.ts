import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const motorcycles = defineCollection({
  loader: glob({ base: './src/content/motorcycles', pattern: '**/*.md' }),
  schema: z.object({
    make: z.string(),
    model: z.string(),
    engineType: z.enum(['2-stroke', '4-stroke']),
    engineSize: z.number(),
    ageCategory: z.enum(['Kids', 'Youth', 'Teen/Adult', 'Adult/Pro']),
    latestModelYear: z.number(),
    description: z.string().max(200),
  }),
});

export const collections = { Motorcycles: motorcycles };
