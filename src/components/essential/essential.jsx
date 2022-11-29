import ButtonToggle from '../buttonToggle/buttonTogle';
import { useState } from 'react';
import Caitering from '../caitering/caitering';
import Delivery from '../delivery/delivery';
import './essential.scss';
import Partners from '../partners/partners';

const types = ["кейтеринг", "доставка", "наши партнеры"];

export default function Essential() {
    const [active, setActive] = useState(types[0]);

    return(
        <div className='essential'>
            <nav className='essential__nav'>
                <ul>
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
            </nav>

            {active == "кейтеринг" && <Caitering />}
            {active == "доставка" && <Delivery />}
            {active == "наши партнеры" && <Partners />}
        </div>
    )
}