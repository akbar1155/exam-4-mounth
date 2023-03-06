
import React from 'react';
import "./Modal.css"
import { AiOutlinePlusCircle } from 'react-icons/ai'
let name = document.getElementsByClassName("name");
let price = document.getElementsByClassName('price');

const modalpr = ({ products, setproducts }) => {

    let items = {
        id: 0,
        name: '',
        price: '',
    }

    const addItems = () => {
        items.id = products[products.length - 1]?.id + 1 || 0
        items.name = name[0].value
        items.price = price[0].value
        window.localStorage.setItem('product', JSON.stringify([...products, items]))
        setproducts([...products, items])
    }
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <label>Name</label>
                        <input className='form-control name' id='name' type="text" placeholder="Name" />
                        <label>price</label>
                        <input className='form-control price' type="number" id='price' placeholder="price" />
                        <span className='mb-2'>
                            <input type="file" className='input form-control' name="myImage" accept="image/x-png,image/gif,image/jpeg" />
                            <button style={{ color: '#2a81dd' }} className='bg-white border-0 p-0 fs-5' onClick={(e) => {
                                e.preventDefault()
                                const reader = new FileReader()
                                let files = document.querySelector('.input').files
                                reader.onload = async (event) => {
                                    items.avatar = event.target.result
                                }
                                reader.readAsDataURL(files[0])
                            }}><AiOutlinePlusCircle /></button>
                        </span>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary  add-news" onClick={() => { addItems() }} >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default modalpr;
