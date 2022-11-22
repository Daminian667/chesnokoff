import './feedback.scss';

export default function Feedback() {
    return(
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
    )
}