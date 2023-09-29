import Todo, { type ITodo } from 'components/Todo'
import Title from 'components/Title'
import { StyledRight } from './Styles'
import Add from '../../assets/Group 6.svg'
import { type FC, useContext } from 'react'
import { Context } from 'contexts/Context'
import { v4 as uuidv4 } from 'uuid'

const RightSide: FC = () => {
  const {todos, setTodos} = useContext(Context)

  const addTodo = (): void => {
    const emptyTodo: ITodo = {
      id: uuidv4(),
      title: '',
      description: '',
      priority: 5,
      position: todos.length,
      openModal: false,
      showDescription: true
    }
    setTodos([...todos, emptyTodo])
  }

  const moveUp = (todo: ITodo): void => {
    const index = todo.position
    if(index !== 0) {
      const newTodos = [...todos]
      // swap todos
      const temp = newTodos[index]
      newTodos[index] = newTodos[index-1]
      newTodos[index-1] = temp
      // change position value
      newTodos[index].position += 1
      newTodos[index-1].position -= 1
      setTodos(newTodos)
    }
  }

  const moveDown = (todo: ITodo): void => {
    const index = todo.position
    if(index !== (todos.length - 1)) {
      const newTodos = [...todos]
      // swap todos
      const temp = newTodos[index]
      newTodos[index] = newTodos[index+1]
      newTodos[index+1] = temp
      // change position value
      newTodos[index].position -= 1
      newTodos[index+1].position += 1
      // save in a new array
      setTodos(newTodos)
    }
  }

  return <StyledRight>
      <div className='top-part'>
        <Title className='mobile' title='This is your to do list!' marginBottom='1.5rem' />
        <Title className='your-tasks' title='Your tasks' />
        <button className='new-task' onClick={addTodo}>
          <img src={Add} alt="Add new task" />
        </button>
      </div>
      {
        todos.map((todo: ITodo) => (
          <Todo todo={todo} key={todo.id} moveUp={() => {moveUp(todo)}} moveDown={() => {moveDown(todo)}}/>
        ))
      }
    </StyledRight>
}

export default RightSide
