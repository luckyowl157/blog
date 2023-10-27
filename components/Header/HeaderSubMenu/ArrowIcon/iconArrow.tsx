import s from './icon.module.sass'

export default function iconArrow() {
  return <svg width="14" className={s.iconArrow} height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3L12 7L8 11" stroke="#48596E" strokeWidth="2" />
    <path d="M1 7L12 7" stroke="#48596E" strokeWidth="2" />
  </svg>
}