import { useId, useRef, useState } from 'react'
import { type Todo as TodoType } from '../types.d'
import useTodos from '../hooks/useTodos'

interface Props extends TodoType {
  setIsEditing: (id: string) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  setIsEditing
}) => {
  const { context: { toggleStateTodo, editTodo, removeTodo } } = useTodos()
  const [editedTitle, setEditedTitle] = useState(title)
  const inputEditTitle = useRef<HTMLInputElement>(null)
  const todoInputId = useId()

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    toggleStateTodo({ id, completed: event.target.checked })
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      setEditedTitle(editedTitle.trim())

      if (editedTitle !== title) editTodo({ id, title: editedTitle })
      if (editedTitle === '') removeTodo({ id })

      setIsEditing('')
    }

    if (e.key === 'Escape') {
      setEditedTitle(title)
      setIsEditing('')
    }
  }

  return (
    <>
      <div className='view'>
        <input
          type='checkbox'
          id={todoInputId}
          className='toggle'
          checked={completed}
          onChange={handleChangeCheckbox}
        />
        <label htmlFor={todoInputId}>{title}</label>
        <button
          className='destroy'
          onClick={() => { removeTodo({ id }) }}
        />
      </div>
      <input
        className='edit'
        value={editedTitle}
        onChange={(e) => { setEditedTitle(e.target.value) }}
        onKeyDown={handleKeyDown}
        onBlur={() => { setIsEditing('') }}
        ref={inputEditTitle}
      />
    </>
  )
}
