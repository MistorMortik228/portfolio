import { useTranslation } from "react-i18next";



export default function Skills() {
  const info = [
  {
    title: 'HTML/CSS',
    desc: 'layout',
    percent: 85
  },

  {
    title: 'JavaScript',
    desc: 'logic',
    percent: 60
  },
  {
    title: 'React',
    desc: 'hooks',
    percent: 80
  },

  {
    title: 'UI',
    desc: 'adaptive',
    percent: 80
  }
]

const {t} = useTranslation() 


  return (
    <>
    <h1 className='skills__title'>{t('skills')}</h1>
    <div className="skills">
      {info.map((item, index) => (
        <div className="skills__card" key={index}>
          <h3 className='skills__card_title'>{item.title}</h3>
          <p className='skills__card_text'>{t(item.desc)}</p>

          <div className="skills__bar">
            <div className="skills__bar_fill" style={{ width: `${item.percent}%` }}></div>
            <span className='skills__bar_span'>{item.percent}%</span>
          </div>
        </div>
      ))}
    </div>
    </>
  )



}
