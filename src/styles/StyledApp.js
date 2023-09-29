import { Breakpoints } from './config'
import styled from 'styled-components'

export const StyledApp = styled.div`
  width: 80%;
  min-height: 35.46667rem;
  max-height: 70vh;
  @media (max-width: ${Breakpoints.mobile}) {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 90vh;
    margin: 3rem auto;
  }
`
export const StyledMainContainer = styled.div`
  display: flex;
  @media (max-width: ${Breakpoints.mobile}) {
    flex-grow: 1;
  }
`
