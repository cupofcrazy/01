import sanityClient from '@sanity/client'


const options = {
    projectId: '1zcn1od1',
    dataset: 'production',
    useCdn: true
}

export const query = `
  *[_type == "caseStudy"] {
    title,
    slug,
    "thumbnail": thumbnail.asset->,
    description,
    link,
    tools,
    modules[] {
      "type": _type,
      caseStudyText,
      "image": image.asset->,
      "image1": image1.asset->,
      "image2": image2.asset->
    }
  }
`

export default sanityClient(options)