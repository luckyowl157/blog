import Link from 'next/link'
import HeaderSubMenu from '../HeaderSubMenu/HeaderSubMenu'
import { MenuList } from '../Header'
import { useState } from 'react'
import s from './HeaderMenu.module.sass'
import { text } from 'stream/consumers';
import useWindowWidth from '../../additional/hooks/WindowWidthHandler'


interface Props {
  menuList: MenuList[],
  type?: 'desktop' | 'mobile'
}

export default function HeaderMenu({ menuList, type }: Props) {

  const [value, setValue] = useState(null)

  const windowWidth = useWindowWidth()

  return <>

    <ul className={`
      ${type === 'desktop'
        ? s.menuList
        : type === 'mobile'
          ? s.mobileMenuList
          : 'desktop'
      }
    `}>

      {menuList.map(({ name, submenuList, visitPage, href }, index: any) => (
        <li
          key={index}
          className={`
            ${submenuList ? s.subMenu : ''}
            ${index === value ? s.openedSubItem : ''}
            ${index === 2 ? s.about : ''}
          `}
          onClick={() => index === value ? setValue(null) : setValue(index)}
        >

          <Link href={href}>
            <a>{name}</a>
          </Link>

          {submenuList &&
            <HeaderSubMenu
              submenuList={submenuList}
              visitPage={visitPage}
            />
          }

        </li>
      ))}

    </ul>

  </>
}
