import { TODO_ACTIONS } from '../consts'
import { type TodoValue, type Todo } from '../types.d'

interface TodoAction {
  type: TodoValue
  payload: any
}

export const initialState = [
  {
    id: '1',
    title: 'Ver el twitch de midu',
    completed: true
  }
]

const UPDATE_TODO_BY_ACTION: Record<string, (state: Todo[], action: TodoAction) => Todo[]> = {
  [TODO_ACTIONS.ADD_TODO]: (state, action) => {
    const { title } = action.payload
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }

    const newTodos = [...state, newTodo]
    return newTodos
  },
  [TODO_ACTIONS.TOGGLE_TODO]: (state, action) => {
    const { id, completed } = action.payload
    const newTodos = state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    return newTodos
  },
  [TODO_ACTIONS.DELETE_TODO]: (state, action) => {
    const { id } = action.payload
    const newTodos = state.filter(todo => todo.id !== id)
    return newTodos
  },
  [TODO_ACTIONS.EDIT_TODO]: (state, action) => {
    const { id, title } = action.payload
    const newTodos = state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          title
        }
      }
      return todo
    })
    return newTodos
  },
  [TODO_ACTIONS.CLEAR_COMPLETED]: (state) => state.filter(todo => !todo.completed)
}

export function todoReducer (state: Todo[], action: TodoAction): Todo[] {
  const actionType = action.type
  const updateState = UPDATE_TODO_BY_ACTION[actionType]
  return updateState(state, action)
}
