//import * as _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider } from "react-query"

import { Provider } from "react-redux"
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { apiSlice } from "./redux/api/apiSlice"

//COMPONETS//
import Login from './Components/Registration/Login'
import Inbox from './Components/Chat/Inbox'
import Chat from './Components/Chat/Chat'
import {NotFound} from "./Components/NotFound/NotFound"
import {ProtectedRoute} from "./AuthContext/ProtectedRoute"
//REACT ROUTER 6

import { createBrowserRouter,RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path:"/",
    //element: <Inbox />,      
    element: <ProtectedRoute children={<Inbox />}/>,  
    errorElement:<NotFound />,
    children:[
      
    ],
  },
  {
    path:"/inbox/:room",
    //element:<Chat />
    element: <ProtectedRoute children={<Chat />}/>, 
    
  },
  {
    path:"/login",
    element:<Login />
  },
])

const queryClient = new QueryClient();


export const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(


  <QueryClientProvider client={queryClient}>
    <ApiProvider api={apiSlice} >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={ router}/>
      </PersistGate >
    </Provider>
    </ApiProvider>
  </QueryClientProvider>
);

reportWebVitals();
