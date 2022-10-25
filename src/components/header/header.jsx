import './header.scss';
import logo from '../../images/logo.svg';

export default function Header(){
    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="logo"></img>
                <div>
                    <p>Бульвар Космонавтов, д. 9</p>
                    <p>+7 999 888 77 66</p>
                </div>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <a>наши услуги</a>
                    </li>
                    <li>
                        <a>рассчет для вас</a>
                    </li>
                    <li>
                        <a>наши кейсы</a>
                    </li>
                    <li>
                        <a>команда chesnokoff</a>
                    </li>
                    <li>
                        <a>отзывы гостей</a>
                    </li>
                </ul>
            </nav>
      </header>
    )
}