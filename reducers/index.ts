import {combineReducers} from "redux";
import {tick} from "./tick";

export const reducers = combineReducers( {
   tick: tick
});