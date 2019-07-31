import { call, put } from 'redux-saga/effects'
import GithubActions from '../Redux/GithubRedux'
import { NavigationActions } from 'react-navigation';

export function * searchJobs (api, { queryString }) {
  // make the call to the api
  const response = yield call(api.searchJobs, queryString)

  if (response.ok) {
    // do data conversion here if needed
    yield put(GithubActions.searchJobSuccess(response.data))
  } else {
    yield put(GithubActions.searchJobFailure())
  }
}
