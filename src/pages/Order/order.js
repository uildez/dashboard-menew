import React from 'react'

import { Link } from 'react-router-dom'
import './order.scss'

const Order = () => {
  return (
    <div className='header'>
      <h1>Chamadas</h1>
      <Link to="/dashboard">
        <button className='btn-back'>Voltar</button>
      </Link>
    </div>
  )
}

export default Order