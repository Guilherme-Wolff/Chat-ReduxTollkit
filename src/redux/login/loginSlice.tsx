import { createSlice, createAsyncThunk, PayloadAction, current } from "@reduxjs/toolkit"
import { SearchedNames } from "../../types/types"
//import {getUsersSearchDefault} from "../../redux/AsyncThunks/GetUsersSearchDefaultThunk"
import { apiSlice } from '../api/apiSlice'
import { useAppDispatch } from "../../redux/store"

interface UserLoged {
  user:{name:string};
}

let initialState: UserLoged = {
  user: {
    name:''
  }
};

//let listUsersSearched: SearchedNames[] = []
let listUsersSearched: SearchedNames[] = []
export const loginSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state: UserLoged,
      action: PayloadAction<UserLoged>) => {
      try {
            return {
              ...action.payload
            }
          }
      catch (e: any) {
        console.error(e.message)
        console.log("ERRO : recent_searches_array")
      }
    },
  }
})

export const { login,
}
  = loginSlice.actions

export const loginUsersSlice = loginSlice.reducer;
//export default recentUsersReducer;