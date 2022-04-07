enum _misc {
  SET_STATE = "MISC/SET_STATE"
}

enum _category {
  GET_ALL = "CATEGORY/GET_ALL",
  SET_ALL = "CATEGORY/SET_ALL",
  SET_STATE = "CATEGORY/SET_STATE",
  SET_LOADING = "CATEGORY/SET_LOADING",
}

enum _class {
  GET_ALL = "CLASS/GET_ALL",
  SET_ALL = "CLASS/SET_ALL",
  SET_STATE = "CLASS/SET_STATE",
  SET_LOADING = "CLASS/SET_LOADING",

  SET_FILTER = "CLASS/SET_FILTER",
  SET_EMPTY_FILTER = "CLASS/SET_EMPTY_FILTER",

  SET_REFRESH = "CLASS/SET_REFRESH"
}

enum _partner {
  GET_ALL = "PARTNER/GET_ALL",
  SET_ALL = "PARTNER/SET_ALL",
  SET_STATE = "PARTNER/SET_STATE",
  SET_LOADING = "PARTNER/SET_LOADING",
}

enum _type {
  GET_ALL = "TYPES/GET_ALL",
  SET_ALL = "TYPES/SET_ALL",
  SET_STATE = "TYPES/SET_STATE",
  SET_LOADING = "TYPES/SET_LOADING",
}

enum _user {
  GET_PROFILE = "USER/GET_PROFILE",
  SET_ALL = "USER/SET_ALL",
  SET_STATE = "USER/SET_STATE",
  SET_LOADING = "USER/SET_LOADING",
}

const actionTypes = {
  misc: _misc,
  category: _category,
  class: _class,
  partner: _partner,
  type: _type,
  user: _user,
}

export default actionTypes;