import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Dúran',
    isFollowing: false
  },
  {
    userName: 'RABrL',
    name: 'Robinson Brito Lizarazo',
    isFollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Pablo Hernandez',
    isFollowing: false
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: true
  },


]

export function App () {
  return (
    <section className='app'>
      {
        users.map(({userName,name,isFollowing}) => (
          <TwitterFollowCard 
            key={userName}
            userName={userName} 
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}