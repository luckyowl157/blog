
import s from './Subscribe.module.sass'

export default function Subscribe() {

  return <div className={s.form}>

    <h3 className='gradient'>Subscribe to ZTelco Newsletter!</h3>

    <iframe src='http://localhost:3000/ztelco/subscribe-ztelco' height='300px' />

  </div>

}