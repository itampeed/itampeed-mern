import React from 'react'
import './index.css'
import ProfilePic from '../../Elements/Profilepicture.webp'
import { Link } from 'react-router-dom'
import Card from '../../Components/FiverrCard/index'
import ProjectCard from '../../Components/ProjectCard'

export default function Home() {

  const socialMedia = [
    { name: 'facebook', link: 'https://facebook.com/itampeed' },
    { name: 'twitter', link: 'https://twitter.com' },
    { name: 'instagram', link: 'https://instagram.com/m_bilal7476' },
    { name: 'linkedin-in', link: 'https://www.linkedin.com/in/itampeed/' },
    { name: 'github', link: 'https://github.com/itampeed' },
    { name: 'stack-overflow', link: 'https://stackoverflow.com' }
  ];

  const Projects = [
    {
      img: 'https://private-user-images.githubusercontent.com/123369355/299614789-92791c63-056e-40e4-a4ea-2527450dfe6c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA5MDUyMjcsIm5iZiI6MTcxMDkwNDkyNywicGF0aCI6Ii8xMjMzNjkzNTUvMjk5NjE0Nzg5LTkyNzkxYzYzLTA1NmUtNDBlNC1hNGVhLTI1Mjc0NTBkZmU2Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMyMFQwMzIyMDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mOWRhZTdmOTJjZDZjNmJkMTEyYjk5NzRkYzMwZGZmNjEyMDZhY2IxN2ZlMDJhNWEzYjIxYzY0Y2IxMmJkYzdmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.B9-tF903HYCE5xZtHFVGJK9-5YmlAfT4dwcNlFx7RTw',
      title: 'Pakistans GDP Prediction',
      link:'https://github.com/itampeed/Pakistan-s-GDP-Prediction'
    },
    {
      img: 'https://private-user-images.githubusercontent.com/123369355/268483563-f0967247-25b5-4e8b-8310-924d658bd89c.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA5MDUyMzYsIm5iZiI6MTcxMDkwNDkzNiwicGF0aCI6Ii8xMjMzNjkzNTUvMjY4NDgzNTYzLWYwOTY3MjQ3LTI1YjUtNGU4Yi04MzEwLTkyNGQ2NThiZDg5Yy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDMyMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDAzMjBUMDMyMjE2WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9Yjc2NDI2NmNiNDZmMTMwMTc3ODFjNDQzODU0N2ZmZjU0OWU5MDRmMGVkYTljMTUyMGFhYjU2YThiMDFkOTFlOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.ZmdDNrZigvSWpRE3H_6xRQxCN99ZNrR8YmM73iLa8Rs',
      title: 'Co2 Emission Data Science Project',
      link:'https://github.com/itampeed/co2-Data-Science-project-in-Python'
    },
    {
      img: 'https://private-user-images.githubusercontent.com/123369355/268483563-f0967247-25b5-4e8b-8310-924d658bd89c.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA5MDUyMzYsIm5iZiI6MTcxMDkwNDkzNiwicGF0aCI6Ii8xMjMzNjkzNTUvMjY4NDgzNTYzLWYwOTY3MjQ3LTI1YjUtNGU4Yi04MzEwLTkyNGQ2NThiZDg5Yy5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDMyMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDAzMjBUMDMyMjE2WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9Yjc2NDI2NmNiNDZmMTMwMTc3ODFjNDQzODU0N2ZmZjU0OWU5MDRmMGVkYTljMTUyMGFhYjU2YThiMDFkOTFlOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.ZmdDNrZigvSWpRE3H_6xRQxCN99ZNrR8YmM73iLa8Rs',
      title: 'Co2 Emission Data Science Project',
      link:'https://github.com/itampeed/co2-Data-Science-project-in-Python'
    }
  ]

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
            {socialMedia.map((e)=>{
              return(
                <Link to={`${e.link}`} target='_blank'><i className={`fa-brands fa-${e.name}`} aria-hidden='false'></i></Link>
              )
            })}
          </div>
          <Card/>
        </div>
      </div>
      <div className='column'>
        <div className='Projects'>
          <div className='projectstop'>
            <h3>My Projects</h3>
          </div>
          <div className='projectsbottom'>
            {Projects.map((Card, index)=>{
              return(
                <ProjectCard title={Card.title} img={Card.img} link={Card.link}/>
              )
            })}
          </div>
          <div className='visitpagebutton'>
            <Link to='/projects'><button>Visit More Projects</button></Link>
          </div>
        </div>
      </div>
      <div className='column'></div>
    </div>
  )
}
