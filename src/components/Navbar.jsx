import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";




export default function Navbar({changeTheme, theme}) {

const navbar = [
  {
    url: '/', link: "home"
  },
  {
    url: '/projects', link: "projects"
  },
  {
    url: '/About', link: "about"
  }
]

const { i18n, t} = useTranslation()

const changeLang = () => {

  const current = i18n.language

  const newLang = 
  current === 'ru' ? 'en' :
  current === 'en' ? 'uz' :
  'ru'

  i18n.changeLanguage(newLang)
  localStorage.setItem('lang', newLang)
}


  return (

    <nav className="nav container">
      <button className="nav_theme" onClick={changeTheme} >{theme}</button>
      <button className="nav_lang" onClick={changeLang}>{i18n.language}</button>
      <h2 className="nav__title">{t('portfolio')}</h2>

      <ul className="nav__list">
        {navbar.map((item, index) => (
          <li className="nav__list_item" key={item.url}><Link to={item.url} >{t(item.link)}</Link></li>
        ))}
      </ul>

    </nav>
  )
}
