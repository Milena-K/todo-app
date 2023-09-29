import { type FC } from 'react'
import { StyledTitle } from './Styles'

type PageProps = {
  className?: string
  title: string
  marginTop?: string
  marginBottom?: string
}

const Title: FC<PageProps> = ({ className = '', title, marginTop = '', marginBottom = '' }) => {
  return <>
    <StyledTitle className={className} $marginBottom={marginBottom} $marginTop={marginTop}>
      {title}
    </StyledTitle>
  </>
}

export default Title
