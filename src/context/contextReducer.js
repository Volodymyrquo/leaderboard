export const initialState = {
  leadersList: [],
  userInfo: {
    grow_this_month: null,
    rank: null,
    reward: null,
  },
}

const contextReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LEADERS':
      return { ...state, leadersList: action.payload }
    case 'ADD_LEADERS':
      return {
        ...state,
        leadersList: [...state.leadersList, ...action.payload],
      }
    case 'SET_USER_INFO':
      return { ...state, userInfo: action.payload }
    default:
      return state
  }
}

export default contextReducer
