import Image from 'next/image'
import Link from 'next/link'
import SocialLincs from './SocialLinks/SocialLincs'
import NavMenu from './NavMenu/NavMenu'
import Rating from './Rating/Rating'
import Contacts from './Contacts/Contacts'
import BottomOfFooter from './BottomOfFooter/BottomOfFooter'
import DownloadApp from './DownloadApp/DownloadApp'
import Container from '../additional/components/Container'

import s from './Footer.module.sass'

import useWindowWidth from '../../public/tools/WindowWidthHandler'


interface props {
  logo: {
    src: string,
    alt: string,
    title: string,
    href: string,
    text: string
  },
  menu: {
    id: string,
    title: string,
    list:
    {
      id: string,
      title: string,
      link: string,
      newtab?: string | undefined
    }[]
  }[],
  contacts: {
    title: string,
    address: {
      name: string,
      href: string
    },
    phone: string,
    fax: string,
    email: string
  },
  bottomOfFooter: {
    img: {
      src: string,
      alt: string,
      title: string
      href: string
    }
    list: {
      id: string,
      title: string,
      link: string,
      newtab?: string | undefined
    }[],
    description: string
  },
  downloadLinks: {
    id: string,
    img: {
      src: string,
      alt: string,
      title: string
    },
    link: string
  }[],
  ratingLink: string
}

export default function Footer({
  logo,
  menu,
  contacts,
  bottomOfFooter,
  downloadLinks,
  ratingLink }: props) {

  const windowWidth = useWindowWidth()

  return <section className={`${s.footer} nomargin`}>

    <Container size='big'>

      <div className={s.wrapperLogoAndText}>

        <Link href={logo.href}>
          <div className={s.wrapperZtelcoLogo}>
            <Image
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </Link>
        <p>
          {logo.text}
        </p>

      </div>

      <div className={s.wrapNavAndContacts}>
        {windowWidth > 575 &&
          <NavMenu data={menu} />
        }

        <div>
          <Contacts data={contacts} />
          {windowWidth > 575 &&
            <SocialLincs />
          }
        </div>

      </div>

      <div className={s.wrapperDownlAndRating}>
        {windowWidth > 575 &&
          <DownloadApp data={downloadLinks} />
        }
        <Rating data={ratingLink} />
      </div>

      {windowWidth < 576 &&
        <SocialLincs />
      }

      <BottomOfFooter data={bottomOfFooter} />

    </Container>

  </section >
}
