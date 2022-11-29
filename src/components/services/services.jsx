import waiter from '../../images/services/waiter.jpg';
import cook from '../../images/services/cook.jpg';
import chocolate from '../../images/services/chocolate.jpg';
import piramid from '../../images/services/piramid.jpg';
import zaglushka from '../../images/services/zaglushka.jpg';
import garbige from '../../images/services/garbige.jpg';
import dishes from '../../images/services/dishes.jpg';
import chear from '../../images/services/chear.jpg';
import table from '../../images/services/table.jpg';
import textile from '../../images/services/textile.jpg';
import coffee from '../../images/services/coffee.jpg';
import './services.scss';

export default function Services() {
    return(
        <div className='services'>
            <h5 className='services__title'>Услуги Chesnokoff Catering </h5>
            <div className='services__category'>
                <p className='services__subtitle'>
                Обслуживание
                </p>
                <div className='services__cardlist'>
                    <div className='services__card'>
                        <img src={waiter} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'>ОФИЦИАНТ</p>
                        </div>
                    </div>
                    <div className='services__card'>
                        <img src={cook} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'>ПОВАР</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='services__category'>
                <p className='services__subtitle'>
                Для вашего мероприятия
                </p>
                <div className='services__cardlist'>
                    <div className='services__card'>
                        <img src={chocolate} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'>ШОКОЛАДНЫЙ ФОНТАН</p>
                        </div>
                    </div>
                    <div className='services__card'>
                        <img src={piramid} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'>ПИРАМИДА ИЗ БОКАЛОВ</p>
                        </div>
                    </div>
                    <div className='services__card'>
                        <img src={zaglushka} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='services__category'>
                <p className='services__subtitle' style={{color: '#fff'}}>
                Аренда
                </p>
                <div className='services__cardlist'>
                    <div className='services__card'>
                        <img src={garbige} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'>МУСОРНЫЕ БАКИ С КРЫШКОЙ</p>
                        </div>
                    </div>
                    <div className='services__card'>
                        <img src={dishes} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'>СТОЛОВАЯ СЕРВИРОВОЧНАЯ ПОСУДА</p>
                        </div>
                    </div>
                    <div className='services__card'>
                        <img src={chear} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'>СТУЛЬЯ</p>
                        </div>
                    </div>
                    <div className='services__card'>
                        <img src={table} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'>СТОЛЫ</p>
                        </div>
                    </div>
                    <div className='services__card'>
                        <img src={textile} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'>ТЕКСТИЛЬ</p>
                        </div>
                    </div>
                    <div className='services__card'>
                        <img src={coffee} className='services__img'></img>
                        <div className='services__card_container'>
                            <p className='services__text'>АРЕНДА ТЕРМОПОДА</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='services__bg'></div>
        </div>
    )
}