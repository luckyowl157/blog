import Container from '../../additional/components/Container'
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { MenuList } from '../Header'
import s from './MobileMenu.module.sass'

import useWindowWidth from '../../additional/hooks/WindowWidthHandler'

interface props {
  menuList: [MenuList]
}

export default function MobileMenu({
  isOpenMobileMenu,
  setIsOpenMobileMenu,
  menuList,
  tel,
  type
}: any) {
  // console.log('menu', menuList);
  const windowWidth = useWindowWidth()
  return <div className={`
    ${s.mobileMenu}
    ${isOpenMobileMenu ? s.opened : s.close}
  `}>
    <Container>

      <HeaderMenu
        menuList={menuList}
        type='mobile'
      />
      {windowWidth < 576 &&
        <div className={`
        ${s.bottomTel}
        ${isOpenMobileMenu ? s.show : s.hide}
      `}>
          <a
            href={`tel:${tel.href}`}>
            {tel.title}
          </a>
        </div>
      }
    </Container>
  </div>
}