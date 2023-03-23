import './menuCard.scss';
import src1 from '../../images/Rectangle 207.jpg';

export default function MenuCard() {
    return (
        <div className="menu__card">
            <img className="menu__photo" src={src1}></img>
            <p className="menu__title">Канапе капрезе</p>
            <p className="menu__description">
                <p>краткое описание</p>

                Моцарелла, томаты черри, соус песто
            </p>
            <p className="menu__wight">0,025 гр.</p>
            <p className="menu__price">155 руб.</p>
        </div>
    );
}