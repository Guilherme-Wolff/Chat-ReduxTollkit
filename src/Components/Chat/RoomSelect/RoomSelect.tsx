import { Link } from "react-router-dom"

import { useAppDispatch } from "../../../redux/store"
import {
  update_room,
} from "../../../redux/room/SelectRoomSlice"

import { useSocket } from "../Hooks/useSocket"
import { useInfoAuth} from "../../../AuthContext/useInfoAuth"


interface IRoomSelect {
  logo:string;
  roomName:string;
}

export const RoomSelect = ({logo,roomName}:IRoomSelect) => {
  const { SOCKET,connectRoon,disconnectRoom } = useSocket()
  const pathUrl = window.location.href 

  let dispatch = useAppDispatch()
  let room = {
    room:roomName,
  }
  const { user_info } = useInfoAuth()
  const SelectRoom = () => {
    if(pathUrl === 'http://localhost:3000' || pathUrl === 'http://localhost:3000/'){
      disconnectRoom(user_info);
    }
    if(pathUrl.includes(`/${roomName}`)){
      return;
    }else{
      console.log("enstrando na sala")
      disconnectRoom(user_info)
      dispatch(update_room(room))
      //dispatch(update_room(user_info.room))
      
    }
  }
  
  return (
    <div className="users__frame">
    <Link reloadDocument onClick={SelectRoom} to={`/inbox/${roomName}`}>
      <div className="user">
        <img src={logo} alt="" />
        <div>
          <h5>{roomName}</h5>
        </div>
      </div>
    </Link>
  </div>
  )
}