import img4 from '../../images/quality.svg';
import img5 from '../../images/service.svg';
import img6 from '../../images/team.svg';
import img7 from '../../images/equip.svg';
import cheaf from '../../images/cheaf.jpg'
import { useState } from 'react';
import './about.scss';

export default function About() {

    const [visible, setVisible] = useState(false);

    function toggleVisible() {
        visible ? setVisible(false) : setVisible(true)
    };

    return (
        <div className='about'>
            <div className='container'>
                <div className='about__discrition'>
                    <div>
                        <h3 className='about__title'>Chesnokoff кейтеринг -еда должна быть простой</h3>
                        <p className="about__text">Наша команда кейтеринга чеснокоф начали свое развитие с проекта  лофта «Plantация». Благодаря этому сотрудничеству, смогли провести более 160 мероприятий за 2 года. Приобретенный в этом проекте опыт, а так же решительность и большая вера в то, что мы делаем, помогли создать отдельный сервис по кейтерингу «Chesnokoff».</p>
                        <p className="about__text">Мы команда единомышленников,которой нравится готовить,встречаться с новыми ингредиентами и культурой.</p>
                        <p className="about__text">Мы достигаем самых лучших результатов, потому что мы ценим каждого сотрудника. Мы гордимся тем, что объединили профессионалов, поддерживаем друг друга и создаем атмосферу, в которой хочется творить. В нашей компании каждый человек занимается своим любимым делом!</p>
                </div>
                <div>
                    <img src={cheaf} alt="" className="about__photo"></img>
                        <div className="about__photo_container">
                            <p className="about__photo_description">Александр Щербинин</p>
                            <p className="about__photo_description">Шеф-повар Chesnokoff</p>
                        </div>
                </div>
                </div>
            </div>
            {visible ? 
            <div className='about__text_more container'>
                <p className='about__text'>Chesnokoff catering готовит для вас лучшее без использования полуфабрикатов. Все блюда создаются руками наших поваров: мы сами печём булочки для бургеров, засаливаем рыбу, смешиваем маринады и соусы. Благодаря стремлению к совершенству, мы постоянно ищем новые вкусовые сочетания, интересные варианты подачи блюд. Неизменным остаётся только строгая приверженность к свежайшим продуктам.</p>
                <p className='about__text'>Наша команда уделяет внимание каждой детали. Все заботы о приготовлении, доставке и сервировке блюд мы берём на себя! Вам остаётся только наслаждаться мероприятием.</p>
            </div>
            : <button className="about__button container" onClick={toggleVisible}>подробнее</button>
            }
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
            </div>
          </div>
    )
}