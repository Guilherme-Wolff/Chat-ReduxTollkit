import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Receiving,Message} from "../../Components/Chat/types/types"
import {fake_messages} from "../../Components/Chat/fake_messages/fake_messages"

let state_:Receiving = fake_messages
let messages:Message[] = [] 

export const ChatMessages = createSlice({
  name: 'chat_messages',
  initialState: messages,
  reducers: {
    include_chat_message: (state:Message[],
      action: PayloadAction<Message>) => {
      try {
          return [
            ...state,
            action.payload
          ]
        
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : include_chat_message")
      }
    },
    include_socket_messages_array: (state:Message[],
      action: PayloadAction<Message[]>) => {
      try {
          return [
            ...action.payload
          ]
        
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : include_chat_message")
      }
    },

    /*delete_chat_message: (state:Message[],
      action: PayloadAction<Message>) => {
      try {
          return 
            state.push(action.payload)
          
      }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : size_input_increment")
      }
    },*/
  },

})

export const { 
  include_chat_message,
  include_socket_messages_array
  //delete_chat_message
  }  = ChatMessages.actions

export const ChatMessageSlice = ChatMessages.reducer;