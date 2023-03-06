import React, { useEffect } from 'react';
import { FaRegMoon, FaFilter } from 'react-icons/fa'
import { TbArrowsDownUp } from 'react-icons/tb';
import { AiOutlinePlusCircle, AiOutlineMenuFold, AiFillEdit } from 'react-icons/ai'
import { CgMenuGridR } from 'react-icons/cg'
import { BsTrash3 } from 'react-icons/bs';
import "./product.css";
import ".././user/Users.css"
import "../../Components/nav/Navbar.css"
import Navbar from '../../Components/nav/Navbar';
import modalpr from '../../Components/modal/modalpr';
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [Products, setProducts] = React.useState(JSON.parse(window.localStorage.getItem('Products')) || []);
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then((response) => {
                return response.json();
            }).then((data) => {
                window.localStorage.setItem('Products', JSON.stringify(data))
                setProducts(data)
            });
    }, [])



    const handleDeleteTodo = (evt) => {
        const todoId = evt.target.dataset.todoId
        const filteredTodos = Products.filter(row => row.id != todoId - 0)
        setProducts([...filteredTodos]);
        window.localStorage.setItem('Products', JSON.stringify([...filteredTodos]))
    }

    // const Products = () => {
    //     const [products, setProducts] = React.useState([]);

    //     fetch('https://api.escuelajs.co/api/v1/products')
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setProducts(data)
    //         });
    return (
        <div className='product1'>
            <Navbar />
            <div className='pruduct2'>
                <div className='navbar1'>
                    <div className='df usernavbar usernavbar1'>
                        <h1>product</h1>
                        <div className='addproduct'>
                            <FaRegMoon />
                            <span className="header__wrap-nav">
                                <button type="button" className="header__wrap-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <AiOutlinePlusCircle />
                                    Add product
                                </button>
                                <modalpr Products={Products} setProducts={setProducts}/>
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
                    {Products.map(product => (
                        <li key={product.id}>
                            <img width={'200px'} height={'200px'} src={product.category.image} alt={product.category.name} />
                            <h4>{product.category.name}</h4>
                            <p>{product.price}</p>
                            <span>
                                <button type="button" className="header__wrap-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"> <AiFillEdit /></button>
                                <button type='button' data-todo-id={product.id} onClick={handleDeleteTodo}>delete</button>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Products;
