import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useWindowWidth from '../../additional/hooks/WindowWidthHandler'

import s from './ShareButtons.module.sass'

import IconFacebook from '../img/IconFacebook'
import IconTwitter from '../img/IconTwitter'

interface Type {
  text?: string,
  title?: string,
}

export default function ShareButtons({ text, title }: Type) {

  const currentScreenWidth = useWindowWidth()
  const [origin, setOrigin] = useState('')
  
  useEffect(() => {
    window && setOrigin(window.location.origin)
  }, [])

  const { asPath } = useRouter()

  const host = `${origin}${asPath}`

  return <div className={`${s.share} ${text ? s.text : ''}`}>

    {text &&
      <p>{text}</p>
    }

    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${host}&t=${title}`}
      title="Share on Facebook"
      target="_blank"
      rel="noreferrer"
      className={s.button}
    >
      <IconFacebook />
      {currentScreenWidth > 767 &&
        <span>Facebook</span>
      }
    </a>

    <a
      href={`https://twitter.com/share?url=${host}&text=${title}`}
      title="Share on Twitter"
      target="_blank"
      rel="noreferrer"
      className={s.button}
    >
      <IconTwitter />
      {currentScreenWidth > 767 &&
        <span>Twitter</span>
      }
    </a>

  </div>
}