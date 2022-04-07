import { ClassListModel, DetailClassModel, FilterGetAllClass } from "Types/class";

export interface IClassState {
  classList: ClassListModel[];
  loading: boolean;
  detailClass: DetailClassModel;
  filterBy: FilterGetAllClass;
  refresh: boolean;
}

export interface IClassPayloadState {
  classList?: ClassListModel[];
  loading?: boolean;
  detailClass?: DetailClassModel;
  filterBy?: FilterGetAllClass;
  refresh?: boolean;
}

export interface IClassPayload {
  state?: IClassPayloadState;
  classList?: ClassListModel[];
  loading?: boolean;
  filterBy?: FilterGetAllClass;
  refresh?: boolean;
}

export interface IClassAction {
  type: string;
  payload?: IClassPayload;
}

// export type ClassDispatchType = (args: IClassAction) => IClassAction