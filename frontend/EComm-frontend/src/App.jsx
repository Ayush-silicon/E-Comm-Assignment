import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Layout/Header';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ItemList from './components/Items/ItemList';
import Cart from './components/Cart/Cart';
import ProtectedRoute from './components/Layout/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route 
                  path="/items" 
                  element={
                    <ProtectedRoute>
                      <ItemList />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/cart" 
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  } 
                />
                <Route path="*" element={<Navigate to="/items" replace />} /> 
              </Routes>
            </main>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;