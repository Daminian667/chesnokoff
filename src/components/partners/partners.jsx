import Carusel from "../carusel/carusel";
import ButtonToggle from "../buttonToggle/buttonTogle";
import { useState } from "react";
import './partners.scss';

const types = ["Лофт Soul House","Лофт Campus","Лофт ROOM 404","Лофт PLANТАЦИЯ","Лофт Surf House"]

export default function Partners() {

    const [active, setActive] = useState(types[0]);

    return(
        <div className='essential__container'>
            <ul className="partners__list">
            {types.map((type) => (
                        <li key={type}>
                            <ButtonToggle
                                key={type}
                                active={active === type}
                                onClick={() => {
                                    setActive(type)
                                console.log(active)}}
                            >
                                {type}
                            </ButtonToggle>
                        </li>
                    ))}
            </ul>
        </div>
    )
}