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

  type BaseResponsePageVOListPageUserVO_ = {
    code?: number
    data?: PageVOListPageUserVO_
    message?: string
  }

  type BaseResponseString_ = {
    code?: number
    data?: string
    message?: string
  }

  type BaseResponseUser_ = {
    code?: number
    data?: User
    message?: string
  }

  type ListPageUserQO = {
    pageNum?: number
    pageSize?: number
    userAccount?: string
    userName?: string
    userRole?: string
  }

  type ListPageUserVO = {
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

  type PageVOListPageUserVO_ = {
    list?: ListPageUserVO[]
    totalRow?: number
  }

  type User = {
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
