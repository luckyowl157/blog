import useWindowWidth from '../additional/hooks/WindowWidthHandler'

import CustomHead from '../CustomHead/CustomHead'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Container from '../additional/components/Container'
import SmallBanners from '../SmallBanners/SmallBanners'
import Subscribe from '../Subscribe/Subscribe'
import Topics from '../Topics/Topics'
import RecentPosts from '../RecentPosts/RecentPosts'
import Pagination from '../Pagination/Pagination'
import Posts from '../Posts/Posts'

import headerData from '../../public/data/components/header.json'
import footerData from '../../public/data/components/footer.json'
import smallBannersData from '../../public/data/components/smallBanners.json'

export default function BlogListing({ h1, posts, recent, totalPages, categories, pagination }: any) {

  const currentScreenWidth = useWindowWidth()

  const title = 'ZTelco - A San Diego Phone and Internet Provider '
  const description = 'ZTelco offer a wide range of internet and phone services including internet access, voice over internet, phone numbers, VoIP Hardware from leading vendors, and much more.'
  const url = 'https://blog.ztelco.com'

  return <>

    <CustomHead
      title={title}
      description={description}
      schema={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://blog.ztelco.com#website',
          headline: 'VyOS',
          'name': title,
          'description': description,
          'url': url,
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://blog.ztelco.com/?s={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://blog.ztelco.com#Organization',
          "name": title,
          "url": url,
          sameAs: [],
          logo: {
            '@type': 'ImageObject',
            url: 'https://blog.ztelco.com/favicon/favicon.ico',
            width: '60',
            height: '60',
          },
        },
      ]}
    />

    <Header {...headerData} />

    <Container>

      <Breadcrumbs />

      <main>

        {currentScreenWidth < 992 &&
          <aside>
            <h1 className='gradient'>{h1}</h1>
            <Topics {...{ categories }} />
          </aside>
        }

        <article>

          {currentScreenWidth > 991 &&
            <h1 className='gradient'>{h1}</h1>
          }

          <Posts {...{ posts }} />

          {pagination &&
            <Pagination {...{ totalPages }} />
          }

        </article>

        <aside>

          {currentScreenWidth > 991 &&
            <Topics {...{ categories }} />
          }

          <Subscribe />

          <RecentPosts {...{ recent }} />

        </aside>

      </main>

      <SmallBanners data={smallBannersData} />

    </Container>

    <Footer {...footerData} />

  </>

}