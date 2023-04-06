import './Products.css'
import { AddToCartIcon } from '../Icons'
import { products } from '../../mocks/products.json'

export default function Products () {
  return (
    <main className='products'>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.description}
            />
            <div>
              <h3>{product.title}</h3> - <span>${product.price}</span>
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>

    </main>
  )
}
