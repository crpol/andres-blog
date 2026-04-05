import { defineCollection, z } from 'astro:content';

const reflexiones = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    fecha: z.string(), // YYYY-MM-DD
    tema: z.string().optional(), // e.g. "La Humildad", "La Fe", "El Amor"
    cita: z.string().optional(), // Cita bíblica referenciada
    imagen: z.string().optional(), // e.g. "/images/reflexiones/2026-03-20.webp"
    autor: z.string().default('CONSAGRADO AL CORAZÓN DE JESÚS'),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { reflexiones };
