import Link from '../components/Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>Upss, This is NOT fine..</h1>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='This is fine Dog on fire' />
      </div>
      <Link to='/'>Volver a la Home</Link>
    </>
  )
}
