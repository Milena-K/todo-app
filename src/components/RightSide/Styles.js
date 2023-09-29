import { Color, Breakpoints } from '../../styles/config'
import styled from 'styled-components'

export const StyledRight = styled.div`
  min-height: 60vh;
  position: relative;
  overflow-y: auto;
  padding: 2rem;
  flex-grow: 1;
  background-color: ${Color.dark_3};
  @media (max-width: ${Breakpoints.mobile}) {
    flex-grow: 1;
    padding: 1.4rem;
    padding-top: 0;
    border-radius: 0 0 1rem 1rem;
  }

  .top-part {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${Breakpoints.mobile}) {
      margin-bottom: 1rem;
      flex-direction: column;
      align-items: flex-start;
    }
    .new-task {
      z-index: 1;
      width: 2.73333rem;
      height: 2.73333rem;
      background-color: transparent;
      border-radius: 50%;
      border: none;
      @media (max-width: ${Breakpoints.mobile}) {
        position: absolute;
        bottom: 1.33rem;
        right: 1.33rem;
      }
    }

  }

`
