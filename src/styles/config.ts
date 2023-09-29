import { createGlobalStyle } from 'styled-components'

export enum Breakpoints {
  mobile = '750px'
}

type PriorityColorsType = {
  [key: number]: Color;
}

export enum Color {
  white = '#F9F9F9',
  grey = '#C4C4C4',
  red = '#DC0000',
  p1 = '#FF0000',
  p2 = '#9EFF00',
  p3 = '#00F0FF',
  p4 = '#EE69AC',
  p5 = '#1E1E26',
  pink_1 = '#CB4BCF',
  pink_2 = '#EE69AC',
  pink_3 = '#F29682',
  dark_1 = '#1E1E26',
  dark_2 = '#1A1A21',
  dark_3 = '#16161C',
}

export const PriorityColor: PriorityColorsType = {
  1: Color.p1,
  2: Color.p2,
  3: Color.p3,
  4: Color.p4,
  5: Color.p5,
}


const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: inherit;
  }
  #root{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
  body {
    background-color: ${Color.dark_1};
    font-weight: 400;
    color: ${Color.white};
  }
  html {
    box-sizing: border-box;
    font-size: 93.75%; // 15px/16px = 93.75%
  }
`

export default GlobalStyle
