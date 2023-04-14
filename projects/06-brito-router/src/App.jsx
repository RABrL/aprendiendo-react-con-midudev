import { lazy, Suspense } from 'react'

import './App.css'

import Router from './Router'
import Route from './Route'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const AboutPage = lazy(() => import('./pages/About.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))

const appRoutes = [
  {
    path: '/search/:query',
    component: SearchPage
  },
  {
    path: '/:lang/about',
    component: AboutPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes}>
          <Route path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
