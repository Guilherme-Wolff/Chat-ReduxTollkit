import './login.scss'
import { Link, Navigate, redirect } from 'react-router-dom'
import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import {
  login
} from "../../redux/login/loginSlice"
import { useAppDispatch } from "../../redux/store"

import { RootState, useAppSelector } from "../../redux/store"

import {simbols} from "./simbols"

function App() {
  let dispatch = useAppDispatch()
  const pathUrl = window.location.href 
  console.log("url",pathUrl)
  


  /*const { currentUser } = useSelector(
  (rootReducer: any) => rootReducer.userReducer)

  console.log("CURRENT_USER_LOGIN ", currentUser);*/
  //let dispatch = useDispatch()

  const [usernameValid,
    SetUsernameValid] = useState(false)

  const [usernameValue,
    SetUsernameValue] = useState('')

  const [formValid,
    SetFormValid] = useState(false)

  const [redirectHome,
    SetRedirectHome] = useState(false)


  const LoginUser = (e: FormEvent) => {
    e.preventDefault()
    const postData = {
      user:{name:usernameValue}
    };
    SetRedirectHome(true)
    
    /*axios.post(`http://localhost:3001/auth/login/`,
      postData)
      .then(res => {
        console.log(res)
        SetRedirectHome(true)
      })
      .catch(err => {
        console.log(postData)
        console.log(err)
      })*/
      dispatch(login(postData))
  }
  const contain_simbol = (name:string) => {
    
    simbols.map((s:string) => {
      if(name.includes(s)){
        console.log("teste_",s)
        SetUsernameValid(false)
      }
    })
  }

  function IsValidUsername(e:
    React.FormEvent<HTMLInputElement>) {
    if (e.currentTarget.value.length > 1 && e.currentTarget.value.length < 20) {
      SetUsernameValid(true)
      SetUsernameValue(e.currentTarget.value)
      contain_simbol(e.currentTarget.value)
      
    }
    else{
      SetUsernameValid(false)
      contain_simbol(e.currentTarget.value)
    }
  }


  useEffect(() => {
    if (usernameValid) {
      SetFormValid(true)
    } else {
      SetFormValid(false)
    }
  }, [usernameValid])
  
  let user = useAppSelector((state: RootState) => state.persistedReducer).auth
  if(pathUrl.includes('/login') && user.user.name.length > 0){
    return <Navigate to="/" replace />;
   
  }


  return (
    <div className='main-login'>
      <div className="registration__system">
        {redirectHome && <Navigate replace to="/" />}
        <div className="registration__system__login">
          <Link to="/">
            <img src="../images/message_image.png" alt="" />
          </Link>
          <form onSubmit={(e) => LoginUser(e)}>
            <input
              onChange={
                (e) => {
                  IsValidUsername(e)
                }
              }
              type="text"
              placeholder="name"
            />
            <button style={formValid ? { opacity: "1", cursor: "pointer" } : { opacity: ".7" }}
              disabled={!formValid}>Login
            </button>
            
          </form>
        </div>
      </div>
    </div>
  )
}


export default App