'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from '../../services/api';
import { useDispatch } from 'react-redux';
import { login } from '../../store/Slices/HeaderSlice';
import { setLogin } from '../../store/Slices/LoginSlice';

interface User {
  email: string;
  token: string;
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const onLogin = (user: User) => {
    dispatch(login(user.email));
    dispatch(setLogin({ token: user.token, email: user.email }));
  }
  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const loginHandler = async () => {
    try {
      const response = await api.post('users/login', { email, password });
      onLogin({ token: response.data.token, email });
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-2xl shadow-lg w-96">
        <h1 className="text-3xl font-extrabold text-center mb-12">SignUp</h1>
        <form className="space-y-4"> {/* Diminui o espaçamento entre os campos */}
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full py-2 px-4 border border-gray-300 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full py-2 px-4 border border-gray-300 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleEmailChange}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full py-2 px-4 border border-gray-300 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handlePasswordChange}
          />
          <div className="flex items-center space-x-2 block">
            <input id="terms" type="checkbox" className="w-4 h-4 mb-7" />
            <label htmlFor="terms" className="text-sm text-gray-600 mb-7">Accept terms</label>
          </div>
          <div className="flex justify-between space-x-2">
            <button 
              type="button" 
              className="w-1/2 bg-red-400 text-white py-2 rounded-2xl shadow-lg hover:bg-red-500"
            >
              Clear
            </button>
            <button 
              type="button" 
              className="w-1/2 bg-green-400 text-white py-2 rounded-2xl shadow-lg hover:bg-green-500"
              onClick={loginHandler}
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
