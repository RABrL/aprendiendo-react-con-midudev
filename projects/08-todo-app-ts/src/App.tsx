import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import TodosProvider from './context/todos'
import FilterProvider from './context/filters'

function App (): JSX.Element {
  return (
    <div className='todoapp'>
      <TodosProvider>
        <FilterProvider>
          <Header />
          <Todos />
          <Footer />
        </FilterProvider>
      </TodosProvider>
    </div>
  )
}

export default App
