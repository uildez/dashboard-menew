import React from 'react'

import { Link } from 'react-router-dom'
import './suport.scss'

const Suport = () => {
  return (
    <div className='header'>
      <h1>Suporte</h1>
      <Link to="/dashboard">
        <button className='btn-back'>Voltar</button>
      </Link>
    </div>
  )
}

export default Suport