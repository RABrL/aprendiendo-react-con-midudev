import { createContext } from 'react'
import { type TodosContent } from '../types'
import useTodosReducer from '../hooks/useTodosReducer'

export const TodosContext = createContext<TodosContent>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  editTodo: () => {},
  toggleStateTodo: () => {},
  removeAllCompletedTodos: () => {}
})

export default function TodosProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  const {
    todos,
    addTodo,
    editTodo,
    removeTodo,
    toggleStateTodo,
    removeAllCompletedTodos
  } = useTodosReducer()

  return (
    <TodosContext.Provider value={{
      todos,
      addTodo,
      editTodo,
      removeTodo,
      toggleStateTodo,
      removeAllCompletedTodos
    }}
    >
      {children}
    </TodosContext.Provider>
  )
}
