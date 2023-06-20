import io, { Socket } from 'socket.io-client'
import { useInfoAuth } from "../../../AuthContext/useInfoAuth"
import { Message } from "../types/types"
import {
    include_socket_messages_array
} from "../../../redux/chat_messages/MessagesSlice"
import { RootState, useAppSelector, useAppDispatch } from "../../../redux/store"
import { ObjectInArrayOfObject } from "../../../utils/functions"

const WS_DOMAIN: string = 'localhost'
const WS_PORT: string = '3001'
const WS_URL_DEV:string = `http://${WS_DOMAIN}:${WS_PORT}`
const WEBSOCKET_URL:string = process.env.REACT_APP_SOCKETIO_URL || "not-found"
interface SOCKET {
    socket: Socket;
}

export const useSocket = () => {
    let dispatch = useAppDispatch()
    let MessagesArray = useAppSelector((state: RootState) => state.persistedReducer).chat_messages
    let msgs = ObjectInArrayOfObject(MessagesArray)
    const last_message = msgs[msgs.length - 1]
    console.log("ultima",last_message)
    const socket = io(WEBSOCKET_URL, { transports: ["websocket"] });

    let SOCKET: SOCKET = {
        socket: socket
    }

    const checkForNewMessages = (user: any): boolean => {
        let socket = SOCKET.socket
        let resp_: boolean = false
        if (msgs.length) {
            setInterval(() => {
                socket.emit('verify_new_messages', user, (response: any) => {
                    if (response.status === false) {
                        console.log("EXISTS : ",response)
                        return resp_ = false;
                        
                    }
                }
                )
            }, 1000);
            
        }else{
            return resp_ = true;
        }

        return resp_ = false;
    }


    const connectRoon = (user: any) => {
        let socket = SOCKET.socket

        setInterval(() => {
            //let exist_message: boolean = checkForNewMessages(last_message)
            //console.log("EXISTS", exist_message)
            //if (exist_message || true) {
                socket.emit('select_room', user, (response: any) => {
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

                }
                )
           // }
        }, 1000);
    }

    const disconnectRoom = (user_info: any) => {
        let socket = SOCKET.socket


        socket.emit('disconnectforce', user_info, (response: any) => {
            console.log("disconectando")
        }
        )
    }

    return {
        SOCKET,
        disconnectRoom,
        connectRoon,

    }
}