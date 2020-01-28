import {ADD_MOVIE,REMOVE_MOVIE,EDIT_MOVIE ,FILTER_NAME} from './Actiontype'
 export const addmovie =(newMovie)=>({
   type:ADD_MOVIE,
   payload:newMovie
 })
 export const removemovie=(id)=>({
type:REMOVE_MOVIE,
payload:id
 })
 export const editmovie=(id,newMovie)=>({
     type:EDIT_MOVIE,
     payloadIndex:id,
     payloadNewMovie:newMovie
 })
 export const filtername =(searchname)=>({
   type:FILTER_NAME,
   payload:searchname

 })