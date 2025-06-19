// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** listPictureTagCategory GET /api/tag/tag_category */
export async function listPictureTagCategoryUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponsePictureTagCategory_>('/api/tag/tag_category', {
    method: 'GET',
    ...(options || {}),
  })
}
