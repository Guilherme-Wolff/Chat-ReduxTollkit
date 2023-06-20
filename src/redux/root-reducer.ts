
import { combineReducers } from "redux";
import {inputMessageSlice} from "./message_input/inputMessageSlice"
import {ChatMessageSlice} from "./chat_messages/MessagesSlice"
import {loginUsersSlice} from "./login/loginSlice"
import {SelectRoomSlice} from "./room/SelectRoomSlice"
export const rootReducer = combineReducers({
  chat_messages:ChatMessageSlice,
  auth:loginUsersSlice,
  room:SelectRoomSlice
  })

//export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer