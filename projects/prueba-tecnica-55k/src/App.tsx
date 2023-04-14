import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { SortBy, type User } from './types.d'
import UsersList from './components/UsersList'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColor, setShowColor] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  const originalUsers = useRef<User[]>([])

  const toggleShowColor = () => {
    setShowColor(!showColor)
  }

  const toggleSortByCountry = () => {
    setSorting(prevState => prevState === SortBy.COUNTRY ? SortBy.NONE : SortBy.COUNTRY)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorting(prevState => prevState === sort ? SortBy.NONE : sort)
  }

  const handleDeleteUser = (email: string) => {
    const newUsers = users.filter(user => user.email !== email)
    setUsers(newUsers)
  }

  const handleRestoreUsers = () => {
    setUsers(originalUsers.current)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async res => await res.json())
      .then(data => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
      .catch(err => { console.log(err) })
  }, [])

  const filteredUsers = useMemo(() => {
    return filterCountry != null && filterCountry.length > 0
      ? users.filter(user => user.location.country.toLowerCase().includes(filterCountry.toLowerCase()))
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    const compareSort: Record<string, (user: User) => string> = {
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last,
      [SortBy.COUNTRY]: user => user.location.country
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareSort[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [filteredUsers, sorting])

  return (
    <div className='App'>
      <h1>Prueba tecnica</h1>
      <div className='body'>

        <header>
          <button onClick={toggleShowColor}>
            {showColor ? 'Ocultar color' : 'Colorear tabla'}
          </button>

          <button onClick={toggleSortByCountry}>
            {sorting === SortBy.COUNTRY ? 'No ordenar' : 'Ordenar por país'}
          </button>

          <button onClick={handleRestoreUsers}>
            Restaurar usuarios iniciales
          </button>

          <input
            placeholder='Filtrar por país'
            type='text'
            onChange={(e) => { setFilterCountry(e.target.value) }}
          />
        </header>

        <main>
          <UsersList
            sortBy={handleChangeSort}
            deleteUser={handleDeleteUser}
            showColor={showColor}
            users={sortedUsers}
          />
        </main>
      </div>
    </div>
  )
}

export default App
