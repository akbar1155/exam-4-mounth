import React, { useEffect } from 'react';
import './Users.css';
import { FaRegMoon, FaFilter } from 'react-icons/fa'
import { TbArrowsDownUp } from 'react-icons/tb'
import { AiOutlinePlusCircle, AiOutlineMenuFold, AiFillEdit } from 'react-icons/ai'
import { CgMenuGridR } from 'react-icons/cg'
import Navbar from '../../Components/nav/Navbar';
import Modal from '../../Components/modal/Modal';
import { NavLink } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = React.useState(JSON.parse(window.localStorage.getItem('users')) || []);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/users')
            .then((response) => {
                return response.json();
            }).then((data) => {
                window.localStorage.setItem('users', JSON.stringify(data))
                setUsers(data)
            });
    }, [])


    const handleDeleteTodo = (evt) => {
        const todoId = evt.target.dataset.todoId
        const filteredTodos = users.filter(row => row.id != todoId - 0)
        setUsers([...filteredTodos]);
        window.localStorage.setItem('users', JSON.stringify([...filteredTodos]))
    }

    return (
        <div className='div12'>
            <Navbar />
            <div className='div123'>
                <div className='navbar1'>

                    <div className='df usernavbar'>
                        <h1>User</h1>
                        <div className='addproduct'>
                            <FaRegMoon />
                            <span className="header__wrap-nav">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <AiOutlinePlusCircle />
                                    Add product
                                </button>
                                <Modal users={users} setUsers={setUsers} />
                            </span>
                        </div>
                    </div>
                    <div className='df inputsearch'>
                        <input className='form-control1' type="text" />
                        <span className='df filter1'>
                            <button>Filter <FaFilter /></button>
                            <NavLink to='/user'><AiOutlineMenuFold /></NavLink>
                            <NavLink to='/product'><CgMenuGridR /></NavLink>
                        </span>
                    </div>
                </div>
                <div className='sort1'>
                    <ul style={{
                        display: 'flex', marginTop: "0px", position: "relative",
                        top: "110px", justifyContent: "space-between",
                        listStyleType: 'none', width: "90%"
                    }} className="uluser">
                        <li>Items <TbArrowsDownUp /></li>
                        <li>Category <TbArrowsDownUp /></li>
                        <li>Status <TbArrowsDownUp /></li>
                        <li>Sales <TbArrowsDownUp /></li>
                        <li>Stock <TbArrowsDownUp /></li>
                        <li>Price <TbArrowsDownUp /></li>
                    </ul>
                    <ul className='cards'>
                        {users.map(user => (
                            <li key={user.id}>
                                <img width={'170px'} height={'170px'} src={user.avatar} alt={user.name} />
                                <h3>{user.name}</h3>
                                <h4>{user.role}</h4>
                                <p>{user.password}</p>
                                <p>{user.email}</p>
                                <span>
                                    <button type="button" className="header__wrap-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"> <AiFillEdit /></button>
                                    <button type='button' data-todo-id={user.id} onClick={handleDeleteTodo}>delete</button>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Users;
