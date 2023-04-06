import { useContext } from 'react'
import { FilterContext } from '../context/filters.jsx'

export default function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    products.sort((a, b) => a.price - b.price)
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' || product.category === filters.category
        )
      )
    })
  }
  return {
    filters,
    setFilters,
    filterProducts
  }
}
