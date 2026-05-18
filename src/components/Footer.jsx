import telegram from '../assets/img/telegram.png'
import instagram from '../assets/img/instagram.png'
import vk from '../assets/img/vk.png'
import { useTranslation } from "react-i18next";

export default function Footer() {

  const {t} = useTranslation()

  return (
    <>

      <div className='footer container'>
        <h2 className='footer__title'>{t('contacts')}</h2>
        <div className="footer__inner">
          <div className="footer__contacts">
            <h3 className='footer__name'>{t('email')}</h3>
            <a href="mailto:asadbekyusufov90@gmail.com"><p className="footer__desc">asadbekyusufov90@gmail.com</p></a>
            <h3 className='footer__name'>{t('phone')}</h3>
            <a href="https://wa.me/998992286405"><p className="footer__desc">+998(99)228-64-05</p></a>
          </div>
          <div className="footer__social">
            <h3 className='footer__social_title'>{t('socials')}</h3>
            <div className="footer__social_img">
              <a href="https://t.me/MistorMortik"><img width={50} src={telegram} alt="telegram" /></a>
              <a href="https://instagram.com/yusufovicch"><img width={50} src={instagram} alt="instagram" /></a>
              <a href="https://vk.com/yusufovasadbek"><img width={50} src={vk} alt="vk" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
