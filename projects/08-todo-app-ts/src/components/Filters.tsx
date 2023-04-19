import { FOOTER_FILTERS_BUTTONS } from '../consts'
import useFilters from '../hooks/useFilters'
import { type FilterValue } from '../types.d'

export const Filters = (): JSX.Element => {
  const { filter, changeFilter } = useFilters()

  return (
    <ul className='filters'>
      {
        Object.entries(FOOTER_FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filter
          const className = isSelected ? 'selected' : ''
          return (
            <li key={key}>
              <a
                href={href}
                className={className}
                onClick={(event) => {
                  event.preventDefault()
                  changeFilter(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
