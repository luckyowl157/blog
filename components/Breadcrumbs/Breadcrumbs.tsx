import { useRouter } from 'next/router'
import Link from 'next/link'

import s from './Breadcrumbs.module.sass'

export default function Breadcrumbs() {

  const { query }: any = useRouter()

  return <p className={s.breadcrumbs}>

    <a href='https://ztelco.com/'>Home</a>

    {query?.slug
      ? <>
        <Link href='/'>
          <a>Blog</a>
        </Link>

        <span>
          {query.slug?.split('-').join(' ')}
        </span>
      </>
      : <span>
        Blog
      </span>
    }



  </p>
}