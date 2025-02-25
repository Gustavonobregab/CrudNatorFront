'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import api from '../../services/api';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [termsAccepted, setTermsAccepted] = useState(false); // State para os termos

  const router = useRouter();

  const handleUUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(event.target.checked);
  };

  const singHandler = async (e: React.FormEvent) => { // async para lidar com a API
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!username) {
      newErrors.username = 'Nome de usuário obrigatório';
    }

    if (!email) {
      newErrors.email = 'Email obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    if (password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }

    if (!termsAccepted) {  // Validação dos termos
      newErrors.terms = 'Você deve aceitar os termos';
    }

    setErrors(newErrors);

    console.log(typeof(password))

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await api.post('users/singUp', {
          username, email, password, description
        });
        console.log('Resposta da API:', response.data);
        // Redirecionar ou fazer algo após o cadastro bem-sucedido
        //router.push('/login');  redireciona para a página de login
      } catch (error: any) {
        console.error('Erro no cadastro:', error.response?.data || error.message);
        // Lidar com erros de cadastro (exibir mensagens de erro, etc.)
        if (error.response?.data?.message) {
          setErrors({ ...errors, api: error.response?.data?.message });
        } else {
          setErrors({ ...errors, api: 'Ocorreu um erro ao cadastrar o usuário.' });
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-2xl shadow-lg w-96">
        <h1 className="text-3xl font-extrabold text-center mb-12">SingUp</h1>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Username" 
            className="w-full py-2 px-4 border border-gray-300 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleUUsernameChange}
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full py-2 px-4 border border-gray-300 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleEmailChange}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="on"
              className="w-full py-2 px-4 border border-gray-300 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" 
              onChange={handlePasswordChange}
              value={password}
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <textarea 
            placeholder="Description" 
            className="w-full py-2 px-4 border border-gray-300 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleDescriptionChange}
          ></textarea>
          <div className="flex items-center space-x-2 block">
              <input 
                id="terms" 
                type="checkbox" 
                className="w-4 h-4 mb-7" 
                checked={termsAccepted} // Bind com o state
                onChange={handleTermsChange} // Manipulador de mudança
              />
              <label htmlFor="terms" className="text-sm text-gray-600 mb-7">Accept terms</label>
              {errors.terms && <p className="text-red-500">{errors.terms}</p>} {/* Mensagem de erro */}
            </div>
            {errors.api && <p className="text-red-500">{errors.api}</p>} {/* Mensagem de erro da API */}
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
              onClick={(e) => singHandler(e)}
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
