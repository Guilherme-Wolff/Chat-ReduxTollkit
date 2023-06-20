
import { RootState, useAppSelector } from "./../redux/store"
import {userAuth,userRoom} from "../types/types"


export const useInfoAuth = () => {
    let {user}:userAuth = useAppSelector((state: RootState) => state.persistedReducer).auth
    let {room}:userRoom = useAppSelector((state: RootState) => state.persistedReducer).room
    console.log(user)
    let user_info = {
        username: user.name,
        room: room
      }


    return {
        user,
        room,
        user_info
    }
}