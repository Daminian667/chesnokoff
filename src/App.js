import './index.scss';
import Header from './components/header/header';
import Caitering from './components/caitering/caitering';
import StockList from './components/stockList/stockList';
import About from './components/about/about';

import logo from './images/logo__footer.svg';
function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <div className='container__blur container'></div>
        <div className='container__rectangle'></div>
        <Caitering />
        <StockList />
        <About />
          <div className='carousel container'></div>
          <div className='form'>
            <form className='form__container container'>
              <p className='form__title'>Ответьте на несколько вопросов и мы перезвоним вам с предложением</p>
              <input id="name" type="text" name="name" placeholder='ваше имя'></input>
              <input id="email" type="email" name="email" placeholder='ваш емейл'></input>
              <input id="phone" type="tel" name="phone" placeholder='телефон'></input>
              <input id="adress" type="text" name="adress" placeholder='адрес проведения'></input>
              <input id="data" type="date" name="data" placeholder='дата мероприятия'></input>
              <input id="time" type="time" name="time" placeholder='тайминг мероприятия'></input>
              <input id="event" type="text" name="event" placeholder='формат мероприятия'></input>
              <input id="number_of_gests" type="number" name="number_of_gests" placeholder='колличество гостей'></input>
              <button className='form__button' type='submit' onClick={(e) => { e.preventDefault(); console.log("click")}}>отправить</button>
            </form>
          </div>
          <div className='review container'>
              <div className='review__bg'>

              <h3 className='review__title'>Отзывы о компании Chesnokoff</h3>
              <div className='review__container'>
                <p className='review__text'> 
                  Отзывы о нашей компании настоящие и написаны нашими дорогими клиентами. 
                  Вы так же можете оставить отзыв о нас!
                </p>
                <button className='review__button'>НАПИСАТЬ ОТЗЫВ</button>
              </div>
            </div>
          </div>
          <div className='feedback container'>
            <p className='feedback__text'>
              Хотите что бы ваше мероприятие прошло безупречно
              и все ваши гости были сыты и довольны?
              </p>
            <p className='feedback__text'>
              Доверьте эту задачу Chesnokoff и мы гарантируем успех!
              Оставьте свои контакты и мы вам перезвоним с пердложением!
            </p>
            <div className='feedback__form'>
              <input className='feedback__input' id="name" type="text" name="name" placeholder='ваше имя'></input>
              <input className='feedback__input' id="email" type="email" name="email" placeholder='ваш емейл'></input>
              <input className='feedback__input' id="phone" type="tel" name="phone" placeholder='телефон'></input>
              <button className='feedback__button'>ОТПРАВИТЬ</button>
            </div>
          </div>
      </main>
      <footer className='footer'>
        <div className='footer__container container'>
          <img className='footer__logo' src={logo}></img>
          <nav className='footer__nav'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link'>СВАДЬБА</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>ВЫСТАВКА</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>НОВЫЙ ГОД</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>ДОСТАВКА</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>КЕЙТЕРИНГ</a>
              </li>
            </ul>
          </nav>
          <nav className='footer__nav'>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a className='footer__link'>КОМАНДА</a>
              </li>
              <li className='footer__item'>
                <a className='footer__link'>ПАРТНЕРАМ</a>
              </li>
            </ul>
          </nav>
          <div className='footer__contacts'>
            <p className='footer__adress'>
              Бульвар Космонавтов, д. 9
            </p>
            <p className='footer__phone'>
              +7 999 888 77 66
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
