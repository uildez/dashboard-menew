import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice'

import './logout.scss'
import { ReactComponent as Logo } from '../../assets/images/menew-logo.svg';
import AppRoutes from '../../AppRoutes';

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  }

  return (
    <div className='bg-dashboard'>
      <div className='navbar'>
        <div className='logout'>
          <div className='logout_logo'>
            <Logo />
            <h2>Bem vindo <span className='user__name'>{user.name}</span></h2>{" "}
          </div>
          <div className='buttons'>
            <button className='logout__btn' onClick={(e) => handleLogout(e)}>Sair</button>
          </div>
        </div>
      </div>
      <AppRoutes />
    </div>

  )
}


export default Logout