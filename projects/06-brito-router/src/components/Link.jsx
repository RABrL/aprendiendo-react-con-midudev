import { EVENTS } from '../consts'

function navigate (href) {
  window.history.pushState({}, '', href)
  // crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export default function Link ({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === 0 // 0 es el boton izquierdo del mouse
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isManageableEvent && isMainEvent && !isModifiedEvent) {
      e.preventDefault()
      navigate(to)
    }
  }
  return (
    <>
      <a onClick={handleClick} href={to} target={target} {...props} />
    </>
  )
}
