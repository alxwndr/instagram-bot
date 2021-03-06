import axios from 'axios'
import { FETCH_USER, FETCH_USER_STATS, FETCH_USER_PARAMS } from './types'

export const fetchUserInstagramStats = (email) => {
  return function (dispatch, email) {
    axios.get('/api/stats', { email })
      .then(res => dispatch({
        type: FETCH_USER_STATS,
        payload: res.data
      }))
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchUserParams = (email) => {
  return function (dispatch, email) {
    axios.get('/api/current_params', { email })
      .then(res => dispatch({
        type: FETCH_USER_PARAMS,
        payload: res.data
      }))
      .catch(err => {
        console.log(err)
      })
  }
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
}
