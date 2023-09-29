import { Color, Breakpoints } from '../../styles/config'
import styled from 'styled-components'

export const StyledTodo = styled.div<{priority: string}>`
  &:first-of-type .right .arrows .up {
    cursor: not-allowed;
  }
  &:last-of-type .right .arrows .down {
    cursor: not-allowed;
  }
  position: relative;
  margin-bottom: 1rem;
  border-radius: 0.26667rem;
  background: ${Color.dark_2};
  height: 4.8rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props: any) => props.priority};
  .left {
    min-width: 1rem;
    padding: 1rem;
    .todo__title {
      width: 100%;
      display: block;
      background: ${Color.dark_2};
      color: ${Color.pink_2};
      font-size: 0.93333rem;
      font-weight: 500;
      margin-bottom: .5rem;
      border: none;
    }
    .todo__desc {
      width: 100%;
      display: block;
      background: ${Color.dark_2};
      border: none;
      color: ${Color.white};
      font-size: 0.8rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .right {
    display: flex;
    align-items: center;

    .arrows {
      .up,
      .down {
        width: 2.13333rem;
        height: 2.06667rem;
      }
    }
    .settings {
      margin-left: 1.5rem;
    }
  }

  .overlay{
    display: none;
    @media (max-width: ${Breakpoints.mobile}){
      display: inline-block;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      background-color: rgba(0,0,0, .6);
      width: 100%;
      height: 100%;
    }
  }
`
