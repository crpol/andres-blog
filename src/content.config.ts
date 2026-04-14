import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reflexiones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reflexiones' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.string(),
    tema: z.string().optional(),
    cita: z.string().optional(),
    imagen: z.string().optional(),
    imagenes: z.array(z.object({
      src: z.string(),
      pie: z.string().optional(),
    })).optional(),
    pie_imagenes: z.string().optional(),
    pie_imagenes: z.string().optional(),
    autor: z.string().default('CONSAGRADO AL CORAZÓN DE JESÚS'),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { reflexiones };