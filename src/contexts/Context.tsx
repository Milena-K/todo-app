import { type FC, createContext, useState } from "react";
import { type ITodo } from 'components/Todo';


type Props = {
  children: React.ReactNode
}
type ContextType = {
  todos: ITodo[]
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

export const Context = createContext<ContextType>({
  todos: [],
  setTodos: () => {},
})

const TodoContext: FC<Props> = ({ children }) => {
  const initialTodo: ITodo = {
    id: '1',
    title: 'Go to the Zoo',
    description: 'to visit the lion and the zebra',
    priority: 1,
    position: 0,
    openModal: false,
    showDescription: true
  }
  const [todos, setTodos] = useState<ITodo[]>([initialTodo])
  const value = {
    todos,
    setTodos,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )

}

export default TodoContext
