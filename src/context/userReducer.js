const state = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: {
          username: action.payload.username,
          email: action.payload.email
        }
      }
    default:
      return state;
  }
}

export default state