import React from 'react'
import ListItems from './components/list-product/listItens'

import { Link } from 'react-router-dom'
import './products.scss'

const Products = () => {
  return (
    <div className='products'>
      <div className='nav'>
        <h1>Produtos</h1>
        <Link to="/dashboard">
          <button className='btn-back'>Voltar</button>
        </Link>
      </div>
      <ListItems/>
    </div>
  )
}

export default Products
