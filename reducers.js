import types from './typeAction'

const initialState = {
  loading: false,
  youtubeInfo: null,
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_YOUTUBE_INFO_SUCESS:
      console.log('store in use')
      return { ...state, youtubeInfo: action.payload, loading: false }
    case types.LOAD_YOUTUBE_INFO_FAIL:
      return { ...state, loading: false, error: action.payload }
    case types.SET_LOADING_INDICATOR:
      return { ...state, loading: true }
  }
}

export { initialState, reducer }
