import React from 'react'
import './chat.scss'
import { RootState, useAppSelector } from "./../../redux/store"
import InboxFrame from './InboxFrame'
import SendMessage from './SendMessage'
import { Link } from 'react-router-dom'
import {ChatContainer} from "./ChatContainer/ChatContainer"
import {UserTestReceiving} from "./fake_messages/fake_messages"


interface Room {
    room:string;
}


function Chat() {
    let room = useAppSelector((state: RootState) => state.persistedReducer).room
    let roomTest:Room = {
        room:room.room || 'Select a Room'
    }
    return (
        <div className='chat_box inbox__wrap wrapper'>
            <div className="inbox__content content">
                <div className="chat">
                    <InboxFrame />          
                    {ChatContainer(roomTest)}
                </div>
            </div>
        </div>
    );
}

export default Chat;
