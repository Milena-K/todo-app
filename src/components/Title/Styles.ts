import { Color, Breakpoints } from '../../styles/config'
import styled from 'styled-components'

export const StyledTitle = styled.h2.attrs(props =>
  ({
    className: props.className
  }))<{ $marginTop: string, $marginBottom: string }>`

  font-weight: 700;
  font-size: 1.3rem;
  display: inline-block;
  line-height: 2rem; /* 136.364% */
  margin-bottom: ${(props) => props.$marginBottom};
  margin-top: ${(props) => props.$marginTop};


  &.mobile{
  display: none;
    @media (max-width: ${Breakpoints.mobile}) {
      line-height: normal;
      font-weight: 700;
      font-size: 1.3rem;
      display: inline-block;
      margin-bottom: ${(props) => props.$marginBottom};
      margin-top: ${(props) => props.$marginTop};
    }
  }

  &.your-tasks {
    @media (max-width: ${Breakpoints.mobile}) {
      line-height: normal;
      color: ${Color.white};
      font-size: 0.93rem;
      font-weight: 400;
      letter-spacing: 0.14rem;
      margin-bottom: ${(props) => props.$marginBottom};
      margin-top: ${(props) => props.$marginTop};
    }
  }
`

// margin-bottom: 1.5rem;
