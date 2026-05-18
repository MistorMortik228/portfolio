import Brutalism from '../assets/img/projects1.jpg'
import Clothing from '../assets/img/projects2.jpg'
import Porsche from '../assets/img/projects3.jpg'
import dBurger from '../assets/img/projects4.jpg'
import GridGlow from '../assets/img/projects5.jpg'
import Clock from '../assets/img/projects6.jpg'
import AimBallons from '../assets/img/projects7.jpg'
import todos from '../assets/img/projects8.jpg'
import { useTranslation } from "react-i18next";


const projectsCard = [
  { name: 'Brutalism', link: 'https://mistormortik228.github.io/Brutalism/', url: Brutalism },
  { name: 'Clothing', link: 'https://mistormortik228.github.io/Clothing/', url: Clothing },
  { name: 'Porsche', link: 'https://mistormortik228.github.io/Porsche/', url: Porsche },
  { name: 'dBurger', link: 'https://mistormortik228.github.io/dBurger/', url: dBurger },
  { name: 'GridGlow', link: 'https://mistormortik228.github.io/GridGlow/', url: GridGlow },
  { name: 'Clock', link: 'https://mistormortik228.github.io/Clock/', url: Clock },
  { name: 'AimBallons', link: 'https://mistormortik228.github.io/AimBallons/', url: AimBallons },
  { name: 'todos', link: 'https://mistormortik228.github.io/todos/', url: todos },
]

export default function Projects() {

  const { t } = useTranslation()

  return (
    <>
      <h2 className="projects__title">{t('myProjects')}</h2>
      <div className="projects container">

        {projectsCard.map((item, index) => (

          <a style={{ backgroundImage: `url(${item.url})` }} href={item.link} className="projects__link" key={index}><div className="projects__box">{item.name}</div></a>

        ))}
      </div>
    </>
  )
}
