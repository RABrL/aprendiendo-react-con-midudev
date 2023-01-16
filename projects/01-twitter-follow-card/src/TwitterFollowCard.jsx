import { useState } from "react" // se le llaman Hooks

export function TwitterFollowCard({children ,userName='unknow',initialIsFollowing}) {
 /*  const state = useState(false)//Valor inicial del estado
  const isFollowing = state[0] //Valor del estado
  const setIsFollowing = state[1] //Forma de actualizar el estado */

  //Esto es lo mismo de arriba 
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
  
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt={`Avatar de ${userName}`} />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-name">{children}{/*El children es cualquier cosa que se le pase como hijo de un elemento*/}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          <p className="tw-followCard-text">{text}</p>
          <p className="tw-followCard-stopFollow">Dejar de seguir</p>
        </button>
      </aside>
    </article>
  )
}