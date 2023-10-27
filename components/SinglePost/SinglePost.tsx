import Image from 'next/image'
import Button from '../additional/components/Btn'
import ShareButtons from './ShareButtons/ShareButtons'
import useWindowWidth from '../additional/hooks/WindowWidthHandler'
import Arrow from '../Pagination/img/Arrow'

import s from './SinglePost.module.sass'
import p from '../../styles/post.module.sass'

export default function SinglePost({ post }: any) {

  const currentScreenWidth = useWindowWidth()

  const image = post[0]?._embedded['wp:featuredmedia']?.[0]
  const title = post[0]?.title.rendered
  const date = new Date(post[0]?.date)
  const content = post[0]?.content.rendered
  const author = post[0]?._embedded.author[0]
  const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const [month, day, year] = [
    monthList[date.getMonth()],
    date.getDate(),
    date.getFullYear()
  ]

  return <div className={s.singlePost}>

    {currentScreenWidth > 575 &&
      <Button
        href='/'
        icon={<Arrow />}
        text='Back to Blog List'
        className={`btn primary-outline small ${s.button}`}
      />
    }

    {image &&
      <div className={s.image}>
        <Image
          src={image.source_url}
          width='770'
          height='374'
          alt={image.alt_text}
          title={image.title.rendered}
        />
      </div>
    }

    <div className={s.date}>
      {`${day} ${month}, ${year}`}
      {author && <div className={s.category}>by {author.name}</div>}
    </div>

    <ShareButtons {...{ title }} />

    <h2>{title}</h2>

    {content &&
      <div
        className={`${s.content} ${p.post}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    }

    {// author &&
      // <div className={s.author}>
      // <div className={s.ava}>
      // <Image
      // src={author.avatar_urls['48']}
      // width='48'
      // height='48'
      // alt={author.name}
      // />
      // </div>
      // <div className={s.details}>
      // <div className={s.name}>
      // Written by: {author.name}
      // {author.position && `, ${author.position}`}
      // </div>
      // <div
      // className={s.description}
      // dangerouslySetInnerHTML={{ __html: author.description }}
      // />
      // </div>
      // </div>
    }

    <ShareButtons
      text='Do you like the post? Share with everyone:'
      {...{ title }}
    />

    {/* <div className={s.navigation}>
      <Button
        href={prev}
        icon={<Arrow />}
        text='Prev Post'
        className={`btn primary-fill small ${s.nav} ${s.prev}`}
      />
      <Button
        href={next}
        icon={<Arrow />}
        iconPosition='after'
        text='Next Post'
        className={`btn primary-fill small ${s.nav} ${s.next}`}
      />
    </div> */}

  </div>
}