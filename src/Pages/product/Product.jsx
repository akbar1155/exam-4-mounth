import React from 'react';
import { FaRegMoon, FaFilter } from 'react-icons/fa'
import { TbArrowsDownUp } from 'react-icons/tb';
import { AiOutlinePlusCircle, AiOutlineMenuFold, AiFillEdit } from 'react-icons/ai'
import { CgMenuGridR } from 'react-icons/cg'
import { BsTrash3 } from 'react-icons/bs';
import "./product.css";
import ".././user/Users.css"
import "../../Components/nav/Navbar.css"
import Navbar from '../../Components/nav/Navbar';
import Modal from '../../Components/modal/Modal';
import { NavLink } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = React.useState([]);

    fetch('https://api.escuelajs.co/api/v1/products')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setProducts(data)
        });
    return (
        <div className='product1'>
            <Navbar />
            <div className='pruduct2'>
                <div className='navbar1'>
                    <div className='df usernavbar usernavbar1'>
                        <h1>Users</h1>
                        <div className='addproduct'>
                            <FaRegMoon />
                            <span className="header__wrap-nav">
                                <button type="button" className="header__wrap-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <AiOutlinePlusCircle />
                                    Add product
                                </button>
                                <Modal />
                            </span>
                        </div>
                    </div>
                    <div className='df inputsearch inputsearch1'>
                        <input className='form-control1' type="text" />
                        <span className='df filter1 filter2'>
                            <button>Filter <FaFilter /></button>
                            <NavLink to='/user'><AiOutlineMenuFold /></NavLink>
                            <NavLink to='/product'><CgMenuGridR /></NavLink>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <ul className='itemcard'>
                    {products.map(product => (
                        <li key={product.id}>
                            <img width={'200px'} height={'200px'} src={product.category.image} alt={product.category.name} />
                            <h4>{product.category.name}</h4>
                            <p>{product.price}</p>
                            <span>
                                <button type="button" className="header__wrap-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"> <AiFillEdit /></button>
                                <button><BsTrash3 /></button>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Product;
