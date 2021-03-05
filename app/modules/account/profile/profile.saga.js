import { call, put } from 'redux-saga/effects'
import { callApi } from '../../../shared/sagas/call-api.saga'
import { v4 as uuidv4 } from 'uuid';

import ProfileActions from './Profile.reducer'
import AccountActions from '../../../shared/reducers/account.reducer'


export function* updateProfile(api, { user, picture,token }) {
     
    if(picture){
      const data = new FormData();
      data.append('file', picture);
    
      // make the call to the api
      const Credentials = call(api.fetchFileCredentials, picture)
      const fetchFileCredentials = yield call(callApi, Credentials)
      const uploadImage = call(api.uploadImage, data,fetchFileCredentials.data.uploadCredentials.url)
      const responseImage = yield call(callApi, uploadImage)
      const id = uuidv4();
      const photos = [{
        id: id,
        name: picture.name,
        sizeInBytes: picture.size,
        publicUrl: fetchFileCredentials.data.publicUrl,
        privateUrl : fetchFileCredentials.data.privateUrl,
        downloadUrl:fetchFileCredentials.data.downloadUrl,
        new: true,
      }]
      user.avatars = photos;
       const apiCall = call(api.updateProfile,{ data:user})
      const response = yield call(callApi, apiCall)
    
      // success?
      if (response.ok) {
        yield put(AccountActions.accountRequest())

        yield put(ProfileActions.profileUpdateSuccess(response.data))
        yield put(ProfileActions.profileDoneRequest())
      } else {
        yield put(ProfileActions.profileUpdateFailure(response.data))
      }
    }else{
    // make the call to the api
    
    const apiCall = call(api.updateProfile,{ data:user})
    const response = yield call(callApi, apiCall)
      // success?
      if (response.ok) {
        yield put(AccountActions.accountRequest())

        yield put(ProfileActions.profileUpdateSuccess(response.data))
        yield put(ProfileActions.profileDoneRequest())
      } else {
        yield put(ProfileActions.profileUpdateFailure(response.data))
        
      }
    }
    
  }