import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: any
  text?: string
  icon?: any
  iconPosition?: 'before' | 'after'
  className?: string;
}

export default function BlogButton({
  onClick,
  href = '',
  text,
  className,
  icon = null,
  iconPosition = 'before',
}: ButtonProps) {

  const buttonContent = () => <>
    {iconPosition === 'before' && icon &&
      <span className='spanImg icon-before'>
        {icon}
      </span>
    }
    {text}
    {iconPosition === 'after' && icon &&
      <span className='spanImg icon-after'>
        {icon}
      </span>
    }
  </>

  const hrefStart: string = href[0]

  let type: string = ''

  switch (hrefStart) {
    case 'h':
      type = 'external'
      break

    case '/':
      type = 'internal'
      break

    case '':
      type = 'submit'
      break

    case 'p':
      type = 'popup'
      break

    default:
      break
  }

  return <>
    {type === 'internal' && href
      ? <Link href={href}>
        <a className={className}>
          {buttonContent()}
        </a>
      </Link>
      : type === 'external' && href
        ? <a
          href={href}
          rel='noreferrer'
          target='_blank'
          className={className}
        >
          {buttonContent()}
        </a>
        : type === 'popup' && onClick
          ? <button
            className={className}
            onClick={onClick}
          >
            {buttonContent()}
          </button>
          :
          <button
            type='submit'
            className={className}
          >
            {buttonContent()}
          </button>
    }
  </>
}