import React, { useState, useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
  const [truncateLimit, setTruncateLimit] = useState(18);

  useEffect(() => {
    const updateTruncateLimit = () => {
      const newTruncateLimit = window.innerWidth >= 768 ? 25 : 18;
      setTruncateLimit(newTruncateLimit);
    };

    updateTruncateLimit();

    window.addEventListener('resize', updateTruncateLimit);

    return () => {
      window.removeEventListener('resize', updateTruncateLimit);
    };
  }, []);

  const truncatedTitle = props.title.length > truncateLimit ? props.title.slice(0, truncateLimit) + '...' : props.title;

  return (
    <div className='projectCard'>
      <div className='projectCardimg'>
        <img src={props.img} alt='project_img'/>
      </div>
      <div className='projectCardinfo'>
        <div style={{overflow:'hidden'}}>
          <h4>{truncatedTitle}</h4>
        </div>
        <hr/>
        <div className='projectCardinfoshare'>
          <Link to={props.link}>Visit Project<i className="fa-solid fa-arrow-right"></i></Link>
          <i className="fa-solid fa-share-nodes"></i>
        </div>
      </div>
    </div>
  );
}
