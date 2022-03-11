
import { ClassListModel } from "Types/class";

export interface IClassState {
  classList: ClassListModel[];
  loading: boolean;
}

export interface IClassPayloadState {
  classList?: ClassListModel[];
  loading?: boolean;
}

export interface IClassPayload {
  state?: IClassPayloadState;
  classList?: ClassListModel[];
  loading?: boolean;
}

export interface IClassAction {
  type: string;
  payload?: IClassPayload;
}

// export type ClassDispatchType = (args: IClassAction) => IClassAction