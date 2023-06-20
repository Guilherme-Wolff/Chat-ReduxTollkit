import React from 'react'
import './Frame.scss'
import { Link } from 'react-router-dom'
import { useSocket } from "./Hooks/useSocket"
import { Socket } from 'socket.io-client'
import { RoomSelect } from "./RoomSelect/RoomSelect"

let Rooms = [
    {
        logo: '../rooms_icons/cpp.svg',
        roomName: 'cpp'
    },
    {
        logo: '../rooms_icons/typescript.svg',
        roomName: 'typescript'
    }
]

function App() {
    //const {SOCKET} = useSocket()
    //SOCKET.socket;

    return (
        <div className='inbox__frames'>
            <div className="inbox__username">
                <div className='chat__username'>
                    <p>Rooms</p>
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
                </div>
            </div>
            <div className="users__wrap">
                {Rooms.map((room: any) => {
                    return (
                        RoomSelect(room)
                    )
                })}
            </div>
        </div>
    );
}

export default App;
