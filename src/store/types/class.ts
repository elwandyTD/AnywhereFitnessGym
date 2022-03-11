
import { ClassListModel } from "Types/class";

export interface IClassState {
  classList: ClassListModel[];
}

export interface IClassPayloadState {
  classList?: ClassListModel[];
}

export interface IClassPayload {
  state?: IClassPayloadState;
  classList?: ClassListModel[];
}

export interface IClassAction {
  type: string;
  payload?: IClassPayload;
}

// export type ClassDispatchType = (args: IClassAction) => IClassAction