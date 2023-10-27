import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

interface props {
  title?: string,
  description?: string,
  canonical?: string,
  facebook?: {
    title: string,
    description: string,
    url: string,
    og_image: {
      height: number,
      type: string,
      url: string,
      width: number
    }[]
  },
  twitter?: {
    title: string,
    description: string,
    image: string,
    details: {
      'Written by': string,
      'Est. reading time': string
    }
  },
  schema?: any,
  modifiedTime?: string,
  publishedTime?: string,
  author?: string
}

export default function CustomHead({
  title,
  description,
  canonical,
  facebook,
  twitter,
  schema,
  publishedTime,
  modifiedTime,
  author
}: props) {

  const router = useRouter()
  const [currentServerUrl, setCurrentServerUrl] = useState('')
  const [structuredData, setStructuredData] = useState(false)
  const [siteName, setSiteName] = useState('')

  // get current server donain name
  useEffect(() => {
    setSiteName(window.location.host)
  }, [])

  // get current server url
  useEffect(() => {
    setCurrentServerUrl(window.location.origin)
  }, [])

  // create structured data
  useEffect(() => {
    setStructuredData(schema)
  }, [schema])

  return <Head>

    {title &&
      <title>{title}</title>
    }

    {description &&
      <meta
        name='description'
        content={description}
      />
    }

    {canonical &&
      <link
        rel='canonical'
        href={`${currentServerUrl}${canonical}`}
      />
    }

    <link
      rel='alternate'
      href={`${currentServerUrl}${canonical}`}
      hrefLang='en'
    />

    <meta
      name='robots'
      content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    />

    {publishedTime &&
      <meta
        property='article:published_time'
        content={publishedTime}
      />
    }

    {author &&
      <meta
        name='author'
        content={author}
      />
    }


    {/* Facebook */}
    <meta
      property='og:locale'
      content='en_US'
    />
    <meta
      property='og:type'
      content='article'
    />
    <meta
      property='og:site_name'
      content={siteName}
    />
    {facebook?.title &&
      <meta
        property='og:title'
        content={facebook.title}
      />
    }
    {facebook?.description &&
      <meta
        property='og:description'
        content={facebook.description}
      />
    }
    {facebook?.url &&
      <meta
        property='og:url'
        content={`${currentServerUrl}${facebook.url}`}
      />
    }
    {facebook?.og_image &&
      <>
        {facebook?.og_image?.[0].url &&
          <meta
            property='og:image'
            content={facebook?.og_image?.[0].url}
          />
        }
        {facebook?.og_image?.[0].width &&
          <meta
            property='og:image:width'
            content={`${facebook?.og_image?.[0].width}`}
          />
        }
        {facebook?.og_image?.[0].height &&
          <meta
            property='og:image:height'
            content={`${facebook?.og_image?.[0].height}`}
          />
        }
        {facebook?.og_image?.[0].type &&
          <meta
            property='og:image:type'
            content={facebook?.og_image?.[0].type}
          />
        }
      </>
    }
    {/* / Facebook */}


    {/* Twitter */}
    {modifiedTime &&
      <meta
        property='article:modified_time'
        content={modifiedTime}
      />
    }
    <meta
      name='twitter:card'
      content='summary_large_image'
    />
    {twitter?.title &&
      <meta
        name='twitter:title'
        content={twitter.title}
      />
    }
    {twitter?.description &&
      <meta
        name='twitter:description'
        content={twitter.description}
      />
    }
    {twitter?.image &&
      <meta
        name='twitter:image'
        content={twitter?.image}
      />
    }
    <meta
      name='twitter:label1'
      content='Written by'
    />
    {twitter?.details?.['Written by'] &&
      <meta
        name='twitter:data1'
        content={twitter?.details?.['Written by']}
      />
    }
    <meta
      name='twitter:label2'
      content='Est. reading time'
    />
    {twitter?.details?.['Est. reading time'] &&
      <meta
        name='twitter:data2'
        content={twitter?.details?.['Est. reading time']}
      />
    }
    {/* / Twitter */}


    {/* Structured Data */}
    {structuredData &&
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    }
    {/* / Structured Data */}

  </Head>
}