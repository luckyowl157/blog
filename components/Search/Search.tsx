import s from './Search.module.sass'

import Icon from './img/IconSearch'

export default function Search () {

  return <div className={s.search}>

    <form action="https://blog.ztelco.com/" method="GET" data-hs-cf-bound="true">

      <Icon/>

      <input 
        type="text" 
        name="search" 
        placeholder="Search"
      />

    </form>

  </div>

}