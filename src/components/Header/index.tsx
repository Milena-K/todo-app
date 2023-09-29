import { StyledHeader } from './Styles'
import Logo from '../../assets/small_logo_mobile.svg'
import { type FC } from 'react'

const Header: FC = () => {
  return (
    <StyledHeader>
      <p className="header__title">
        To Do App
      </p>
      <div className="header__logo">
        <img alt="" src={Logo} />
      </div>
    </StyledHeader>
  )
}

export default Header
