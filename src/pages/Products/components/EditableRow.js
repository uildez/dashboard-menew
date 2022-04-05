import React from 'react'
import './list-product/listItems.scss'

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <div className='product-item'>
            <div className='product-image'><input type="text" name='img' value={editFormData.img} required placeholder='Link da Imagem' onChange={handleEditFormChange} /></div>
            <div className='product-info'>
                <input type="text" name='nameProduct' value={editFormData.nameProduct} required placeholder='Nome do Produto' onChange={handleEditFormChange} />
                <input type="text" name='description' value={editFormData.description} required placeholder='Descrição do Produto' onChange={handleEditFormChange} />
                <div className='product-btns'>
                    <button type="submit">Salvar</button>
                    <button type="submit" onClick={handleCancelClick}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default EditableRow