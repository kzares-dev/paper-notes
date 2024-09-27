import { defineCollection, z } from "astro:content";

const pathsCollection = defineCollection({
    schema: ({image}) => {
        z.object({
            name: z.string(),
            image: image(),
            relatedLanguages: z.string(),
            description: z.string(),
        })
    }
})

const languagesCollection = defineCollection({
    schema: ({image}) => {
        z.object({
            name: z.string(),
            image: image(),
            relatedBranches: z.string(),
            relatedFrameworks: z.string(),
            description: z.string(),
        })
    }
})

const frameworksCollection = defineCollection({
    schema: ({image}) => {
        z.object({
            name: z.string(),
            relatedPaths: z.string(),
            relatedLanguages: z.string(),
        })
    }
})

export const collections = {
    paths: pathsCollection,
    languages: languagesCollection,
    frameworks: frameworksCollection,
}