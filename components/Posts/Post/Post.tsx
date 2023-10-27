import Image from 'next/image'
import Link from 'next/link'

import IconBook from '../img/IconBook'
import IconArrow from '../img/IconArrow'

import s from './Post.module.sass'


export default function Post({ post }: any) {

  const author = post._embedded.author[0]
  const categories = post._embedded['wp:term'][0]
  const date = new Date(post.date)
  const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const [month, day, year] = [
    monthList[date.getMonth()],
    date.getDay(),
    date.getFullYear()
  ]

  return <Link href={`/${post.slug}`}>
    <a className={s.post}>

      <div className={s.image}>

        <div className={s.hover}>
          <IconBook />
          <span>Read</span>
          <IconArrow />
        </div>

        {post._embedded['wp:featuredmedia'] &&
          <Image
            src={post._embedded['wp:featuredmedia'][0].source_url}
            width='770'
            height='374'
            layout='responsive'
            alt={post.title.rendered}
            title={post.title.rendered}
          />
        }

      </div>

      <div className={s.content}>
        <div className={s.author}>
          <Image
            src={author.avatar_urls['96']}
            width='24'
            height='24'
            alt={author.name}
          />
          <span>{author.name}</span>
        </div>

        <div className={s.date}>
          {`${day} ${month}, ${year}`} <span />
          <div className={s.category}>
            {categories.map((category: any, id: number) => {
              return ` ${category.name}${id < categories.length - 1 && ','} `
            })}
          </div>
        </div>

        <h2>{post.title.rendered}</h2>

        <div
          className={s.preview}
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
      </div>

    </a>
  </Link>
}