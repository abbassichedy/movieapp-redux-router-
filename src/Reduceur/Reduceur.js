import {ADD_MOVIE,REMOVE_MOVIE,EDIT_MOVIE,FILTER_NAME} from '../Action/Actiontype'
import {movies} from '../data'
let initState={
    movies,
    searchname:"",
    rate:0
}
const movieReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_MOVIE:
        return {movies:[...state.movies,action.payload]}
        case REMOVE_MOVIE:
            return {movies:[...state.movies.filter((el,i)=>(el.id!==action.payload))]}
            case EDIT_MOVIE:
            return{movies:[...state.movies.map((el,i)=>(i === action.payloadIndex? {...action.payloadNewMovie}:el))]}
            case FILTER_NAME:
                return{...state,searchname:action.payload}

    default:
    return state;
    }
}

export default movieReducer