import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'





export default function Portfolio() {
  
  const portfolio = [
  {
    title: "about",
    url: '/about', link: "go",
  },
  {
    title: "myProjects",
    url: '/projects', link: "go",
  }
]

const {t} = useTranslation() 


  return (
    <div className="portfolio">
      {portfolio.map((item, index) => (
        <div className="portfolio__card" key={index}>
          <h2 className='portfolio__card_title'>{t(item.title).toUpperCase()}</h2>
          <Link className='portfolio__card_link' to={item.url} >{t(item.link)}</Link>
        </div>
      ))}
    </div>
  )
}
