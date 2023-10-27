import Link from 'next/link'

import s from './NavMenu.module.sass'

interface props {
  data: {
    id: string,
    title: string,
    list:
    {
      id: string,
      title: string,
      link: string,
      newtab?: string | undefined
    }[]
  }[]
}

export default function SubMenu({ data }: props) {

  return <div className={s.listFoter}>
    {data?.map(({
      id,
      title,
      list
    }) => (
      <div
        className={s.listWrapper}
        key={id}
      >
        <p className={s.title}>
          {title}
        </p>

        <ul>
          {list?.map(({
            id,
            link,
            title,
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
      </div>
    ))
    }
  </div >
}
