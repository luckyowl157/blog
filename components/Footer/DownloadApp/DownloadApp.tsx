import Image from 'next/image'
import Link from 'next/link'

import s from './DownloadApp.module.sass'

interface props {
  data: {
    id: string,
    img: {
      src: string,
      alt: string,
      title: string
    },
    link: string
  }[]
}

export default function DownloadApp({ data }: props) {

  return <ul className={s.list}>
    {data.map(({
      id,
      img: {
        src,
        alt,
        title },
      link
    }) => (
      <li
        key={id}
        className={s.item}
      >
        <Link
          href={link}
        >
          <div className={s.iconWrapper}>
            <Image
              src={src}
              title={title}
              alt={alt}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </Link>
      </li>
    ))}

  </ul>
}