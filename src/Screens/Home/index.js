import React from 'react'
import './index.css'
import ProfilePic from '../../Elements/Profilepicture.webp'

export default function Home() {
  return ( 
    <div className='main-home'>
      <div className='column'>
        <div className='intro'>
          <img src={ProfilePic} alt='profile pic'/>
          <h3>Muhammad Bilal Safdar</h3>
          <p>My talent is testament to the beauty that lies within the delicate details of my designs, they are simple, beautiful and adorable. Join me for creativity.</p>
        </div>
      </div>
      <div className='column'></div>
      <div className='column'></div>
    </div>
  )
}
