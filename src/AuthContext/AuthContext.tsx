
import React, { useEffect, useRef, useState,createContext } from "react";

import {Navigation, RouterProvider, Routes } from "react-router-dom";
import {router} from "../index"
import { RootState, useAppSelector, useAppDispatch } from "./../redux/store"

export const AuthContext = createContext(null);

const App = () => {
  
  const [token, setToken] = useState<any>();
  let user = useAppSelector((state: RootState) => state.persistedReducer).auth
  console.log('USUARIO_ATUAL',user)

  const fakeAuth = () :any =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });
  
  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
  };

  const handleLogout = () => {
    setToken('');
  };

  const value = {
    user
  };


  return (
    <AuthContext.Provider value={token}>
      <RouterProvider router={ router}/>
    </AuthContext.Provider>
  );
};