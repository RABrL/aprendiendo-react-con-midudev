import Link from '../components/Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina para aprender sobre react router </p>
      <Link to='/about'>Ir al about me</Link>
    </>
  )
}
