import { defineCollection, z } from "astro:content";

const pathsCollection = defineCollection({
    schema: ({image}) => {
        z.object({
            name: z.string(),
            image: image(),
        })
    }
})

const languagesCollection = defineCollection({
    schema: ({image}) => {
        z.object({
            name: z.string(),
            image: image(),
        })
    }
})

export const collections = {
    paths: pathsCollection,
    languages: languagesCollection,
}