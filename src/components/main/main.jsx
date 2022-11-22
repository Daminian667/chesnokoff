import './main.scss';
import mainbg from '../../images/main_bg.jpg';
import StockList from '../../components/stockList/stockList';
import About from '../../components/about/about';
import Essential from '../essential/essential';
import Services from '../services/services';

export default function Main() {
    return(
        <main className='main'>
            <div className='container__blur container'></div>
            <div className='container__rectangle'></div>
            <div className='container catering'>
                <img className='container__bg' alt='image' src={mainbg}></img>
                <h2 className='container__title'>КЕЙТЕРИНГ
                    <span>в москве и московской области</span>
                </h2>
                <p className='container__discription'>для ваших мероприятий на высшем уровне</p>
                <button className='container__button'><p>получить предложение в Whats App</p></button>
              </div>
            <StockList />
            <About />
            <Essential />
            <Services />
        </main>
    )
}