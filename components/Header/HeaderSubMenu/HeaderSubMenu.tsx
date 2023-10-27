import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SubmenuList, VisitPage } from '../Header'

import Arrow from './ArrowIcon/iconArrow'

import s from './HeaderSubMenu.module.sass'

interface Props extends SubmenuList {
  submenuList: SubmenuList[],
  visitPage: VisitPage | undefined
}


export default function HeaderSubMenu({ submenuList, visitPage }: Props) {

  return <div className={s.subMenuList}>

    <ul className={s.linkList}>

      {submenuList.map(({ title, description, icon, href }, index: number) => (

        <li key={index}>

          <Link href={`${href}`}>
            <a>
              <div className={s.subMenu_icon}>
                {icon &&

                  <Image
                    width={24}
                    height={24}
                    src={icon.src}
                    alt={icon.alt}
                    title={icon.title}
                  />

                }
              </div>
              <div className={s.subMenu_text}>
                <h6>{title}</h6>
                <p>{description}</p>
              </div>
            </a>
          </Link>
        </li>

      ))}
    </ul>

    {visitPage &&
      <div className={s.subMenuFooter}>
        <Link href={`${visitPage.url}`}>
          <>
            <a href={visitPage.url}>{visitPage.text}</a>
            <Arrow />
          </>
        </Link>
      </div>
    }
  </div>
}