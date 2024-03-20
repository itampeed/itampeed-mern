import React from 'react';
import './index.css';
import Fiverr from '../../Elements/fiverr.png';
import { Link } from 'react-router-dom';

export default function FiverrCard() {

  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      <Link to='https://www.fiverr.com/itampeed' target='_blank' style={{ textDecoration: 'none' }}>
        <div className='Card'>
          <div className='cardTop'>
            <div style={{ display: 'flex', alignItems: 'center', margin: '0px 15px' }}>
              <img src={Fiverr} alt='Fiverr' style={{ marginRight: '5px' }} />
              <h3 className='username' title='username'>itampeed</h3>
            </div>
            <div style={{ margin: '0px 15px' }}>
              {stars.map((star, index) => (
                <i key={index} className="fa-solid fa-star" title='Fiverr Ratings' style={{ margin: '0px 1.5px' }}></i>
              ))}
            </div>
            <div className='firverrvisitarrow'>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          {/* <hr />
          <div className='cardBottom'>
          </div> */}
        </div>
      </Link>
    </div>
  );
}
