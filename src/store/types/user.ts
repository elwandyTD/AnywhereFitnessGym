export interface IUserState {
  
}

export interface IUserPayloadState {
  
}

export interface IUserPayload {
  state?: IUserPayloadState;
}

export interface IUserAction {
  type: string;
  payload?: IUserPayload;
}

// export type MiscDispatchType = (args: IUserAction) => IUserAction