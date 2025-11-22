import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../store/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);
  
  function handleLogin() {
    dispatch(login({
      isAuth: true,
      user: {
        id: 1,
        name: "shukurullo",
        age: 16,
        address: "Tashkent"
      }
    }));
  }
  
  function handleLogout() {
    dispatch(logout());
  }
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
       
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MyApp
            </h1>
          </div>
          
          <div className="flex items-center gap-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/todo" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              Todo
            </NavLink>
            
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              Products
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              About
            </NavLink>
            
            <NavLink 
              to="/profile" 
              className={({ isActive }) => 
                `px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`
              }
            >
              Profile
            </NavLink>
          </div>
          
 
          <div className="flex-shrink-0">
            {isAuth ? (
              <button 
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 hover:shadow-lg transform hover:scale-105 font-medium"
                onClick={handleLogout}
              >
                Log out
              </button>
            ) : (
              <button 
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 hover:shadow-lg transform hover:scale-105 font-medium"
                onClick={handleLogin}
              >
                Log in
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;