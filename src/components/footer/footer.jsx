import './footer.scss';
import location from '../../images/location.svg';
import call from '../../images/call.svg';
import logo from '../../images/logo__footer.svg';

export default function Footer() {
    return(
        <footer className='footer'>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A887144325e5d6a584a9272bdb9d7cb1ba8b37d878f169c52eb785f7a069163ac&amp;source=constructor" width="100%" height="714" frameborder="0" className='footer__map'></iframe>
        <div className='footer__overlay'>
            <div className='footer__overlay_container'>
                <p className='footer__subtitle'>
                Звоните и Пишите
                </p>
                <div className='footer__overlay_contacts'>
                    <img src={location} alt=''></img>
                    <p className='footer__text'>Самокатная улица, 4с13</p>
                </div>
                <div className='footer__overlay_contacts'>
                    <img src={call} alt=''></img>
                    <p className='footer__text'>+7 903 700-49-54</p>
                </div>
                <button className='footer__button'>WHATS APP</button>
                <button className='footer__button'>TELEGRAM</button>
            </div>
        </div>
        <div className='footer__container container'>
          <img className='footer__logo' src={logo}></img>
          <nav className='footer__nav'>
            <p className='footer__nav_title'>МЕНЮ</p>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link'>ФУРШЕТ</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>БАНКЕТ</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>ДОСТАВКА</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>ДЛЯ ДЕТЕЙ</a>
              </li>
            </ul>
          </nav>
          <nav className='footer__nav'>
            <p className='footer__nav_title'>CHESNOKOFF</p>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link'>О НАС</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>КЕЙТЕРИНГ</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>ПЛОЩАДКИ</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>НАШИ УСЛУГИ</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>ОТЗЫВЫ</a>
              </li>
            </ul>
          </nav>
        </div>
        <p className='footer__slogan'>-Еда должна быть простой</p>
      </footer>
    )
}