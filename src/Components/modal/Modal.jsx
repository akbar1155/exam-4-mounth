import React from 'react';
import './Modal.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
let name = document.getElementsByClassName("name");
let role = document.getElementsByClassName('role');
let password = document.getElementsByClassName('password');
let email = document.getElementsByClassName('email');

const Modal = ({ users, setUsers }) => {

    let items = {
        id: 0,
        name: '',
        role: '',
        password: '',
        email: '',
        avatar: '',
    }

    const addItems = () => {
        items.id = users[users.length - 1]?.id + 1 || 0
        items.name = name[0].value
        items.role = role[0].value
        items.password = password[0].value
        items.email = email[0].value
        window.localStorage.setItem('users', JSON.stringify([...users, items]))
        setUsers([...users, items])
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
                        <label>Role</label>
                        <input className='form-control role' type="text" id='role' placeholder="Role" />
                        <label>Password</label>
                        <input className='form-control password' type="text" id='password' placeholder="Password" />
                        <label>Email</label>
                        <input className='form-control email' type="text" id='email' placeholder="Email" />
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

export default Modal;
