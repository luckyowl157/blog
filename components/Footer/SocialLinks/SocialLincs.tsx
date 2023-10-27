import Facebook from './img/facebook'
import Linkedin from './img/linkedin'
import Twitter from './img/twitter'

import s from './SocialLincs.module.sass'

export default function SocialLincs() {

  return <div className={s.socialLincs}>
    <a
      className={s.link}
      href='https://www.facebook.com/ztelco'
      target='_blank'
      rel='noreferrer'
    >
      <Facebook />
    </a>
    <a
      className={s.link}
      href='https://www.linkedin.com/company/ztelco/'
      target='_blank'
      rel='noreferrer'
    >
      <Linkedin />
    </a>
    <a
      className={s.link}
      href='https://twitter.com/account/access'
      target='_blank'
      rel='noreferrer'
    >
      <Twitter />
    </a>
  </div>
}
