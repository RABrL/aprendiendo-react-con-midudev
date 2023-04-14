import Link from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre mi',
    description: 'Hola estoy copiando todo del video de midudev',
    link: 'Ir a la home'
  },
  en: {
    title: 'About me',
    description: 'Hi, I\'m copying everything from midudev\'s video',
    link: 'Go to home'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.es
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang)
  const { title, description, link } = i18n
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to='/'>{link}</Link>
    </>
  )
}
