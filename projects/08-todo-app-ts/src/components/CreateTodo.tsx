import { useState } from 'react'
import useTodos from '../hooks/useTodos'

export const CreateTodo: React.FC = () => {
  const { context: { addTodo } } = useTodos()

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    addTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        placeholder='¿Qué quieres hacer?'
        autoFocus
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value) }}
      />
    </form>
  )
}
