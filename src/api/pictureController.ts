// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** deletePicture POST /api/picture/deletePicture */
export async function deletePictureUsingPost(
  body: API.DeletePictureQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseObject_>('/api/picture/deletePicture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getPictureById POST /api/picture/getPictureById */
export async function getPictureByIdUsingPost(
  body: API.PictureIdQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePictureDO_>('/api/picture/getPictureById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** getPictureVOById POST /api/picture/getPictureVOById */
export async function getPictureVoByIdUsingPost(
  body: API.PictureIdQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePictureVO_>('/api/picture/getPictureVOById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listPagePicture POST /api/picture/listPagePicture */
export async function listPagePictureUsingPost(
  body: API.ListPagePictureQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageVOListPagePictureVO_>('/api/picture/listPagePicture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** listPagePictureVO POST /api/picture/listPagePictureVO */
export async function listPagePictureVoUsingPost(
  body: API.ListPagePictureQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageVOPictureVO_>('/api/picture/listPagePictureVO', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** updatePicture POST /api/picture/updatePicture */
export async function updatePictureUsingPost(
  body: API.PictureUpdateQO,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseObject_>('/api/picture/updatePicture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  })
}

/** uploadPicture POST /api/picture/upload */
export async function uploadPictureUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.uploadPictureUsingPOSTParams,
  body: {},
  file?: File,
  options?: { [key: string]: any }
) {
  const formData = new FormData()

  if (file) {
    formData.append('file', file)
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele]

    if (item !== undefined && item !== null) {
      if (typeof item === 'object' && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ''))
        } else {
          formData.append(ele, JSON.stringify(item))
        }
      } else {
        formData.append(ele, item)
      }
    }
  })

  return request<API.BaseResponsePictureVO_>('/api/picture/upload', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  })
}
