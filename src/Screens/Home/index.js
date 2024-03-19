import React from 'react'
import './index.css'
import ProfilePic from '../../Elements/Profilepicture.webp'
import { Link } from 'react-router-dom'
import Card from '../../Components/FiverrCard/index'

export default function Home() {
  return (
    <div className='main-home'>
      <div className='column'>
        <div className='intro'>
          <div className='intro-block'>
            <img src={ProfilePic} alt='profile pic' />
            <div style={{ marginLeft: '0.6rem' }}>
            <h3 style={{ marginTop: '8px', marginBottom:'0' }}>Muhammad Bilal Safdar</h3>
            <p style={{ margin: '0px', fontSize:'16px' }}>Data Science | Web Development</p>

            </div>
          </div>
          <p style={{ margin: '1px' }}>My talent is testament to the beauty that lies within the delicate details of my designs, they are simple, beautiful and adorable. Join me for creativity.</p>
          <div className='social'>
            <Link to=''><i class="fa-brands fa-facebook"></i></Link>
            <Link to=''><i class="fa-brands fa-twitter"></i></Link>
            <Link to=''><i class="fa-brands fa-instagram"></i></Link>
            <Link to=''><i class="fa-brands fa-linkedin-in"></i></Link>
            <Link to=''><i class="fa-brands fa-github"></i></Link>
            <Link to=''><i class="fa-brands fa-stack-overflow"></i></Link>
          </div>
          <Card/>
        </div>
        <div className='freelance'>
          
        </div>
      </div>
      <div className='column'></div>
      <div className='column'></div>
    </div>
  )
}
