import './bankets.scss';
import Header from "../components/header/header";
import Main from '../components/main/main';
import Footer from "../components/footer/footer";
import MenuCard from "../components/menuCard/menuCard";
import src from '../images/banket_background.jpg';
import menu from '../constants/банкетное меню.json';

export default function Bankets() {
    const Menu = menu;
    return (
        <div>
            <Header />
            <Main 
                title={'БАНКЕТ'}
                img={src}    
            />
            <div className="bankets__list">
                <div className="bankets__solts">
                    <a className="bankets__soltsLink">Главная</a>
                    /
                    <a className="bankets__soltsLink">Банкеты</a>
                </div>
                <h3 className="bankets__title">Меню для банкета</h3>
                <div className="bankets__menuList">
                    <nav className="bankets__nav">
                        <a>КАНАПЕ</a>
                        <a>ХОЛОДНЫЕ ЗАКУСКИ И САЛАТЫ</a>
                        <a>ГОРЯЧИЕ ЗАКУСКИ</a>
                        <a>ГОРЯЧЕЕ</a>
                        <a>НАПИТКИ</a>
                    </nav>
                    <ul className="bankets__cardList>">
                        {Menu.map((item) => {
                            return (
                            <li>
                                <MenuCard 
                                    name={item.name}
                                    description={item.description}
                                    wight={item.wight}
                                    price={item.price}
                                />
                            </li>
                            )
                        })}
                    </ul>
                    <div className='bankets__pagination'>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}