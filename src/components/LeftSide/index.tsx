import { StyledLeft } from './Styles'
import Smiley from '../../assets/profile.svg'
import Logo from '../../assets/Group 56.svg'
import Title from 'components/Title'
import { type FC } from 'react'

const LeftSide: FC = () => {
  return <StyledLeft>
    <div className='top-part'>
      <img className='smiley' alt='Smiley' src={Smiley} />
      <Title title='This is your to do list!' marginTop='1.33rem'/>
    </div>
    <img className='logo' alt='Logo' src={Logo} />
  </StyledLeft>
}

export default LeftSide
