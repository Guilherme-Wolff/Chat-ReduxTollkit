import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Receiving,Message} from "../../Components/Chat/types/types"
import {fake_messages} from "../../Components/Chat/fake_messages/fake_messages"

interface RoomSelect {
    room:string;
}
let room:RoomSelect = {
    room:'',
} 

export const SelectRoom = createSlice({
  name: 'room',
  initialState: room,
  reducers: {
    update_room: (state:RoomSelect,
      action: PayloadAction<RoomSelect>) => {
      try {
          return {
            ...action.payload
          }
        
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
    update_room,
  }  = SelectRoom.actions

export const SelectRoomSlice = SelectRoom.reducer;