import { Color, Breakpoints } from '../../styles/config'
import styled from "styled-components";


export const StyledModal = styled.div`
  z-index: 3;
  position: absolute;
  top: -1.5rem;
  right:0;
  font-size: 0.8rem;
  border: 1px solid ${Color.white};
  width: 11.26667rem;
  height: 17.53333rem;
  background-color: ${Color.dark_1};

  @media (max-width: ${Breakpoints.mobile}){
    position: fixed;
    margin: 0 auto;
    top: 13rem;
    left: 0;
  }
  p{
    padding: 0.4rem;
  }
  .top{
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    padding: 0.4rem;
    width: 80%;
    background: transparent;
    border: none;
    color: ${Color.pink_2};
    font-weight: 400;
  }
  .close {
    cursor: pointer;
    border-radius: 50%;
    background-color: ${Color.pink_2};
    width: 1.06667rem;
    height: 1.11767rem;
    text-align: center;
    font-size: .8rem;
    font-weight: 700;
    padding: 0;
    margin-right: .4rem;
    color: ${Color.dark_1};
  }
  .section:not(:last-child) {
    border-bottom: 1px solid ${Color.white};
  }
  .section:not(:first-child) {
    margin: 0.4rem 0;
  }
  button {
    background: transparent;
    color: ${Color.white};
    border: none;
    padding: 0.4rem;
    text-align: start;
  }

  .selected {
    img {
      border: 1px solid ${Color.white}
    }
  }
  .priority__flag--2 {
    img {
      filter: invert(76%) sepia(96%) saturate(535%) hue-rotate(26deg) brightness(100%) contrast(108%);
    }
  }
  .priority__flag--3 {
    img {
      filter: invert(82%) sepia(56%) saturate(3439%) hue-rotate(131deg) brightness(102%) contrast(101%);
    }
  }
  .priority__flag--4 {
    img {
      filter: invert(73%) sepia(24%) saturate(7500%) hue-rotate(294deg) brightness(97%) contrast(93%);
    }
  }
  .priority__flag--5 {
    img {
      filter: invert(10%) sepia(13%) saturate(835%) hue-rotate(201deg) brightness(95%) contrast(93%);
    }
  }

  .bottom, .move {
    display: flex;
    flex-direction: column;
  }

  .delete {
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    color: ${Color.red};
  }
`
