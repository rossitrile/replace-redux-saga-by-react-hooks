import { createContext, useReducer } from 'react'
import { reducer, initialState } from './reducers'
import { useActions } from './action'
import { applyMiddleware } from './middleware'

const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const enhancedDispatch = applyMiddleware(dispatch)
  const actions = useActions(state, enhancedDispatch)

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider }
