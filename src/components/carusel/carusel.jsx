import ButtonToggle from '../buttonToggle/buttonTogle';
import { useState } from 'react';
import './carusel.scss';

const types = ["кейтеринг", "доставка", "наши партнеры"];

export default function Carusel() {
    const [active, setActive] = useState(types[0]);

    return(
        <div className='carousel'>
            <nav className='carusel__nav'>
                <ul>
                    {types.map((type) => (
                        <li>
                            <ButtonToggle
                                key={type}
                                active={active === type}
                                onClick={() => setActive(type)}
                            >
                                {type}
                            </ButtonToggle>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}