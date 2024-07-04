// 1. Importa las utilidades de `astro:content`
import { z, defineCollection } from 'astro:content';
import { SkillSchema } from "../schemas/skills"
import { PostSchema } from '../schemas/post';
// 2. Define tu colección(es)
const skillCollection = defineCollection({
    type: 'data',
    schema: SkillSchema
});

const postCollection = defineCollection({
    type: 'content',
    schema: PostSchema
})
// 3. Exporta un único objeto `collections` para registrar tu(s) colección(es)
//    Esta clave debe coincidir con el nombre de tu directorio de colección en "src/content"
export const collections = {
    'skills': skillCollection,
    'post': postCollection
};