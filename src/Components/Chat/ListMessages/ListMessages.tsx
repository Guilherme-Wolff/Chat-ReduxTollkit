

import { Message } from "../types/types"
import { fake_messages } from "../fake_messages/fake_messages"
import { MessageCard } from "../Message/MessageCard"
import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"
import {
  include_chat_message,
  include_socket_messages_array
} from "../../../redux/chat_messages/MessagesSlice"
import { ObjectInArrayOfObject } from "../../../utils/functions"
import { useSocket } from "../Hooks/useSocket"
import { useInfoAuth } from "../../../AuthContext/useInfoAuth"
import { useEffect, useState } from "react"


let messages: Message[] = fake_messages.messagelist;

export const ListMessages = () => {
  const [connect,setConnect] = useState(false)
  const { user_info } = useInfoAuth()
  const { SOCKET,connectRoon } = useSocket()
  let socket = SOCKET.socket
  let MessagesArray = useAppSelector((state: RootState) => state.persistedReducer).chat_messages
  let msgs = ObjectInArrayOfObject(MessagesArray)
  const last_message = msgs[msgs.length - 1]
  console.log("ultima",last_message)
  useEffect(()=> {
    if(!connect){
      connectRoon(user_info)
      setConnect(true)
    }
  },[])
  
  
  return (
    <div className="own__chat">

      {msgs.reverse().map((msg: Message) => {
        return (
          MessageCard(msg)
        )
      })}
    </div>
  )
}