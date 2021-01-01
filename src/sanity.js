import sanityClient from '@sanity/client'


const options = {
    projectId: process.env.VUE_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true
}

export const query = `*[_type == "photography"] {
    "id": _id,
    year,
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->,
    description,
    images[] {
      asset->,
      caption
    }
}`

export default sanityClient(options)