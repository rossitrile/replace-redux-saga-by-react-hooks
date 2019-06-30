import types from './typeAction'

export const useActions = (state, dispatch) => ({
  loadYoutubeInfo: data => {
    console.log('action in use')
    dispatch({ type: types.SET_LOADING_INDICATOR })
    dispatch({ type: types.LOAD_YOUTUBE_INFO, payload: data })
  }
})
