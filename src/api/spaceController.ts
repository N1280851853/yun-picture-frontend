// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** deleteSpace POST /api/space/deleteSpace */
export async function deleteSpaceUsingPost(body: API.SpaceIdQO, options?: { [key: string]: any }) {
  return request<API.BaseResponseObject_>('/api/space/deleteSpace', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getSpaceVOById POST /api/space/getSpaceVOById */
export async function getSpaceVoByIdUsingPost(
  body: API.SpaceIdQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseSpaceVO_>('/api/space/getSpaceVOById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listSpaceLevel GET /api/space/listLevel */
export async function listSpaceLevelUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListSpaceLevelVO_>('/api/space/listLevel', {
    method: 'GET',
    ...(options || {}),
  })
}

/** listPageSpaceVO POST /api/space/listPageSpaceVO */
export async function listPageSpaceVoUsingPost(
  body: API.ListPageSpaceQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageVOListPageSpaceVO_>('/api/space/listPageSpaceVO', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** saveSpace POST /api/space/saveSpace */
export async function saveSpaceUsingPost(body: API.SaveSpaceQO, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/api/space/saveSpace', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updateSpace POST /api/space/updateSpace */
export async function updateSpaceUsingPost(
  body: API.UpdateSpaceQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseObject_>('/api/space/updateSpace', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}
