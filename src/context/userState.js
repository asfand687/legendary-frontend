import React, { createContext, useReducer } from 'react'
import userReducer from './userReducer'

// Initial state
const initialState = {
  user: {
    username: '',
    email: ''
  }
}

// Create context
export const UserContext = createContext(initialState);

// Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const setUser = (user) => {
    dispatch({
      type: 'SET_USER',
      payload: user
    });
  }

  return (<UserContext.Provider value={{
    user: state.user,
    setUser
  }}>
    {children}
  </UserContext.Provider>);
}