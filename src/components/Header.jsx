'use client'
import {React} from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaHome, FaPlus } from 'react-icons/fa';
import { Menu, MenuButton, MenuItem, MenuItems, Legend } from '@headlessui/react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/Slices/HeaderSlice';
import { setLogon } from '../store/Slices/LoginSlice';

const Navbar = () => {
  const router = useRouter();
  const { hasUser, user } = useSelector((state) => state.header);
  const dispatch = useDispatch();

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
            Signed in as {user}
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
        {/* Ícone de pesquisa 
        <div>
          <button onClick={() => handlerModal()} className="px-2 bg-transparent text-gray-800 border-none rounded-full cursor-pointer text-2xl transition duration-300 ease-in-out hover:bg-gray-100">
            <FaSearch className="text-lg" />
          </button>
          {modal && (
            <div className="fixed left-14">
              <div className="bg-white p-6 rounded-md shadow-md flex flex-col">
                <input type="text" placeholder="Pesquisar" className="w-full self-center p-2" />
                <button
                    className="text-white bg-black hover:bg-slate-300 hover:text-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center m-3"
                    onClick={() => handlerModal()}>
                    Search
                </button>
              </div>
            </div>
          )}
        </div>*/}
        {/* Ícone de Criar post*/}
        <button
          onClick={() => router.push('/posts')}
          className="px-2 bg-transparent text-gray-800 border-none rounded-full cursor-pointer text-2xl transition duration-300 ease-in-out hover:bg-gray-100">
          <FaPlus className="text-lg" />
        </button>
      </div>
    </header> 
  );
};

export default Navbar;
