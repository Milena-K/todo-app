import { StyledApp, StyledMainContainer } from './styles/StyledApp'
import Header from './components/Header'
import GlobalStyle from './styles/config'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import TodoContext from 'contexts/Context'
import { type FC } from 'react'

const App: FC = () => {
  return <>
    <TodoContext>
    <GlobalStyle />
    <StyledApp>
      <Header />
      <StyledMainContainer>
        <LeftSide />
        <RightSide />
      </StyledMainContainer>
    </StyledApp>
    </TodoContext>
  </>
}

export default App
