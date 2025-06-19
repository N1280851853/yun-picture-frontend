// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** deleteUserById POST /api/user/deleteUserById */
export async function deleteUserByIdUsingPost(
  body: API.UserDeleteQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseObject_>('/api/user/deleteUserById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getLoginUser POST /api/user/get/login */
export async function getLoginUserUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginUserVO_>('/api/user/get/login', {
    method: 'POST',
    ...(options || {}),
  })
}

/** getUserVOById POST /api/user/get/userVo */
export async function getUserVoByIdUsingPost(
  body: API.UserDeleteQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListPageUserVO_>('/api/user/get/userVo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getUserById POST /api/user/getUserById */
export async function getUserByIdUsingPost(
  body: API.UserDeleteQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUserDO_>('/api/user/getUserById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listPageUser POST /api/user/listPageUser */
export async function listPageUserUsingPost(
  body: API.ListPageUserQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageVOListPageUserVO_>('/api/user/listPageUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** login POST /api/user/login */
export async function loginUsingPost(body: API.UserLoginQO, options?: { [key: string]: any }) {
  return request<API.BaseResponseLoginUserVO_>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** logout POST /api/user/logout */
export async function logoutUsingPost(options?: { [key: string]: any }) {
  return request<API.BaseResponseObject_>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  })
}

/** register POST /api/user/register */
export async function registerUsingPost(
  body: API.UserRegisterQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseObject_>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** savaUser POST /api/user/savaUser */
export async function savaUserUsingPost(body: API.UserAddQO, options?: { [key: string]: any }) {
  return request<API.BaseResponseObject_>('/api/user/savaUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateUserById POST /api/user/updateUserById */
export async function updateUserByIdUsingPost(
  body: API.UserUpdateQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseObject_>('/api/user/updateUserById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
