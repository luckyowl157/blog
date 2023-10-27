import useWindowWidth from '../../../public/tools/WindowWidthHandler'

import s from './Contacts.module.sass'

interface props {
  data: {
    title: string,
    address: {
      name: string,
      href: string
    },
    phone: string,
    fax: string,
    email: string
  }
}

export default function Contacts({
  data: {
    title,
    address,
    phone,
    fax,
    email
  } }: props) {

  const windowWidth = useWindowWidth()

  return <address className={s.address} >

    {windowWidth > 575
      && <p>
        {title}
      </p>}

    <ul>

      <li>
        <a
          href={address.href}
          target='_blank'
          rel='noreferrer'
        >
          {address.name}
        </a>
      </li>

      <li>
        <a href={`tel:+${phone}`}>
          {`Phone: ${phone}`}
        </a>
      </li>

      <li>
        <a href={`fax:+${phone}`}>
          {`Fax: ${fax}`}
        </a>
      </li>

      <li>
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </li>

    </ul>

  </address>

}
