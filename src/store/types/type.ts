
import { TypeModel } from "Types/type";

export interface ITypeState {
  typeList: TypeModel[];
}

export interface ITypePayloadState {
  typeList?: TypeModel[];
}

export interface ITypePayload {
  state?: ITypePayloadState;
  typeList?: TypeModel[];
}

export interface ITypeAction {
  type: string;
  payload?: ITypePayload;
}

// export type TypeDispatchType = (args: ITypeAction) => ITypeAction