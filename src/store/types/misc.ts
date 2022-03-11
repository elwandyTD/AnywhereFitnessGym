export interface IMiscState {
  firstLoad: boolean;
  loading: boolean;
  loadingSplahsreen: boolean;
}

export interface IMiscPayloadState {
  firstLoad?: boolean;
  loading?: boolean;
  loadingSplahsreen?: boolean;
}

export interface IMiscPayload {
  state?: IMiscPayloadState;
}

export interface IMiscAction {
  type: string;
  payload?: IMiscPayload;
}

// export type MiscDispatchType = (args: IMiscAction) => IMiscAction