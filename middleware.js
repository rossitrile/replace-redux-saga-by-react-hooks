import types from './typeAction'
import http from '../utils/httpService'

export const applyMiddleware = dispatch => action => {
  switch (action.type) {
    case types.LOAD_YOUTUBE_INFO:
      console.log('middleware in use')

      return http
        .get(`https://miashare.com/api/youtube/video?videoId=${action.payload}`)
        .then(res => {
            dispatch({
              type: types.LOAD_YOUTUBE_INFO_SUCESS,
              payload: res.data.data
        })
        .catch(err =>
          dispatch({
            type: types.LOAD_YOUTUBE_INFO_FAIL,
            payload: err.response.data
          })
        )
    default:
      dispatch(action)
  }
}
