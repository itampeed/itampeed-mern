import React, { useEffect, useState } from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom';

export default function Index() {
  const [menu, setmenu] = useState('menu-items');

  const MenuToggle = () => {
    setmenu(menu === 'menu-items' ? 'menu-items-mobile' : 'menu-items');
  };

  let location = useLocation()

  useEffect(()=>{
    setmenu('menu-items')
    console.log(location)
  }, [location])

  return (
    <div className='menu'>
      <div className='logo'>
        <Link to='/'>
          itampeed
        </Link>
      </div>
      <div className={menu}>
        <div className='menu-navigation'>
          <ul>
            <li>
              <Link to='/' className={`${location.pathname === '/'? "active": ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/youtube' className={`${location.pathname === '/youtube'? "active": ""}`}>
                Youtube
              </Link>
            </li>
            <li>
              <Link to='/projects' className={`${location.pathname === '/portfolio'? "active": ""}`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/contact' className={`${location.pathname === '/contact'? "active": ""}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='menu-account'>
          <Link to='/login'><button>Login <i class="fa-solid fa-right-to-bracket"></i></button></Link>
        </div>
      </div>
      <div className={`menu-icon ${menu ? 'menu-icon' : ''}`} onClick={MenuToggle}>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
      </div>
    </div>
  );
}