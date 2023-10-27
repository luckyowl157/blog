import axios from 'axios'
import BlogListing from '../../components/BlogListing/BlogListing'

export async function getServerSideProps(context: any) {

  const category = await axios({
    method: 'get',
    url: `${process.env.WP_BLOG_LINK}/wp-json/wp/v2/categories?slug=${context.query.slug}`,
    responseType: 'json',
    headers: {
      'Accept-Encoding': 'application/json'
    }
  })

  const posts = await axios({
    method: 'get',
    url: `${process.env.WP_BLOG_LINK}/wp-json/wp/v2/posts?per_page=100&categories=${category.data[0].id}&_fields=date,excerpt,id,slug,title,_links,_embedded&_embed=author,wp:term,wp:featuredmedia`,
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
      posts: posts.data,
      category: category.data[0],
      categories: categories.data,
      recent: recent.data
    }
  }

}

export default function Blog({ posts, category, categories, recent }: any) {

  const h1 = category.name

  return <BlogListing
    {...{ h1, posts, categories, recent }}
  />

}