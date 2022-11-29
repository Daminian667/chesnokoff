import Carusel from "../carusel/carusel";
import closh from '../../images/closh.svg';
import src1 from '../../images/cs1.jpg';
import src2 from '../../images/cs2.jpg';
import src3 from '../../images/cs3.jpg';

export default function Caitering() {
    return(
        <div className='essential__container'>
                <div className='essential__content'>
                    <img src={closh} alt='' className='essential__logo'></img>
                    <h5 className='essential__title'>Chesnokoff больше чем просто кейтеринг</h5>
                    <p className='essential__text'>Качество нашего кейтеринга уже высоко оценили многие собственники бизнеса, топ-менеджеры, политики и звёзды.</p> 
                    <p className='essential__text'>У нас есть опыт в проведении крупных мероприятий  для таких компаний как</p>  
                    <p className='essential__text'>Предлагаем вашему вниманию широкий выбор блюд из готового меню, а так же принимаем индивидуальные заказы. Организуем полное выездное обслуживание мероприятия. Chesnokoff умеет предвосхищать ваши желания!</p>
                    <button className='essential__button'>РАССЧИТАТЬ СТОИМОСТЬ КЕЙТЕРИНГА</button>
                </div>
                <Carusel>
                    <img src={src1} alt="placeholder" />
                    <img src={src2} alt="placeholder" />
                    <img src={src3} alt="placeholder" />
                </Carusel>
            </div>
    )
}