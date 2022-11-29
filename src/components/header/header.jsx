import './header.scss';
import logo from '../../images/logo.svg';
import wa from '../../images/wa.svg';
import tg from '../../images/tg.svg';
import call from '../../images/call.svg';

export default function Header(){

    const styleWaButton = {
        backgroundImage: 'url(' + wa + ')'
    }

    const styleTgButton = {
        backgroundImage: 'url(' + tg + ')'
    }

    const styleCallButton = {
        backgroundImage: 'url(' + call + ')'
    }


    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="logo"></img>
                <div className="header__contacts">
                    <button className="header__button_sn" style={styleWaButton}></button>
                    <button className="header__button_sn" style={styleTgButton}></button>
                    <button className="header__button_sn" style={styleCallButton}></button>
                    <p>+7 903 700-49-54</p>
                    <button className="header__button">заказать звонок</button>
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