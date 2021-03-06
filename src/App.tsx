import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/css/index.css';
import Navbar from './Screens/Navbar';
import ShoppingCart from './Screens/ShoppingCart';
import Budgets from './Screens/Budgets';
import Home from './Screens/Home';
import ProductList from './Screens/ProductList';
import Footer from './components/Footer';
import Contacts from './Screens/Contacts';
import ProductDetail from './Screens/ProductDetail';
import Login from './Screens/Login';
import Favorites from './Screens/Favorites';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import Orders from './Screens/Orders';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {

    return (

        <Router>
            <Navbar />
            <div className="container m-w6xl mx-auto">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/e-commerce-app-frontend/' element={<Home />} />
                    <Route path='/products' element={<ProductList />} />
                    <Route path='/products/:title' element={<ProductDetail />} />
                    <Route path='/cart' element={<ShoppingCart />} />
                    <Route path='/favorites' element={
                        <RequireAuth>
                            <Favorites />
                        </RequireAuth>
                    }
                    />
                    <Route path='/budgets' element={<Budgets />} />
                    <Route path='/orders' element={< Orders />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/auth' element={<Login />} />
                </Routes>
                <Footer />
            </div >
        </Router>
    );
}

export default App;
