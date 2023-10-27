import Post from './Post/Post'

import s from './RecentPosts.module.sass'

export default function RecentPosts({ recent }: any) {

  return <div className={s.recentPosts}>

    <h3>Recent Posts</h3>

    <div className={s.posts}>
      {recent?.map((post: any) => (
        <Post
          link={`/${post.slug}`}
          image={post._embedded['wp:featuredmedia'][0]}
          title={post.title.rendered}
          key={post.id}
        />
      ))}
    </div>

  </div>

}