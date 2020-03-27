import * as actionTypes from "../constants"

const fetchUser = user => ({
  type: actionTypes.FETCH_USERS,
  user,
})

export const userActions = {
  fetchUser,
}
