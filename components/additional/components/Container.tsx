interface Props {
  children: any,
  size?: 'big' | 'middle' | 'small'
}

export default function Container({ children, size='big' }: Props) {

  return <div className={`container ${size}`}>
    {children}
  </div>
  
}
