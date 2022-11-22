import './review.scss';

export default function Review() {
    return(
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
    )
}