import Post from './Post/Post'

import s from './Posts.module.sass'


export default function Posts({ posts }: any) {

  return <div className={s.posts}>

    {posts.map((post: any) => (
      <Post
        key={post.id}
        {...{ post }}
      />
    ))}

  </div>
} 