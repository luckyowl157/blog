import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '../additional/components/Container'
import Search from './HeaderIcons/Search'
import Btn from '../additional/components/Btn'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import MobileMenu from './MobileMenu/MobileMenu'

import usecurrentScreenWidth from '../../public/tools/WindowWidthHandler'

import Phone from './HeaderIcons/Phone'
import s from './Header.module.sass'

interface Logo {
  src: string
  alt: string
  title: string
}

interface Tel {
  title: string
  href: string
}
export interface VisitPage {
  text?: string,
  url?: string
}

export interface SubmenuList {
  title?: string,
  description?: string,
  icon?: Icon,
  href?: string
}

export interface Icon {
  src: string
  alt: string
  title: string
}

export interface MenuList {
  name: string,
  href: string,
  submenuList?: SubmenuList[]
  visitPage?: VisitPage
}

interface Data {
  tagline: string
  logo: Logo
  tel: Tel
  menuList: MenuList[]
}

export default function Header({ tagline, logo, tel, menuList }: Data) {

  const currentScreenWidth = usecurrentScreenWidth()

  const [offset, setOffset] = useState(0)

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 0
        ? setOffset(window.pageYOffset)
        : setOffset(0)
    }
  })

  return <>
    <header className={`
      ${s.header}
      ${offset >= 1
        ? s.is_scrolled
        : ''
      }
      ${isOpenMobileMenu
        ? s.openedMenu
        : ''
      }
    `}>

      <div className={s.tagWrapper}>
        <p className={s.tagline}>{tagline}</p>
      </div>

      <Container>
        <div className={s.wrapper}>

          <div className={s.nav}>

            <Link href='/'>
              <a className={s.logo}>
                <Image
                  width={currentScreenWidth > 575 ? 71 : 45}
                  height={currentScreenWidth > 575 ? 32 : 20}
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                />
              </a>
            </Link>

            {currentScreenWidth < 992 && currentScreenWidth > 575 &&
              <div className={s.dashboard}>
                <a href={`tel:${tel.href}`}>
                  {tel.title}
                </a>
              </div>
            }

            {currentScreenWidth > 991 &&
              <div className={s.navMenu}>
                <HeaderMenu
                  type='desktop'
                  menuList={menuList}
                />
              </div>
            }

          </div>

          <div className={s.dashboard}>

            {currentScreenWidth > 1199 &&
              <a href={`tel:${tel.href}`}>
                {tel.title}
              </a>
            }

            {currentScreenWidth < 1200 && currentScreenWidth > 991 &&
              <a href={`tel:${tel.href}`}>
                <Phone />
              </a>
            }

            {currentScreenWidth > 575 &&
              <div className={s.loginBtns}>
                <Btn
                  href='https://ztelco.com/login/'
                  text='Login'
                  className='btn primary-outline small'
                />
                <Btn
                  href='https://pages.ztelco.com/new-get-quote'
                  text='Get a Quote'
                  className='btn primary-fill small'
                />
              </div>
            }

            {currentScreenWidth < 992 &&
              <div
                onClick={() => setIsOpenMobileMenu(state => !state)}
                className={`
                  ${s.burgerMenu}
                  ${isOpenMobileMenu
                    ? s.active
                    : ''}
                `}
              >
                <span className={s.top}></span>
                <span className={s.middle}></span>
                <span className={s.bottom}></span>
              </div>
            }

          </div>

        </div>
      </Container>

      {currentScreenWidth < 992 &&
        <MobileMenu
          isOpenMobileMenu={isOpenMobileMenu}
          setIsOpenMobileMenu={setIsOpenMobileMenu}
          menuList={menuList}
          type='mobile'
          tel={tel}
        />
      }

    </header>
  </>
}