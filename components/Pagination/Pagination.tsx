import Link from 'next/link'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Button from '../additional/components/Btn'

import Arrow from './img/Arrow'

import s from './Pagination.module.sass'

export default function Pagination({ totalPages }: any) {

  const links: any = []
  for (let i = 1; i <= totalPages; i++) links.push(i)

  const router = useRouter()

  const currentPageNumber = Number(router.query.page)
  const previousPage = currentPageNumber > 1 && currentPageNumber - 1
  const nextPage = currentPageNumber ? (currentPageNumber < totalPages && currentPageNumber + 1) : 2

  return <div className={s.pagination}>

    <Button
      href={previousPage > 1 ? `/page/${previousPage}` : '/'}
      text=''
      icon={<Arrow />}
      disabled={!previousPage}
      className={`btn nav nav-prev nav-dark ${s.prev}`}
    />

    {links.map((i: number) => {

      const renderItem = () => {

        if (
          (router.pathname === '/' && i === 1 && s.current) ||
          (currentPageNumber === i && s.current)
        ) return <span className={s.current}>{i}</span>

        else return <Link
          key={i}
          href={i === 1 ? '/' : `/page/${i}`}
        >
          <a>{i}</a>
        </Link>

        {/* <span className={s.dots}>...</span> */}

      }

      return <Fragment key={i}>
        {renderItem()}
      </Fragment>

    })}

    <Button
      href={`/page/${nextPage}`}
      text=''
      icon={<Arrow />}
      disabled={!nextPage}
      className={`btn nav nav-next nav-dark ${s.next}`}
    />

  </div>

}