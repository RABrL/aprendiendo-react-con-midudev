import { createContext, useState } from 'react'
import { TODO_FILTERS } from '../consts'
import { type FilterValue, type FilterContent } from '../types'

export const FilterContext = createContext<FilterContent>({
  filter: TODO_FILTERS.ALL,
  setFilter: () => {}
})

export default function FilterProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  const [filter, setFilter] = useState<FilterValue>(TODO_FILTERS.ALL)

  return (
    <FilterContext.Provider value={{
      filter,
      setFilter
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}
