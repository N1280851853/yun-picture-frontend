declare namespace API {
  type BaseResponseListPageUserVO_ = {
    code?: number
    data?: ListPageUserVO
    message?: string
  }

  type BaseResponseLoginUserVO_ = {
    code?: number
    data?: LoginUserVO
    message?: string
  }

  type BaseResponseObject_ = {
    code?: number
    data?: Record<string, any>
    message?: string
  }

  type BaseResponsePageVOListPagePictureVO_ = {
    code?: number
    data?: PageVOListPagePictureVO_
    message?: string
  }

  type BaseResponsePageVOListPageUserVO_ = {
    code?: number
    data?: PageVOListPageUserVO_
    message?: string
  }

  type BaseResponsePageVOPictureVO_ = {
    code?: number
    data?: PageVOPictureVO_
    message?: string
  }

  type BaseResponsePictureDO_ = {
    code?: number
    data?: PictureDO
    message?: string
  }

  type BaseResponsePictureTagCategory_ = {
    code?: number
    data?: PictureTagCategory
    message?: string
  }

  type BaseResponsePictureVO_ = {
    code?: number
    data?: PictureVO
    message?: string
  }

  type BaseResponseString_ = {
    code?: number
    data?: string
    message?: string
  }

  type BaseResponseUserDO_ = {
    code?: number
    data?: UserDO
    message?: string
  }

  type DeletePictureQO = {
    id?: number
  }

  type ListPagePictureQO = {
    category?: string
    endUploadTime?: string
    id?: number
    introduction?: string
    name?: string
    pageNum?: number
    pageSize?: number
    picFormat?: string
    picHeight?: number
    picScale?: number
    picSize?: number
    picWidth?: number
    searchText?: string
    startUploadTime?: string
    tags?: string[]
    userId?: number
  }

  type ListPagePictureVO = {
    category?: string
    gmtCreate?: string
    gmtModified?: string
    id?: number
    introduction?: string
    name?: string
    picFormat?: string
    picHeight?: number
    picScale?: number
    picSize?: number
    picWidth?: number
    tags?: string
    url?: string
    userId?: number
  }

  type ListPageUserQO = {
    pageNum?: number
    pageSize?: number
    userAccount?: string
    userName?: string
    userRole?: string
  }

  type ListPageUserVO = {
    gmtCreate?: string
    gmtModified?: string
    id?: number
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type LoginUserVO = {
    gmtCreate?: string
    gmtModified?: string
    id?: number
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type PageVOListPagePictureVO_ = {
    list?: ListPagePictureVO[]
    totalRow?: number
  }

  type PageVOListPageUserVO_ = {
    list?: ListPageUserVO[]
    totalRow?: number
  }

  type PageVOPictureVO_ = {
    list?: PictureVO[]
    totalRow?: number
  }

  type PictureDO = {
    category?: string
    gmtCreate?: string
    gmtModified?: string
    id?: number
    introduction?: string
    isDelete?: number
    name?: string
    picFormat?: string
    picHeight?: number
    picScale?: number
    picSize?: number
    picWidth?: number
    url?: string
    userId?: number
  }

  type PictureIdQO = {
    id?: number
  }

  type PictureTagCategory = {
    categoryList?: string[]
    tagList?: string[]
  }

  type PictureUpdateQO = {
    category?: string
    id?: number
    introduction?: string
    name?: string
    tags?: string[]
  }

  type PictureVO = {
    category?: string
    gmtCreate?: string
    gmtModified?: string
    id?: number
    introduction?: string
    name?: string
    picFormat?: string
    picHeight?: number
    picScale?: number
    picSize?: number
    picWidth?: number
    tags?: string[]
    url?: string
    user?: LoginUserVO
    userId?: number
  }

  type testDownloadFileUsingGETParams = {
    /** filepath */
    filepath?: string
  }

  type uploadPictureUsingPOSTParams = {
    id?: number
  }

  type UserAddQO = {
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserDeleteQO = {
    id?: number
  }

  type UserDO = {
    gmtCreate?: string
    gmtModified?: string
    id?: number
    isDelete?: number
    userAccount?: string
    userAvatar?: string
    userName?: string
    userPassword?: string
    userProfile?: string
    userRole?: string
  }

  type UserLoginQO = {
    userAccount?: string
    userPassword?: string
  }

  type UserRegisterQO = {
    checkPassword?: string
    userAccount?: string
    userPassword?: string
  }

  type UserUpdateQO = {
    id?: number
    userAccount?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }
}
