import useTodos from '../hooks/useTodos'
import { Filters } from './Filters'

export const Footer: React.FC = () => {
  const {
    context: { removeAllCompletedTodos },
    completedCount = 0,
    pendingCount = 0
  } = useTodos()

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{pendingCount}</strong> {pendingCount === 1 ? 'Tarea pendiente' : 'Tareas pendientes'}
      </span>

      <Filters />

      {completedCount > 0 && (
        <button
          className='clear-completed'
          onClick={removeAllCompletedTodos}
        >
          Borrar completados
        </button>
      )}
    </footer>
  )
}
