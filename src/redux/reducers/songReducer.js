import {createReducer} from "reduxsauce";
import Types from "../types";

const initialState = {
  songs: null,
  error: "",
};

export const songs=(state = initialState, action)=> {
  return {...state,songs:action.payload}
}
export const error=(state = initialState, action) =>{
  return {...state,error:action.payload}
}
export const HANDLERS = {
  [Types.SONGS]:songs,
  [Types.ERRORS]:error
}

export default createReducer(initialState,HANDLERS);
