import * as actionTypes from "../constants"

const initialState = {
  users: null,
  error: null,
  loading: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return {
        ...state,
        error: null,
        loading: true,
      }
    default:
      return state
  }
}

export default reducer
