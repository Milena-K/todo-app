import { Color, Breakpoints } from '../../styles/config'
import styled from 'styled-components'

export const StyledHeader = styled.div`
    display: flex;
    padding: .3rem 1rem;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: ${Color.dark_2};
    color: ${Color.white};
    border-radius: 0.26rem 0;
    border: 0.3rem solid ${Color.dark_2};
    background: ${Color.dark_2};
    min-height: 3.33rem;
    flex-shrink: 0;
    @media (max-width: ${Breakpoints.mobile}) {
      background: ${Color.dark_3};
      border: 0.3rem solid ${Color.dark_3};
      border-radius: 1rem 1rem 0 0;
      padding: 1.3rem 1.4rem;
    }

    img {
      margin-right: 1rem;
      width: 1.8rem;
      height: 1.8rem;
      @media (max-width: ${Breakpoints.mobile}) {
        margin-right: 0;
      }
    }
`
