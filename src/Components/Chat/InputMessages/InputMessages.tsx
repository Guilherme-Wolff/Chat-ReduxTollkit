import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useInputMessage } from "../Hooks/useInputMessage"
import { useAppDispatch } from "../../../redux/store"
import {resetInput} from "../utils/utils"
import {useSocket} from "../Hooks/useSocket"

let UserMessageTest = {
  own:true,
  avatar:'teste',
  id: 4,
  message:'testing'
}

const generateUsermessageTest =(msg:string) =>{
  return {
    own:true,
    avatar:'teste',
    id: 4,
    message:msg
  }
}

export const InputMessages = (): JSX.Element => {
  const { message,size_input, IsValidUsernames,sendMessage } = useInputMessage()
  console.log("state_msg2", message)
  
  const keyEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if (e.key === "Enter"){
      console.log("é enter")
      UserMessageTest.message = e.currentTarget.value
      if(size_input > 0){
        sendMessage(generateUsermessageTest(e.currentTarget.value))
      }
      resetInput(e)
    }
  }



  return (
    <>
      <div className="sender__inputs">
        <div className="sender__input">
          <div className="icon__with__padding">
            <svg aria-label="smiley" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
          </div>
          <input id="input_messages" type="text" placeholder='Write a message...'
            onChange={(e) => {
              IsValidUsernames(e)            
            }}
            onKeyDown={keyEnterPress}
          />
          {/*<div className={size_input === 0 ? `likeanother` : 'likeanother_hide'}>
            <div className="icon__with__padding">
              <label htmlFor="senderupload" className='sender__upload__icon'>
                <svg aria-label="Add photo or video" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z" fill-rule="evenodd"></path><path d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path><path d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              </label>
              <input id='senderupload' type="file" style={{ display: "none" }}
              />
            </div>
            <div className="icon__with__padding">
              <svg aria-label="Like" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
            </div>
          </div>*/}
          <div>
            <input
              id="input_submit"
              className={size_input > 0 ? 'button_submit' : 'button_submit_hide'}
              type="submit"
            />
          </div>
        </div>
      </div>
    </>
  )

}