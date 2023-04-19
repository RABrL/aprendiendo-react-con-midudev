import { type TODO_FILTERS, type TODO_ACTIONS } from './consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export interface FilterContent {
  filter: FilterValue
  setFilter: (filter: FilterValue) => void
}

export interface TodosContent {
  todos: Todo[]
  addTodo: ({ title }: TodoTitle) => void
  removeTodo: ({ id }: TodoId) => void
  editTodo: ({ id, title }: Pick<Todo, 'id' | 'title'>) => void
  toggleStateTodo: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
  removeAllCompletedTodos: () => void
}

export type TodoValue = typeof TODO_ACTIONS[keyof typeof TODO_ACTIONS]
