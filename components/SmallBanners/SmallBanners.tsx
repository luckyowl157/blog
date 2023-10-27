import Image from 'next/image'
import Button from '../additional/components/Btn'
import useWindowWidth from '../additional/hooks/WindowWidthHandler'
import s from './SmallBanners.module.sass'

interface Banner {
  image: {
    desk: string,
    mob: string
  },
  title: string,
  text: string,
  button: {
    link: string,
    text: string
  }
}

interface type {
  data: Banner[]
}

export default function SmallBanners({ data }: type) {

  const currentScreenWidth = useWindowWidth()

  return <section
    className={s.smallBanners}
  >

    {data.map((elem, index: number) => (
      <div
        className={s.item}
        key={index}
      >
        <div className={s.image}>
          <Image
            src={currentScreenWidth > 991
              ? elem.image.desk
              : elem.image.mob
            }
            objectFit='contain'
            layout='fill'
            alt={elem.title}
            title={elem.title}
          />
        </div>

        <div className={s.content}>
          <h3>{elem.title}</h3>

          <p dangerouslySetInnerHTML={{ __html: elem.text }} />

          <Button
            href={elem.button.link}
            text={elem.button.text}
            className={`btn ${index == 0 ? 'secondary-fill' : 'primary-fill'}`}
          />
        </div>

      </div>
    ))}

  </section>
}