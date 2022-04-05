import React from 'react'

import { Link } from 'react-router-dom'
import './storage.scss'

const Storage = () => {
  return (
    <div className='header'>
      <h1>Estoque</h1>
      <Link to="/dashboard">
        <button className='btn-back'>Voltar</button>
      </Link>
    </div>
  )
}

export default Storage