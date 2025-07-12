declare namespace API {
  type BaseResponseInt_ = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponseListPageUserVO_ = {
    code?: number
    data?: ListPageUserVO
    message?: string
  }

  type BaseResponseListSpaceLevelVO_ = {
    code?: number
    data?: SpaceLevelVO[]
    message?: string
  }

  type BaseResponseLoginUserVO_ = {
    code?: number
    data?: LoginUserVO
    message?: string
  }

  type BaseResponseLong_ = {
    code?: number
    data?: number
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

  type BaseResponsePageVOListPageSpaceVO_ = {
    code?: number
    data?: PageVOListPageSpaceVO_
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

  type BaseResponseSpaceVO_ = {
    code?: number
    data?: SpaceVO
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
    nullSpaceId?: boolean
    pageNum?: number
    pageSize?: number
    picFormat?: string
    picHeight?: number
    picScale?: number
    picSize?: number
    picWidth?: number
    reviewMessage?: string
    reviewStatus?: number
    reviewTime?: string
    reviewerId?: number
    searchText?: string
    spaceId?: number
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
    reviewMessage?: string
    reviewStatus?: number
    reviewTime?: string
    reviewerId?: number
    tags?: string
    url?: string
    userId?: number
  }

  type ListPageSpaceQO = {
    id?: number
    pageNum?: number
    pageSize?: number
    spaceLevel?: number
    spaceName?: string
    userId?: number
  }

  type ListPageSpaceVO = {
    gmtCreate?: string
    gmtModified?: string
    id?: number
    maxCount?: number
    maxSize?: number
    spaceLevel?: number
    spaceName?: string
    totalCount?: number
    totalSize?: number
    user?: LoginUserVO
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

  type PageVOListPageSpaceVO_ = {
    list?: ListPageSpaceVO[]
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
    reviewMessage?: string
    reviewStatus?: number
    reviewTime?: string
    reviewerId?: number
    spaceId?: number
    thumbnailUrl?: string
    url?: string
    userId?: number
  }

  type PictureIdQO = {
    id?: number
  }

  type PictureQO = {
    fileUrl?: string
    id?: number
    picName?: string
    spaceId?: number
  }

  type PictureReviewQO = {
    id?: number
    reviewMessage?: string
    reviewStatus?: number
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

  type PictureUploadByBatchQO = {
    count?: number
    namePrefix?: string
    searchText?: string
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
    reviewMessage?: string
    reviewStatus?: string
    reviewTime?: string
    reviewerId?: number
    spaceId?: number
    tags?: string[]
    thumbnailUrl?: string
    url?: string
    user?: LoginUserVO
    userId?: number
  }

  type SaveSpaceQO = {
    spaceLevel?: number
    spaceName?: string
  }

  type SpaceIdQO = {
    id?: number
  }

  type SpaceLevelVO = {
    maxCount?: number
    maxSize?: number
    text?: string
    value?: number
  }

  type SpaceVO = {
    gmtCreate?: string
    gmtModified?: string
    id?: number
    maxCount?: number
    maxSize?: number
    spaceLevel?: number
    spaceName?: string
    totalCount?: number
    totalSize?: number
    user?: LoginUserVO
    userId?: number
  }

  type testDownloadFileUsingGETParams = {
    /** filepath */
    filepath?: string
  }

  type UpdateSpaceQO = {
    id?: number
    maxCount?: number
    maxSize?: number
    spaceLevel?: number
    spaceName?: string
  }

  type uploadPictureUsingPOSTParams = {
    fileUrl?: string
    id?: number
    picName?: string
    spaceId?: number
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
