import './caitering.scss';
import mainbg from '../../images/main_bg.jpg';

export default function Caitering() {
    return(
        <div className='container catering'>
            <img className='container__bg' alt='image' src={mainbg}></img>
            <h2 className='container__title'>КЕЙТЕРИНГ
                <span>в москве и московской области</span>
            </h2>
            <p className='container__discription'>для ваших мероприятий на высшем уровне</p>
            <button className='container__button'><p>получить предложение в Whats App</p></button>
          </div>
    )
}