import img1 from '../../images/stock1.jpg';
import img2 from '../../images/stock2.jpg';
import img3 from '../../images/stock3.jpg';
import img4 from '../../images/stock3.jpg';
import './stockList.scss';

export default function StockList() {
    return(
        <div className='stocksList container'>
            <div className='reletive'>
                <div className='stock'>
                  <img src={img1} alt='' className='stock__img'></img>
                  <div className='stock__container'>
                      <h4 className='stock__name'>ФУРШЕТ</h4>
                  </div>
                </div>
                <div className='stock'>
                <img src={img2} alt='' className='stock__img'></img>
                  <div className='stock__container'>
                      <h4 className='stock__name'>ДОСТАВКА ОБЕДОВ</h4>
                  </div>
                </div>
            </div>
            <div>
                <div className='stock'>
                <img src={img3} alt='' className='stock__img'></img>
                  <div className='stock__container'>
                      <h4 className='stock__name'>БАНКЕТ</h4>
                  </div>
                </div>
                <div className='stock'>
                <img src={img4} alt='' className='stock__img'></img>
                  <div className='stock__container'>
                      <h4 className='stock__name'>ДЕТСКИЙ ПРАЗДНИК</h4>
                  </div>
                </div>
            </div>
          </div>
    )
}