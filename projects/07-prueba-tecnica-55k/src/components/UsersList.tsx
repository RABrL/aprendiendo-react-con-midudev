import { SortBy, type User } from '../types.d'
import { TrashIcon } from './Icons'

interface Props {
  sortBy: (value: SortBy) => void
  deleteUser: (email: string) => void
  showColor: boolean
  users: User[]
}

export default function UsersList ({ sortBy, deleteUser, showColor, users }: Props) {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Foto</th>
          <th className='pointer' onClick={() => { sortBy(SortBy.NAME) }}>Nombre</th>
          <th className='pointer' onClick={() => { sortBy(SortBy.LAST) }}>Apellido</th>
          <th className='pointer' onClick={() => { sortBy(SortBy.COUNTRY) }}>País</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody className={showColor ? 'table--showcolor' : ''}>
        {users.map(user => (
          <tr key={user.email}>
            <td>
              <img src={user.picture.thumbnail} alt={`Picture of ${user.name.first}`} />
            </td>
            <td>
              {user.name.first}
            </td>
            <td>
              {user.name.last}
            </td>
            <td>
              {user.location.country}
            </td>
            <td>
              <button onClick={() => { deleteUser(user.email) }}><TrashIcon /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
