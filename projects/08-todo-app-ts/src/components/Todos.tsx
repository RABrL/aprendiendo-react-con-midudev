import { useState } from 'react'
import { Todo } from './Todo'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import useTodos from '../hooks/useTodos'

export const Todos: React.FC = () => {
  const [isEditing, setIsEditing] = useState('')
  const { todos } = useTodos()
  const [parent] = useAutoAnimate()

  return (
    <ul className='todo-list' ref={parent}>
      {
        todos.map(todo => (
          <li
            key={todo.id}
            onDoubleClick={() => { setIsEditing(todo.id) }}
            className={`
              ${todo.completed ? 'completed' : ''}
              ${isEditing === todo.id ? 'editing' : ''}
            `}
          >
            <Todo
              key={todo.id}
              id={todo.id}
              setIsEditing={setIsEditing}
              title={todo.title}
              completed={todo.completed}
            />
          </li>
        ))
      }
    </ul>
  )
}
