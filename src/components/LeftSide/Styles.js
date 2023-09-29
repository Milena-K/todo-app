import { Color, Breakpoints } from '../../styles/config'
import styled from 'styled-components'

export const StyledLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${Color.dark_2};
  width: 20rem;
  min-height: 32.13333rem;
  flex-shrink: 0;
  justify-content: space-between;
  @media (max-width: ${Breakpoints.mobile}) {
    display: none;
  }

  img.smiley {
    width: 6.66667rem;
    height: 6.66667rem;
    flex-shrink: 0;
  }

  img.logo {
    width: 2.73333rem;
    height: 2.73333rem;
  }
`
