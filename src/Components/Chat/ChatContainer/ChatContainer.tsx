import { Link } from "react-router-dom"
import { Receiving } from "../types/types"
import {InputMessages} from "../InputMessages/InputMessages"
import {ListMessages} from "../ListMessages/ListMessages"
import {useSocket} from '../Hooks/useSocket'

interface Room {
    room:string;
}

export const ChatContainer = (
    {
        room
       
    }:Room) => {
        const {SOCKET} = useSocket()
    let socket = SOCKET.socket
    socket.emit('select_room')
    return (
        <div className="chat__messages">
            <div className='chat__navbar'>
            <div className="fsad">
                        <span className='rotate180'>
                            <svg className='' aria-label="Icon &quot;arrow to down&quot;"
                                color="#fafafa" fill="#fafafa" height="20" role="img"
                                viewBox="0 0 24 24" width="20"><path
                                    d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z">
                                </path>
                            </svg>
                        </span>
                    </div>
                <Link to="/username"
                >
                    <div className="chat__navbar__profile">
                        {/*<img src="../images/users/1.jpg" alt="" /> */}
                        <h4 style={{ color: '#fff' }}>{room}</h4>
                    </div>
                </Link>
                <div className="chat__navbar__options">
                </div>
            </div>
            <ListMessages />
            <InputMessages />
        </div>
    )
}