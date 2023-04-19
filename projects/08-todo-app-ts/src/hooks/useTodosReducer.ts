import { useReducer } from 'react'
import { todoReducer, initialState } from '../reducers/todos'
import { type TodosContent, type TodoId, type TodoTitle, type Todo } from '../types'
import { TODO_ACTIONS } from '../consts'

export default function useTodosReducer (): TodosContent {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo = ({ title }: TodoTitle): void => {
    dispatch({
      type: TODO_ACTIONS.ADD_TODO,
      payload: {
        title
      }
    })
  }

  const removeTodo = ({ id }: TodoId): void => {
    dispatch({
      type: TODO_ACTIONS.DELETE_TODO,
      payload: {
        id
      }
    })
  }

  const editTodo = ({ id, title }: Pick<Todo, 'id' | 'title'>): void => {
    dispatch({
      type: TODO_ACTIONS.EDIT_TODO,
      payload: {
        id,
        title
      }
    })
  }

  const toggleStateTodo = ({ id, completed }: Pick<Todo, 'id' | 'completed'>): void => {
    dispatch({
      type: TODO_ACTIONS.TOGGLE_TODO,
      payload: {
        id,
        completed
      }
    })
  }

  const removeAllCompletedTodos = (): void => {
    dispatch({
      type: TODO_ACTIONS.CLEAR_COMPLETED,
      payload: {}
    })
  }

  return {
    todos: state,
    addTodo,
    removeTodo,
    editTodo,
    toggleStateTodo,
    removeAllCompletedTodos
  }
}
