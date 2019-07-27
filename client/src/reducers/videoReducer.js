import {GET_VIDEOS , VIDEOS_LOADING} from '../actions/types'


const initialState = {
    videos: [],
    loading: false
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_VIDEOS:
            return {
                ...state,
                videos:action.payload,
                loading:false
            }
        case VIDEOS_LOADING:
          return{
            ...state,
            loading: true
          }
        default:
            return state;
    }

}