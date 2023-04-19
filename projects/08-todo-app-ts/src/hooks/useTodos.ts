import { useContext } from 'react'
import { type Todo as TodoType, type TodosContent } from '../types'
import { TODO_FILTERS } from '../consts'
import { TodosContext } from '../context/todos'
import useFilters from './useFilters'

interface ReturnTypes {
  todos: TodoType[]
  context: TodosContent
  pendingCount: number
  completedCount: number
}

export default function useTodos (): ReturnTypes {
  const context = useContext(TodosContext)
  const todos = context.todos
  const { filter } = useFilters()

  // Modo midudev
  const filteredTodos = todos.filter(todo => {
    if (filter === TODO_FILTERS.PENDING) return !todo.completed
    if (filter === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const pendingCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length
  return {
    todos: filteredTodos,
    context,
    pendingCount,
    completedCount
  }
}
