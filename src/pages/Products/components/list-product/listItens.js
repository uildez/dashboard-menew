import React, { useState, Fragment } from 'react'

import data from './data.json'

import './listItems.scss'
import { nanoid } from '@reduxjs/toolkit';
import ReadOnlyRow from '../ReadOnlyRow.js';
import EditableRow from '../EditableRow';

function ListItems() {
    const [products, setProducts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        nameProduct: '',
        description: '',
        img: '',
    });

    const [editFormData, setEditFormData] = useState({
        nameProduct: '',
        description: '',
        img: '',
    })

    const [editProductId, setEditProductId] = useState(null);

    const handleAddFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleEditFormSubmit = (e) =>{
        e.preventDefault();

        const editedProduct = {
            id: editProductId,
            nameProduct: editFormData.nameProduct,
            description: editFormData.description,
            img: editFormData.img,
        }

        const newProducts = [...products];

        const index = products.findIndex((product)=> product.id === editProductId)

        newProducts[index] = editedProduct;

        setProducts(newProducts);
        setEditProductId(null)
    }

    const handleEditFormChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: nanoid(),
            nameProduct: addFormData.nameProduct,
            description: addFormData.description,
            img: addFormData.img,
        };

        const newProducts = [...products, newProduct];
        setProducts(newProducts);
    }

    const handleEditClick = (e, product) => {
        e.preventDefault();
        setEditProductId(product.id);

        const formValues = {
            nameProduct: product.nameProduct,
            description: product.description,
            img: product.img,
        }

        setEditFormData(formValues);
    }

    // Cancel editing products
    const handleCancelClick = () =>{
        setEditProductId(null);
    }

    // Delete products
    const handleDeleteClick = (productId) => {
        const newProducts = [...products];

        const index = products.findIndex((product)=> product.id === productId);

        newProducts.splice(index, 1);

        setProducts(newProducts);
    }


    return (
        <>
            <div className='form-style'>
                <p>Adicione um novo Produto</p>
                <form onSubmit={handleAddFormSubmit}>
                    <input type="text" name='nameProduct' required placeholder='Nome do Produto' onChange={handleAddFormChange} />
                    <input type="text" name='description' required placeholder='Descrição do Produto' onChange={handleAddFormChange} />
                    <input type="text" name='img' required placeholder='Link da Imagem' onChange={handleAddFormChange} />
                    <button type='submit' className='add-btn'>Adicionar</button>
                </form>
            </div>
            <form onSubmit={handleEditFormSubmit}>
                <div className='product'>
                    <div className='product-row'>
                        {products.map((product) => (
                            <Fragment>
                                {editProductId === product.id ?
                                    <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>
                                    :
                                    <ReadOnlyRow product={product} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </form>
        </>
    )
}

export default ListItems

