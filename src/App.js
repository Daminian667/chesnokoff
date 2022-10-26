import Header from './components/header/header';
import './header.scss';
import mainbg from './images/main_bg.jpg';
import img1 from './images/stock1.png';
import img2 from './images/stock2.png';
import img3 from './images/stock3.png';
import img4 from './images/quality.svg';
import img5 from './images/service.svg';
import img6 from './images/team.svg';
import img7 from './images/equip.svg';
import src1 from './images/Rectangle 85.jpg';
import src2 from './images/Rectangle 88.jpg';
import src3 from './images/Rectangle 86.jpg';
import src4 from './images/Rectangle 89.jpg';
import src5 from './images/Rectangle 117.jpg';
import src6 from './images/Rectangle 118.jpg';
import src7 from './images/Rectangle 119.jpg';
import src8 from './images/Rectangle 121.jpg';
import src9 from './images/Rectangle 120.jpg';
import src10 from './images/Rectangle 122.jpg';
import src11 from './images/Rectangle 123.jpg';
import logo from './images/logo__footer.svg';
function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <div className='container__blur container'></div>
        <div className='container__rectangle'></div>
          <div className='container catering'>
            <img className='container__bg' alt='image' src={mainbg}></img>
            <h2 className='container__title'>КЕЙТЕРИНГ</h2>
            <p className='container__discription'>для ваших мероприятий на высшем уровне</p>
            <button className='container__button'><p>получить предложение в Whats App</p></button>
          </div>
          <div className='stocksList container'>
            <div className='stock'>
              <img src={img1} className='stock__img'></img>
              <div className='stock__container'>
                  <h4 className='stock__name'>кофе брейк</h4>
              </div>
            </div>
            <div className='stock'>
            <img src={img2} className='stock__img'></img>
              <div className='stock__container'>
                  <h4 className='stock__name'>АКЦИЯ “НОВЫЙ ГОД”</h4>
              </div>
            </div>
            <div className='stock'>
            <img src={img3} className='stock__img'></img>
              <div className='stock__container'>
                  <h4 className='stock__name'>ОБСЛУЖИВАНИЕ ВЫСТАВКИ</h4>
              </div>
            </div>
          </div>
          <div className='about'>
            <div className='about__container container'>
              <div className='advantages'>
                <div className='advantages__container'>
                  <img className='advantages__img' src={img4}></img>
                  <h4 className='advantages__name'>КАЧЕСТВО</h4>
                  <p className='advantages__text'>Только свежие и вкусные продукты собственного производства без использования полуфабрикатов</p>
                </div>
              </div>
              <div className='advantages'>
                  <div className='advantages__container'>
                  <img className='advantages__img' src={img6}></img>
                  <h4 className='advantages__name'>КОМАНДА</h4>
                  <p className='advantages__text'>Команда профессионалов. Повара, официанты,  менеджеры проектов и руководители с большим стажем</p>
                </div>
              </div>
              <div className='advantages'>
                <div className='advantages__container'>
                  <img className='advantages__img' src={img7}></img>
                  <h4 className='advantages__name'>ОБОРУДОВАНИЕ</h4>
                  <p className='advantages__text'>Современное оборудование и высокие технологии производства</p>
                </div>
              </div>
              <div className='advantages'>
                <div className='advantages__container'>
                  <img className='advantages__img' src={img5}></img>
                  <h4 className='advantages__name'>ОБСЛУЖИВАНИЕ</h4>
                  <p className='advantages__text'>Высокий уровень сервиса, сервировка столов и стильное оформление.</p>
                </div>
              </div>
              <div className='abbout__description'>
                <h3 className='about__title'>Chesnokoff кейтеринг это что-то на вкусном</h3>
                <p className='about__text'>Мы готовим для вас лучшее без использования полуфабрикатов. Все блюда создаются руками наших поваров: мы сами печём булочки для бургеров, засаливаем рыбу, смешиваем маринады и соусы. Благодаря стремлению к совершенству, мы постоянно ищем новые вкусовые сочетания, интересные варианты подачи блюд. Неизменным остаётся только строгая приверженность к свежайшим продуктам.</p>
                <p className='about__text'>Наша команда уделяет внимание каждой детали. Все заботы о приготовлении, доставке и сервировке блюд мы берём на себя! Вам остаётся только наслаждаться мероприятием.
                </p>
              </div>
              
            </div>
          </div>
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
          <div className='galery'>
            <p className='galery__title container'>Галерея блюд</p>
            <div className='galery__grid'>
              <img src={src1} className='grid__item a'></img>
              <img src={src2} className='grid__item b'></img>
              <img src={src3} className='grid__item c'></img>
              <img src={src4} className='grid__item d'></img>
              <img src={src5} className='grid__item e'></img>
              <img src={src6} className='grid__item f'></img>
              <img src={src8} className='grid__item h'></img>
              <img src={src9} className='grid__item i'></img>
              <img src={src10} className='grid__item j'></img>
              <img src={src11} className='grid__item k'></img>
              <img src={src7} className='grid__item g'></img>
            </div>
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
