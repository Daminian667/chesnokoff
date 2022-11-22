import Carusel from "../carusel/carusel";
import ButtonToggle from "../buttonToggle/buttonTogle";
import { useState } from "react";
import lofts from '../../constants/partners.js';
import './partners.scss';

export default function Partners() {

    const [active, setActive] = useState('Лофт Soul House');
    const [index, setIndex] = useState(0)
    
    const types = Object.entries(lofts);
    const loftsArray = []
    types.forEach(([key, value]) => {
        loftsArray.push(value);
    });

    const activeLoft = loftsArray[index];

    const activeImageLoft = activeLoft.img
    console.log(activeImageLoft)
    return(
        <div className='partners'>
            <ul className="partners__list">
            {loftsArray.map((loft, index) => (
                        <li key={loft.name}>
                            <ButtonToggle
                                key={loft.name}
                                active={active === loft.name}
                                onClick={() => {
                                    setActive(loft.name)
                                    setIndex(index)
                                }}
                            >
                                {loft.name}
                            </ButtonToggle>
                        </li>
                    ))}
            </ul>
            <div className="partners__container">
                <div className="partners__description">
                    <h5 className="partners__name">{activeLoft.name}</h5>
                    <p className="partners__text">{activeLoft.text}</p>
                </div>
                <Carusel>
                    {activeImageLoft.map((i) => {
                        return (<img src={i} alt="placeholder" />)
                    })}
                </Carusel>
            </div>
        </div>
    )
}