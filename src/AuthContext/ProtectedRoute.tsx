import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { apiSlice } from '../redux/api/apiSlice'
import { RootState, useAppSelector } from "./../redux/store"

import { AuthContext } from "./AuthContext"
const useGetUsersQuery = apiSlice.endpoints.getAuthToken.useQuery



const useAuth = () => {
  return useContext(AuthContext);
};

export const ProtectedRoute = ({ children }: any) => {
  //const {data} = useGetUsersQuery('gettoken')
  let user = useAppSelector((state: RootState) => state.persistedReducer).auth
  console.log("UserP",user.user)
  //const s = useAuth()
  //const token = data.token
  //console.log("TOKEN", data)

  if (!user.user.name.length) {
    return <Navigate to="/login" replace />;
  }
  

  return children;
};


