import axios from 'axios'
import BlogListing from '../components/BlogListing/BlogListing'

export async function getServerSideProps() {

  const posts = await axios({
    method: 'get',
    url: `${process.env.WP_BLOG_LINK}/wp-json/wp/v2/posts?per_page=5&_fields=date,excerpt,id,slug,title,_links,_embedded&_embed=author,wp:term,wp:featuredmedia`,
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
      recent: recent.data,
      totalPages: posts.headers['x-wp-totalpages'],
      categories: categories.data
    }
  }

}

export default function Blog({ posts, recent, totalPages, categories }: any) {

  const h1 = 'Latest Blog Posts'

  return <BlogListing
    {...{ h1, posts, recent, totalPages, categories }}
    pagination
  />

}