import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Router from './Router.jsx'
import Route from './Route.jsx'
import Link from './components/Link.jsx'
import { getCurrentPath } from './utils.js'

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
  })
  it('Should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('Should render the default page if no route matches', () => {
    render(<Router routes={[]} defaultPage={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first matching route', () => {
    getCurrentPath.mockReturnValue('/about')
    const routes = [
      {
        path: '/',
        component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router routes={[]}>
        <Route
          path='/' component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' component={() => <h1>About</h1>} />
      </Router>
    )
    console.log(screen.debug())
    // Click on the link
    fireEvent.click(screen.getByText(/Go to About/))

    console.log(screen.debug())

    // check that the new route is rendered
    expect(await screen.findByText('About')).toBeTruthy()
  })
})
