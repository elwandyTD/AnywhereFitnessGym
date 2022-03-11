enum _misc {
  SET_STATE = "MISC/SET_STATE"
}

enum _category {
  GET_ALL = "CATEGORY/GET_ALL",
  SET_ALL = "CATEGORY/SET_ALL",
}

enum _class {
  GET_ALL = "CLASS/GET_ALL",
  SET_ALL = "CLASS/SET_ALL",
}

enum _partner {
  GET_ALL = "PARTNER/GET_ALL",
  SET_ALL = "PARTNER/SET_ALL",
}

enum _type {
  GET_ALL = "TYPES/GET_ALL",
  SET_ALL = "TYPES/SET_ALL",
}

enum _user {
  GET_PROFILE = "USER/GET_PROFILE",
  SET_ALL = "USER/SET_ALL",
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