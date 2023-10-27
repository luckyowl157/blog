import Link from 'next/link'
import { useState } from 'react'
import Button from '../additional/components/Btn'

import s from './Topics.module.sass'


export default function Topics({ categories }: any) {

  const [headDropToggle, setHeadDropToggle] = useState(true)
  const [dropToggle, setDropToggle] = useState(true)

  return <div className={s.categories}>

    <h3
      className={headDropToggle ? s.closed : s.opened}
      onClick={() => setHeadDropToggle((state: boolean) => !state)}
    >
      Posts by Topic
    </h3>

    <div className={`
      ${s.toggleList}
      ${headDropToggle ? s.closed : s.opened}
    `}>
      <ul className={dropToggle ? s.closed : s.opened}>
        {categories.map((category: any) => {
          return <li key={category.id}>
            <Link href={`/tag/${category.slug}`}>
              <a>
                {category.name}
                <span>({category.count})</span>
              </a>
            </Link>
          </li>
        })}
      </ul>

      {dropToggle &&
        <span
          className={s.more}
          onClick={() => setDropToggle((state: boolean) => !state)}
        >
          See All
        </span>
      }

    </div>

    <Button
      href='https://pages.ztelco.com/new-get-quote'
      text='Download the pricing sheet'
      className={`btn primary-fill w-100 ${s.button}`}
    />

  </div>

}