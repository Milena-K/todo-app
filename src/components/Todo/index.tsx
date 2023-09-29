import { StyledTodo } from './Styles'
import Up from '../../assets/raphael_arrowup.svg'
import Down from '../../assets/raphael_arrowdown.svg'
import Settings from '../../assets/ant-design_ellipsis-outlined.svg'
import React, { type FC, useContext } from 'react'
import { Context } from 'contexts/Context'
import Modal from 'components/Modal'
import { PriorityColor } from 'styles/config'

export interface ITodo {
    id: string
    title: string
    description: string
    priority: number
    position: number
    openModal: boolean
    showDescription: boolean
}

type TodoProps = {
  todo: ITodo
  moveUp: (e:React.MouseEvent<HTMLDivElement>) => void
  moveDown: (e:React.MouseEvent<HTMLDivElement>) => void
}

const Todo: FC<TodoProps> = ({ todo, moveUp, moveDown }) => {
  const { todos, setTodos } = useContext(Context)

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTodos = todos.map(item => {
      if(item.id === todo.id) {
        item.title = e.currentTarget.value
      }
      return item
    })
    setTodos(newTodos)
  }

  const changeDesc = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newTodos = todos.map(item => {
      if(item.id === todo.id) {
        item.description = e.currentTarget.value
      }
      return item
    })
    setTodos(newTodos)
  }

  const handleModal = (): void => {
    const newTodos = todos.map(item => {
      if(item.id === todo.id) {
        item.openModal = !todo.openModal
      }
      return item
    })
    setTodos(newTodos)
  }

  return <StyledTodo priority={PriorityColor[todo.priority]}>
    <div className='left'>
  <input className='todo__title' placeholder='Title' value={todo.title} onChange={(e) => {changeTitle(e)}} />
        {
          todo.showDescription && <input className='todo__desc' placeholder='Description' value={todo.description} onChange={changeDesc} />
        }
    </div>
    <div className='right'>
        <div className='arrows'>
            <div className='up' style={{cursor: todo.position === 0 ? "not-allowed" : "pointer"}} onClick={moveUp}>
                <img src={Up} alt='arrow up' />
            </div>
            <div className='down' style={{cursor: todo.position === (todos.length-1) ? "not-allowed" : "pointer"}} onClick={moveDown}>
                <img src={Down} alt='arrow down' />
            </div>
        </div>
          <div className='settings' onClick={handleModal}>
          <img src={Settings} alt='three dots' />
        </div>
    </div>
    { todo.openModal && (
        <>
          <Modal todo={todo} style={{display: "block"}}/>
          <div className="overlay"/>
        </>
    )}

  </StyledTodo>
}

export default Todo
