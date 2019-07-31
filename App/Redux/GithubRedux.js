import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  searchJobRequest: ['queryString'],
  searchJobSuccess: ['jobs'],
  searchJobFailure: null
})

export const GithubTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  jobs: [],
  fetching: false,
  error: null,
  totalPage: 1
})

/* ------------- Selectors ------------- */

export const GithubSelectors = {
  selectAvatar: state => state.github.avatar
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, { queryString }) =>
  state.merge({ fetching: true, queryString })

// successful avatar lookup
export const success = (state, action) => {
  const { jobs } = action
  return state.merge({ fetching: false, error: null, jobs })
}

// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_JOB_REQUEST]: request,
  [Types.SEARCH_JOB_SUCCESS]: success,
  [Types.SEARCH_JOB_FAILURE]: failure
})
