import Link from 'next/link'
import Image from 'next/image'

import useWindowWidth from '../../../public/tools/WindowWidthHandler'

import s from './BottomOfFooter.module.sass'

interface props {
  data: {
    img: {
      src: string,
      alt: string,
      title: string,
      href: string
    }
    list: {
      id: string,
      title: string,
      link: string,
      newtab?: string | undefined
    }[],
    description: string
  }
}

export default function BottomOfFooter({
  data: {
    img: {
      src,
      alt,
      title,
      href },
    list,
    description
  } }: props) {

  const windowWidth = useWindowWidth()

  return <div className={s.bottomOfFooter}>

    <div className={s.wrapImageAndDescr}>

      <a
        href={href}
        className={s.iconWrapper}
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src={src}
          alt={alt}
          title={title}
          layout='fill'
          objectFit='cover'
        />
      </a>

      {windowWidth >= 992 &&
        <p>
          {description}
        </p>}

    </div>

    <ul>
      {list?.map(({
        id,
        title,
        link,
        newtab
      }) => (
        link.includes('https')
          ?
          <li key={id}>

            <a
              className={s.link}
              href={link}
              rel='noreferrer'
              target={
                newtab ?
                  '_blank' :
                  '_self'}
            >
              {title}
            </a>

          </li>
          :
          <li key={id}>

            <Link href={link} >

              <a className={s.link}>
                {title}
              </a>

            </Link>

          </li>
      ))}
    </ul>

    {windowWidth < 992 &&
      <p>
        {description}
      </p>}

  </div>
}
