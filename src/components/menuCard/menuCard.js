import './menuCard.scss';
import src1 from '../../images/Rectangle 207.jpg';

export default function MenuCard({name, description, wight, price, img}) {
    return (
        <div className="menu__card">
            <img className="menu__photo" src={img}></img>
            <p className="menu__title">{name}</p>
            <p className="menu__description">
                <p>краткое описание</p>

                {description}
            </p>
            <p className="menu__wight">{wight} гр.</p>
            <p className="menu__price">{price} руб.</p>
        </div>
    );
}