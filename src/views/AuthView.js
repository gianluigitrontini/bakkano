import React, { useState } from 'react';
import Header from '../components/Global/Header';
import { users } from '../data';

function AuthView() {
  const [authValue, setAuthValue] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => authValue.email === user.email);
    const password = users.find((user) => authValue.password === user.password);
    if (!user) {
      console.log('Utente non trovato');
    }
    if (user && password) {
      console.log(user);
    }
  };

  const EyeIcon = ({ open }) =>
    open ? (
      <svg style={{ width: '24px', height: '24px' }} viewBox='0 0 24 24'>
        <path
          fill='currentColor'
          d='M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z'
        />
      </svg>
    ) : (
      <svg style={{ width: '24px', height: '24px' }} viewBox='0 0 24 24'>
        <path
          fill='currentColor'
          d='M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z'
        />
      </svg>
    );
  const AuthForm = () => {
    return (
      <form
        onSubmit={(e) => handleLogin(e)}
        className='flex flex-col w-full md:w-1/2 lg:w-1/3 h-auto bg-gray-100 p-4'>
        <label htmlFor='auth-login-email' className='w-full mb-2'>
          <span className='block text-gray-800 mb-2'>Email</span>
          <input
            value={authValue.email}
            onChange={(e) =>
              setAuthValue({ ...authValue, email: e.target.value })
            }
            type='email'
            id='auth-login-email'
            className='w-full p-2'
            required
          />
        </label>
        <label htmlFor='auth-login-email' className='w-full relative mt-2'>
          <span className='block text-gray-800 mb-2'>Password</span>
          <input
            value={authValue.password}
            onChange={(e) =>
              setAuthValue({ ...authValue, password: e.target.value })
            }
            type={`${showPassword ? 'text' : 'password'}`}
            id='auth-login-password'
            className='w-full p-2 pr-12'
            required
          />
          <span
            className='absolute bottom-2 right-4 cursor-pointer'
            onClick={() => setShowPassword(!showPassword)}>
            <EyeIcon open={showPassword} />
          </span>
        </label>
        <button
          type='submit'
          className='my-4 text-span px-4 py-2 bg-red-600 hover:bg-red-700 cursor-pointer tracking-wide transition-colors duration-200 transform text-white focus:outline-none focus:bg-red-500 lg:mr-auto'>
          Entra
        </button>
      </form>
    );
  };
  return (
    <>
      <Header />
      <main className='container mt-header h-full flex justify-center items-center flex-1'>
        {AuthForm()}
      </main>
    </>
  );
}

export default AuthView;
