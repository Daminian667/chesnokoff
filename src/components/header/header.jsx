import './header.scss';
import logo from '../../images/logo.svg';

export default function Header(){
    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="logo"></img>
                <div>
                    <p>+7 999 888 77 66</p>
                </div>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <a>ФУРШЕТ</a>
                    </li>
                    <li>
                        <a>БАНКЕТ</a>
                    </li>
                    <li>
                        <a>ДОСТАВКА</a>
                    </li>
                    <li>
                        <a>ДЛЯ ДЕТЕЙ</a>
                    </li>
                    <li>
                        <a>О НАС</a>
                    </li>
                    <li>
                        <a>КЕЙТЕРИНГ</a>
                    </li>
                    <li>
                        <a>ПЛОЩАДКИ</a>
                    </li>
                    <li>
                        <a>НАШИ УСЛУГИ</a>
                    </li>
                    <li>
                        <a>ОТЗЫВЫ</a>
                    </li>
                    <li>
                        <a>КОНТАКТЫ</a>
                    </li>
                </ul>
            </nav>
      </header>
    )
}