import { CreateTodo } from './CreateTodo'

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1>
        Todo
        <img
          style={{ width: '60px', height: 'auto' }}
          src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
        />
      </h1>

      <CreateTodo />
    </header>
  )
}
