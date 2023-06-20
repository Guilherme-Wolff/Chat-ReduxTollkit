
import { memo, useState } from "react";
import {
    size_input_increment_message,
} from "../../../redux/message_input/inputMessageSlice"
import {
    include_chat_message,
    include_socket_messages_array
} from "../../../redux/chat_messages/MessagesSlice"
import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"
import { Message } from "../types/types"

import io, { Socket } from 'socket.io-client'
import { useSocket } from "./useSocket"
import { useInfoAuth } from "../../../AuthContext/useInfoAuth"



const WS_DOMAIN: string = 'localhost'
const WS_PORT: string = '3001'
let socket: Socket;
export const useInputMessage = () => {
    const [message, setMesage] = useState('')
    const { user, room } = useInfoAuth()
    const { SOCKET } = useSocket()

    let user_info = {
        username: user.name,
        room: room
    }



    let size_input = useAppSelector((state: RootState) => state).input_message_size
    let MessagesArray = useAppSelector((state: RootState) => state.persistedReducer).chat_messages
    console.log('message_redux', MessagesArray)
    let dispatch = useAppDispatch()

    function IsValidUsernames(e: React.FormEvent<HTMLInputElement>) {
        let INPUT_SIZE = e.currentTarget.value.length;

        if (INPUT_SIZE > 0) {

            setMesage(e.currentTarget.value)
            console.log("state_msg", e.currentTarget.value)
            dispatch(size_input_increment_message(e.currentTarget.value.length));
        } else {
            dispatch(size_input_increment_message(0));
        }
    }

    const sendMessage = async (msg: Message) => {
        let userMessage = {
            room: room,
            username: user.name,
            message: msg
        }
        socket = SOCKET.socket
        socket.emit("message", userMessage, (response: any) => {
            console.log("resps", response)
            let messages_array_socket: Message[] = [];
            response.map((user_msg: any) => {
                console.log("ola")
                let msg = {
                    username: user_msg.username,
                    createAt: user_msg.createAt,
                    message: user_msg.message.message
                }
                messages_array_socket.push(msg)
                console.log("MSG : ", msg)
            })
            console.log("respsocket", response)

            dispatch(include_socket_messages_array(messages_array_socket));
        })
        console.log("sock", SOCKET)

        //dispatch(include_chat_message(msg))
        /*socket.emit('select_room', user_info, (response: any) => {
        let messages_array_socket: Message[] = [];
        response.map((user_msg: any) => {
          console.log("ola")
          let msg = {
            username: user_msg.username,
            createAt: user_msg.createAt,
            message: user_msg.message.message
          }
          messages_array_socket.push(msg)
          console.log("MSG : ", msg)
        })
        console.log("respsocket", response)
    
        dispatch(include_socket_messages_array(messages_array_socket));
      })*/
    }



    return {
        IsValidUsernames,
        sendMessage,
        size_input,
        message
    }
}

