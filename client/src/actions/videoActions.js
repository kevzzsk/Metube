import {GET_VIDEOS, VIDEOS_LOADING} from './types'
import axios from 'axios'

export const getVideos = () => dispatch => {
    dispatch(setVideoLoading());
    axios.get('/api/videos')
        .then(res =>
            dispatch({
                type:GET_VIDEOS,
                payload:res.data
            })
        )
}

export const setVideoLoading = () => {
    return{
        type: VIDEOS_LOADING
    }
}