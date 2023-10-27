import axios from 'axios'
import useWindowWidth from '../components/additional/hooks/WindowWidthHandler'

import { useRouter } from 'next/router'
import CustomHead from '../components/CustomHead/CustomHead'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Container from '../components/additional/components/Container'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import SmallBanners from '../components/SmallBanners/SmallBanners'
import Topics from '../components/Topics/Topics'
import Subscribe from '../components/Subscribe/Subscribe'
import RecentPosts from '../components/RecentPosts/RecentPosts'

import headerData from '../public/data/components/header.json'
import footerData from '../public/data/components/footer.json'
import smallBannersData from '../public/data/components/smallBanners.json'
import SinglePost from '../components/SinglePost/SinglePost'

export async function getServerSideProps(context: any) {

  const data = await axios({
    method: 'get',
    url: `${process.env.WP_BLOG_LINK}/wp-json/wp/v2/posts?slug=${context.query.slug}&_embed=author,wp:term,wp:featuredmedia&_fields=content,date,title,yoast_head,yoast_head_json,_links,_embedded`,
    responseType: 'json',
    headers: {
      'Accept-Encoding': 'application/json'
    }
  })

  const recent = await axios({
    method: 'get',
    url: `${process.env.WP_BLOG_LINK}/wp-json/wp/v2/posts?include=18,43,44&_fields=id,slug,title,_links,_embedded&_embed=wp:featuredmedia&order=asc`,
    responseType: 'json',
    headers: {
      'Accept-Encoding': 'application/json'
    }
  })

  const categories = await axios({
    method: 'get',
    url: `${process.env.WP_BLOG_LINK}/wp-json/wp/v2/categories?per_page=100&orderby=count&order=desc`,
    responseType: 'json',
    headers: {
      'Accept-Encoding': 'application/json'
    }
  })

  return {
    props: {
      post: data.data,
      recent: recent.data,
      categories: categories.data
    }
  }

}

export default function Post({ post, recent, categories }: any) {

  const currentScreenWidth = useWindowWidth()
  const router = useRouter()

  return <>

    <CustomHead
      title={post[0]?.title.rendered}
      description={post[0].yoast_head_json.description}
      canonical={`/${router.query.slug}`}
      modifiedTime={post[0].yoast_head_json.article_modified_time}
      publishedTime={post[0].yoast_head_json.article_published_time}
      author={post[0].yoast_head_json.author}
      twitter={{
        title: post[0].yoast_head_json.twitter_title,
        description: post[0].yoast_head_json.twitter_description,
        image: post[0].yoast_head_json.twitter_image,
        details: post[0].yoast_head_json.twitter_misc
      }}
      facebook={{
        title: post[0].yoast_head_json.og_title,
        description: post[0].yoast_head_json.og_description,
        url: `/${router.query.slug}`,
        og_image: post[0].yoast_head_json.og_image
      }}
    // schema
    />

    <Header {...headerData} />

    <Container>

      <Breadcrumbs />

      <main>

        {currentScreenWidth < 992 &&
          <aside>
            <Topics {...{ categories }} />
          </aside>
        }

        <article>
          <SinglePost {...{ post }} />
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