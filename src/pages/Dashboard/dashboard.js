import React from 'react'
import { UilUserPlus, UilShoppingBag, UilCalling, UilNavigator, UilClipboardBlank } from '@iconscout/react-unicons'

import './dashboard.scss'

import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='box-actions'>
            <Link to="/products">
                <div className='action'>
                    <UilShoppingBag className='icon' size="30" />
                    <h2>Cadastro de Produtos</h2>
                    <p>Clique aqui para adicionar ou editar produtos</p>
                </div>
            </Link>
            <Link to="/clients">
                <div className='action disabled'>
                    <UilUserPlus className='icon' size="30" />
                    <h2>Cadastro de clientes</h2>
                    <p>Clique aqui para adicionar ou editar clientes</p>
                </div>
            </Link>

            <Link to="/order">
                <div className='action disabled'>
                    <UilCalling className='icon' size="30" />
                    <h2>Chamadas</h2>
                    <p>Confira as chamadas pendentes, realizadas ou finalizadas</p>
                </div>
            </Link>

            <Link to="/storage">
                <div className='action disabled'>
                    <UilClipboardBlank className='icon' size="30" />
                    <h2>Estoque</h2>
                    <p>Confira o estoque</p>
                </div>
            </Link>

            <Link to="/delivery">
                <div className='action disabled'>
                    <UilNavigator className='icon' size="30" />
                    <h2>Entrega</h2>
                    <p>Entregas pendentes, em andamento e finalizadas</p>
                </div>
            </Link>

            <Link to="/suport">
                <div className='action disabled'>
                    <UilClipboardBlank className='icon' size="30" />
                    <h2>Suporte</h2>
                    <p>Em caso de problemas técnicos entre me contato com o suporte clicando aqui</p>
                </div>
            </Link>
        </div>
    )
}

export default Dashboard