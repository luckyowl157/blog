import Link from 'next/link'
import Image from 'next/image'
import useWindowWidth from '../../additional/hooks/WindowWidthHandler'

import s from './Post.module.sass'

export default function Post({ link, image, title }: any) {

  const currentScreenWidth = useWindowWidth()

  return <Link href={link}>
    <a className={s.post}>
      <div className={s.img}>
        <Image
          src={image.source_url}
          alt={image.alt_text}
          title={image.title.rendered}
          objectFit='cover'
          objectPosition={'left center'}
          width='100%'
          height={currentScreenWidth > 767 ? '100%' : '55%'}
          layout={currentScreenWidth > 767 ? 'fill' : 'responsive'}
        />
      </div>
      <p>{title}</p>
    </a>
  </Link>
  
}