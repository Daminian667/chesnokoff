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
              <input id="name" type="text" name="name"></input>
              <input id="email" type="email" name="email"></input>
              <input id="phone" type="phone" name="phone"></input>
              <input id="adress" type="text" name="adress"></input>
              <input id="data" type="data" name="data"></input>
              <input id="time" type="time" name="time"></input>
              <input id="event" type="text" name="event"></input>
              <input id="number_of_gests" type="text" name="number_of_gests"></input>
              <button className='form__button' type='submit'>отправить</button>
            </form>
          </div>
      </main>
    </div>
  );
}

export default App;
