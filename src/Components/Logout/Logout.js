import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice'

import './logout.scss'
import { ReactComponent as Logo } from '../../assets/images/menew-logo.svg';
import AppRoutes from '../../AppRoutes';
import { auth } from '../../firebase';

const Logout = () => {
  const user = useSelector(selectUser);

  const handleLogout = () => {
    if(window.confirm("Deseja realmente sair?")){
      auth.signOut(); 
    }
  }

  return (
    <div className='bg-dashboard'>
      <div className='navbar'>
        <div className='logout'>
          <div className='logout_logo'>
            <Logo />
            <h2>Bem vindo <span className='user__name'>{String(user.name).split("@")[0]}</span></h2>{" "}
          </div>
          <div className='buttons'>
            <button className='logout__btn' onClick={handleLogout}>Sair</button>
          </div>
        </div>
      </div>
      
      <AppRoutes />
    </div>

  )
}


export default Logout