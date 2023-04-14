import { useState, useEffect, Children } from 'react'
import Page404 from './pages/Page404'
import { EVENTS } from './consts'
import { match } from 'path-to-regexp'
import { getCurrentPath } from './utils'

export default function Router ({ children, routes, defaultPage: DefaultPage = Page404 }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSH, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  // add routes from children <Route/> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)
  console.log(currentPath)
  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // Hemos usado path-to-regexp
    // para poder detectar rutas dinamicas como por ejemplo
    // /search/:query <- :query es una ruta dinamica
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // guardar los parametros de la url que eran dinamicos
    // y que hemos extraido con path-to-regexp
    // por ejemplo, si la ruta es /search/:query
    // y la url es /search/javascript
    // matched.params.query === 'javascript'
    routeParams = matched.params
    return true
  })?.component

  return Page ? <Page routeParams={routeParams} /> : <DefaultPage routeParams={routeParams} />
}
