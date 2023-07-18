import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import useLoginMutation from '../hooks/useLogin';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const loginMutation = useLoginMutation();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (email && password)
        await loginMutation.mutateAsync({ email, password });
      // Login successful, you can perform any necessary actions here (e.g., redirect)
    } catch (error) {
      // Handle the error (e.g., show an error message)
      console.error(error.message);
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <section className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Log in to your account
              </h3>
              <p className="">
                Don't have an account?{' '}
                <Link
                  to="sign-in"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                autoComplete="off"
                type="email"
                required
                onChange={handleEmailChange}
                value={email || ''}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                autoComplete="off"
                type="password"
                required
                onChange={handlePasswordChange}
                value={password || ''}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Sign in
            </button>
            <div className="text-center">
              <Link to="#" className="hover:text-indigo-600">
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginScreen;
