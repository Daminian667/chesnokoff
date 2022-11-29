import Carusel from "../carusel/carusel";
import closh from '../../images/closh.svg';
import src1 from '../../images/cs1.jpg';
import src2 from '../../images/cs2.jpg';
import src3 from '../../images/cs3.jpg';

export default function Delivery() {
    return (
        <div className='essential__container'>
                <div className='essential__content'>
                    <img src={closh} alt='' className='essential__logo'></img>
                    <h5 className='essential__title'>Доставка Chesnokoff</h5>
                    <p className='essential__text'>Особое внимание компания Chesnokoff уделяет доставке наших прекрасных блюд. Мы тщательно проверяем свежесть и качество перед отправкой.</p> 
                    <p className='essential__text'>Сотрудники бережно и внимательно собирают заказы, используя фирменную упаковку. Наши приоритеты - это скорость, своевременность доставки, соблюдение всех условий хранения без потери качества!</p>  
                    <button className='essential__button' style={{width: 457, height: 81}}>ЗАКАЗАТЬ</button>
                </div>
                <Carusel>
                    <img src={src3} alt="placeholder" />
                    <img src={src1} alt="placeholder" />
                    <img src={src2} alt="placeholder" />
                </Carusel>
        </div>
    )
}