import { useContext, type FC, useCallback } from "react"
import { StyledModal } from "./Styled"
import { type ITodo } from "components/Todo"
import { v4 as uuidv4 } from 'uuid'
import Flag from "../../assets/ph_flag-light.svg"
import { Context } from "contexts/Context"

type Props = {
  style: React.CSSProperties
  todo: ITodo
}

const Modal: FC<Props> = ({ todo, style }) => {
  const { todos, setTodos } = useContext(Context)

  const changePriority = (priority: number): void => {
    const newTodos = todos.map(item => {
      if (item.id === todo.id) {
        item.priority = priority
      }
      return item
    })
    setTodos(newTodos)
  }

  const handleModal = (): void => {
    const newTodos = todos.map(item => {
      if (item.id === todo.id) {
        item.openModal = !todo.openModal
      }
      return item
    })
    setTodos(newTodos)
  }

  const handleDescription = (): void => {
    const newTodos = todos.map(item => {
      if (item.id === todo.id) {
        item.showDescription = !todo.showDescription
      }
      return item
    })
    setTodos(newTodos)
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
      setTodos(newTodos)
    }
  }

    const generateFlags = useCallback(() => {
      const flags = []
      let className
      for(let i=1; i<6; i++) {
        className = `priority__flag--${i}`
        if(todo.priority === i) {
          className = `selected priority__flag--${i}`
        }
        const flag = (
          <button key={i} className={className} onClick={() => {changePriority(i)}}>
            <img alt="flag" src={Flag} />
          </button>
        )
        flags.push(flag);
      }
      return flags;
    }, [])

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTodos = todos.map(item => {
      if(item.id === todo.id) {
        item.title = e.currentTarget.value
      }
      return item
    })
    setTodos(newTodos)
  }

  const handleDuplicate = (): void => {
    const newTodo = { ...todo }
    newTodo.id = uuidv4()
    newTodo.openModal = false
    newTodo.position = todos.length - 1
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const handleDelete = (): void => {
    const newTodos = todos.filter(item => item.id !== todo.id).map((item) => {
      if(item.position > todo.position){
        item.position -= 1
      }
      return item
    })
    setTodos([ ...newTodos ])
  }

  return (
    <StyledModal>
      <div className="section top">
        <input className="title" value={todo.title} onChange={(e) => { changeTitle(e) }} placeholder="Title" />
        <button className="close" onClick={handleModal}>x</button>
      </div>

      <div className="section priority">
        <p className="priority__title">Priority</p>
        <div className="priority__flags">
          {
            generateFlags()
          }
        </div>
      </div>
      <div className="section move">
        <button className="move__up" onClick={() => {moveUp(todo)}}>Move up</button>
        <button className="move__down" onClick={() => {moveDown(todo)}}>Move down</button>
      </div>
      <div className="section bottom">
        <div>
          <button className="description" onClick={handleDescription}>Show/hide description</button>
          <button className="duplicate" onClick={handleDuplicate}>Duplicate</button>
        </div>
              <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </StyledModal>
  )
}

export default Modal
