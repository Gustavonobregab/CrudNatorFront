'use client'
import {React, useState} from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaHome, FaPlus } from 'react-icons/fa';
import { Menu, MenuButton, MenuItem, MenuItems, Legend } from '@headlessui/react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/Slices/HeaderSlice';

const Navbar = () => {
  const router = useRouter();
  const { hasUser, userEmail } = useSelector((state) => state.header);
  const [hasAlert, setAlert] = useState(false);
  const {isLogin} = useSelector((state) => state.Login);
  const dispatch = useDispatch();

  const handleAlert = () => {
    setAlert(!hasAlert);
  };

  const handleAlertLogin = () => {
    setAlert(!hasAlert);
    router.push('/login');
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(setLogon());
  };

  const profileDropdow = ( 
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 px-2 bg-transparent text-gray-800 border-none rounded-full cursor-pointer text-2xl transition duration-300 ease-in-out hover:bg-gray-100">
          <FaUser className="text-lg" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Legend className="block px-4 py-2 text-sm text-gray-700">
            Signed in as {userEmail}
            </Legend>
          </MenuItem>
          <MenuItem>
            <a
              onClick={() => router.push('/profile')}
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Account settings
            </a>
          </MenuItem>
          <form>
            <MenuItem>
              <button
                type="submit"
                onClick={onLogout}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
    );


  return (
    <header className="fixed top-0 left-0 h-screen w-16 bg-white shadow-md flex flex-col justify-center items-center p-4 z-10">
      <div className="grid gap-8">
        {/* Ícone de home */}
        <button
          onClick={() => router.push('/')}
          className="px-2 bg-transparent text-gray-800 border-none rounded-full cursor-pointer text-2xl transition duration-300 ease-in-out hover:bg-gray-100">
          <FaHome className="text-lg"/>
        </button>
        {/* Ícone de usuário para login/logout*/}
        {hasUser ? profileDropdow : (
          <button
            onClick={() => router.push('/login')} 
            className="px-2 bg-transparent text-gray-800 border-none rounded-full cursor-pointer text-2xl transition duration-300 ease-in-out hover:bg-gray-100"> 
            <FaUser className="text-lg" />
          </button>
        )}
        {/* Ícone de Criar post*/}
        {isLogin ?  <button
          onClick={() => router.push('/post')}
          className="px-2 bg-transparent text-gray-800 border-none rounded-full cursor-pointer text-2xl transition duration-300 ease-in-out hover:bg-gray-100">
          <FaPlus className="text-lg" />
        </button> : <button
          onClick={handleAlert}
          className="px-2 bg-transparent text-gray-800 border-none rounded-full cursor-pointer text-2xl transition duration-300 ease-in-out hover:bg-gray-100">
          <FaPlus className="text-lg" />
        </button> }

        {hasAlert && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg font-semibold mb-4">Você precisa estar logado para criar um post.</p>
              <div className="flex justify-end">
                <button
                  onClick={handleAlert}
                  className="w-1/2 bg-red-300 text-white py-2 mr-2 rounded-2xl shadow-lg hover:bg-red-400"
                >
                  Fechar
                </button>
                <button
                  onClick={handleAlertLogin}
                  className="w-1/2 bg-green-300 text-black py-2 rounded-2xl shadow-lg hover:bg-green-400"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header> 
  );
};

export default Navbar;
