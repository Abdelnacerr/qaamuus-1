import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  profileUpdateRequest: ['user', 'picture', 'token'],
  profileUpdateSuccess: ['profile'],
  profileUpdateFailure: ['error'],
  profileDoneRequest: [''],

   
})

export const ProfileTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  error: null,
  fetching: false,
  profile:null,
  
})

/* ------------- Reducers ------------- */

// we're attempting to register
export const request = (state) => state.merge({ fetching: true , profile:null, error:null})

// we've successfully registered
export const success = (state,{profile}) => state.merge({ fetching: false, error: null, profile })

// we've had a problem registering
export const failure = (state, { error }) => state.merge({ fetching: false, error, profile:null })

export const profileDoneRequest = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PROFILE_UPDATE_REQUEST]: request,
  [Types.PROFILE_UPDATE_SUCCESS]: success,
  [Types.PROFILE_UPDATE_FAILURE]: failure,
  [Types.PROFILE_DONE_REQUEST]: profileDoneRequest,

})

/* ------------- Selectors ------------- */
