import LayerImg from "./img/layer";
import RatingIndicationImg from "./img/RatingIndicationImg";

import s from './Rating.module.sass'

interface props {
  data: string
}

export default function Rating({ data }: props) {

  return <a
    href={data}
    className={s.wrapperRating}
    target='_blank'
    rel='noreferrer'
  >

    <div className={s.rating}>

      <LayerImg />

      <div className={s.flex}>

        <span className={s.span}>
          5.0
        </span>
        <RatingIndicationImg />

      </div>

    </div>

  </a>
}