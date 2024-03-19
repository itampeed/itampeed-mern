import React from 'react'
import './index.css'
import Fiverr from '../../Elements/fiverr.png'
import { Link } from 'react-router-dom'

export default function FiverrCard() {
  return (
    <div>
      <Link to='https://www.fiverr.com/itampeed' target='_blank' style={{textDecoration: 'none'}}>
        <div className='Card'>
          <div className='cardTop'>
            <img src={Fiverr} alt='Fiverr Image' />
            <h3 className='username'>itampeed</h3>
          </div>
          <hr/>
        </div>
      </Link>
    </div>
  )
}
