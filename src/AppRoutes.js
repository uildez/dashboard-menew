import React from 'react'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import { Dashboard, Client, Delivery, Order, Products, Storage, Suport } from './pages'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/clients" element={<Client />} />
                <Route exact path="/delivery" element={<Delivery />} />
                <Route exact path="/order" element={<Order />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/storage" element={<Storage />} />
                <Route exact path="/suport" element={<Suport />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes