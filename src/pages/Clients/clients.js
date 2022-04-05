import React from 'react'

import { Link } from 'react-router-dom'
import './clients.scss'

const Clients = () => {
  return (
    <div className='header'>
      <h1>Clientes</h1>
      <Link to="/dashboard">
        <button className='btn-back'>Voltar</button>
      </Link>
    </div>
  )
}

export default Clients