import { useId } from 'react'
import './Filters.css'
import useFilters from '../../hooks/useFilters'

export default function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPriceFilterId}>Precio desde: </label>
        <input
          type='range'
          id={minPriceFilterId}
          value={filters.minPrice}
          min='0'
          max='2000'
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria: </label>
        <select name='categoria' id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todo</option>
          <option value='smartphones'>Celulares</option>
          <option value='laptops'>Portatiles</option>
        </select>
      </div>

    </section>
  )
}
