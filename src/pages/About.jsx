import face from '../assets/img/face.jpg'
import { useTranslation } from "react-i18next";

const about = [
  { info: "name", desc: "asadbek" },
  { info: "surname", desc: "yusufov" },
  { info: "age", desc: "15" },
  { info: "city", desc: "tashkent" },
  { info: "profession", desc: "junior" },
  { info: "language", desc: "langs" },
]



export default function About() {

  const { t } = useTranslation()


  return (
    <div className="About container">
      <img width={280} height={380} src={face} alt="face" />
      <div className="About__content">
        {about.map((item, index) => (
          <div className="About__info" key={index}>
            <h3>{t(item.info)}</h3>
            <p>{t(item.desc)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
