import React, {useState, useEffect} from 'react'
import './carusel.scss'

export default function Carusel(props) {
    const {children} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    useEffect(() => {
        setLength(children.length)
    }, [children])
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className='carousel__nav'>
                {currentIndex > 0 && 
                    <button className="left-arrow" onClick={prev}>
                        &larr;
                    </button>
                }
                {currentIndex < (length - 1) &&
                    <button className="right-arrow" onClick={next}>
                        &rarr;
                    </button>
                }
                </div>
                <div className="carousel-content-wrapper">
                    <div className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 573}px)` }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}