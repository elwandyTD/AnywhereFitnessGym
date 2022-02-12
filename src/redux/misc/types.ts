export interface IMiscState {
  counter?: number;
}

export interface IMiscPayload {
  state?: IMiscState;
}

export interface IMiscAction {
  type: string;
  payload?: IMiscPayload;
}

export type MiscDispatchType = (args: IMiscAction) => IMiscAction