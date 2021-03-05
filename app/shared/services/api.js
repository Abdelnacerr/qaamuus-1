// a library to wrap and simplify api calls
import apisauce from 'apisauce'

import AppConfig from '../../config/app-config'

// our "constructor"
const create = (baseURL = AppConfig.apiUrl) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    timeout: 10000,
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const setAuthToken = (userAuth) => api.setHeader('Authorization', 'Bearer ' + userAuth)
  const removeAuthToken = () => api.deleteHeader('Authorization')
  const login = (userAuth) => api.post('auth/sign-in-phone', userAuth)
  const register = (user) => api.post('auth/sign-up-phone', user)
  const verification = (code) => api.put('auth/verify-phone', code)
  const ResendCode = (phoneNumber) => api.post('auth/send-phone-verification', phoneNumber)

  const sendPasswordReset = (data) => api.post('auth/send-password-reset-phone', data)
  const passwordReset = (user) => api.put('auth/password-reset-phone', user)

  const getAccount = () => api.get('auth/me')
  const updateProfile= (data) => api.put('auth/profile', data)
  const uploadImage =  (data, url) => api.post(url, data,  { headers: { 'Content-Type': 'multipart/form-data' } })
  const fetchFileCredentials= (picture )=> api.get(`/tenant/${picture.tenantId}/file/credentials`,
  {filename: picture.name,
  storageId: picture.id,
  },)

  const updateAccount = (account) => api.put('auth/change-password', account)
  const changePassword = (currentPassword, newPassword) =>
    api.post(
      'api/account/change-password',
      { currentPassword, newPassword },
      { headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/plain, */*' } },
    )

  const getUser = (userId) => api.get('api/users/' + userId)
  const getUsers = (options) => api.get('api/users', options)
  const createUser = (user) => api.post('api/users', user)
  const updateUser = (user) => api.put('api/users', user)
  const deleteUser = (userId) => api.delete('api/users/' + userId)

  const getSubjects = (user_id) => api.get(`/subjects`)
  const getSubject = (id) => api.get(`/subject/${id}`)
  const getPayments = (company) => api.get('api/payment/'+company)
  const getQuestions = (lessonId) => api.get(`/lesson/${lessonId}/questions`)
  const askQuestion = (question) => api.post(`/question/new`, question)
  const replayQuestion = (replay) => api.post(`/question/reply`, replay)
  const getNotifications = () => api.get(`/notifications/all`)
  const readNotification = (notificationId) => api.post(`/notification/read`,{id:notificationId})
  const finishVideo = (video) => api.post(`/seconds/${video.lesson_id}/${video.user_id}`,{seconds:video.seconds, completed:1})

  // ------
  // ignite-jhipster-api-method-needle

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    getSubjects,
    getSubject,
    getPayments,
    getQuestions,
    askQuestion,
    replayQuestion,
    getNotifications,
    readNotification,
    finishVideo,
    // a list of the API functions from step 2
    createUser,
    updateUser,
    getUsers,
    getUser,
    deleteUser,
    // ignite-jhipster-api-export-needle
    setAuthToken,
    removeAuthToken,
    login,
    register,
    verification,
    ResendCode,
    sendPasswordReset,
    passwordReset,
    getAccount,
    updateProfile,
    uploadImage,
    fetchFileCredentials,
    
    updateAccount,
    changePassword,
  }
}

// let's return back our create method as the default.
export default {
  create,
}
