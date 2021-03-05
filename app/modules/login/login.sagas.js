import { call, put, select } from 'redux-saga/effects'

import LoginActions from './login.reducer'
import AccountActions from '../../shared/reducers/account.reducer'

export const selectAuthToken = (state) => state.login.authToken
// attempts to login
export function* login(api, { username, password }) {
  const authObj = {
    phoneNumber: '+252'+username,
    password: password,
  }

  const response = yield call(api.login, authObj)

  // success?
  if (response.ok) {
    const token =response.data;

    yield call(api.setAuthToken, token)
    yield put(LoginActions.loginSuccess(token))
    yield put(AccountActions.accountRequest())
    yield put({ type: 'RELOGIN_OK' })
  } else {
    yield put(LoginActions.loginFailure((response.data) || 'Bad credentials'))
  }
}
// attempts to logout
export function* logout(api) {
  yield call(api.removeAuthToken)
  yield put(AccountActions.accountRequest())
  yield put(LoginActions.logoutSuccess())
  yield put({ type: 'RELOGIN_ABORT' })
}
// loads the login
export function* loginLoad(api) {
  const authToken = yield select(selectAuthToken)
  // only set the token if we have it
  if (authToken) {
    yield call(api.setAuthToken, authToken)
  }
  yield put(LoginActions.loginLoadSuccess())
}
