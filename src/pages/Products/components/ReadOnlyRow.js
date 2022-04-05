import React from 'react'
import { UilEdit, UilTrashAlt } from '@iconscout/react-unicons'


const ReadOnlyRow = ({ product, handleEditClick, handleDeleteClick }) => {
    return (
        <div className='product-item'>
            <div className='product-image'><img src={product.img}></img></div>
            <div className='product-info'>
                <div><h2>{product.nameProduct}</h2></div>
                <div><p>{product.description}</p></div>
            </div>
            <div className='product-btns'>
                <UilEdit className='edit-btn' onClick={(e) => handleEditClick(e, product)}/>
                <UilTrashAlt className='edit-btn' onClick={() => handleDeleteClick(product.id)}/>
            </div>
        </div>
    )
}

export default ReadOnlyRow