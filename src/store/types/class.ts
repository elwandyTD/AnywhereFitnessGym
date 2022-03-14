
import { ClassListModel, DetailClassModel } from "Types/class";

export interface IClassState {
  classList: ClassListModel[];
  loading: boolean;
  detailClass: DetailClassModel;
}

export interface IClassPayloadState {
  classList?: ClassListModel[];
  loading?: boolean;
  detailClass?: DetailClassModel;
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