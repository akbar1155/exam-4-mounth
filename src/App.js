import './App.css';
import { Routes, Route } from 'react-router-dom';
import Users from './Pages/user/Users';
import Home from './Pages/home/Home';
import Product from './Pages/product/Product';
function App() {
    return (
        <Routes>
            <Route element={<Home />} path=''/>
            <Route element={<Users />} path='user'/>
            <Route element={<Product />} path='product'/>
        </Routes>
    );
}

export default App;
