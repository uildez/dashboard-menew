import React from 'react'

import { Link } from 'react-router-dom'
import './delivery.scss'

const Delivery = () => {
  return (
    <div className='header'>
      <h1>Entregas</h1>
      <Link to="/dashboard">
        <button className='btn-back'>Voltar</button>
      </Link>
    </div>
  )
}

export default Delivery