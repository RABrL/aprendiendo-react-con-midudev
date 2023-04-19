import { useContext } from 'react'
import { FilterContext } from '../context/filters'
import { type FilterValue } from '../types'

interface ReturnTypes {
  filter: FilterValue
  changeFilter: (filter: FilterValue) => void
}

export default function useFilters (): ReturnTypes {
  const { filter, setFilter } = useContext(FilterContext)

  const changeFilter = (filter: FilterValue): void => {
    setFilter(filter)
  }

  return {
    filter,
    changeFilter
  }
}
