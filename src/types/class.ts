export type ClassListModel = {
  category_id: string;
  how_to_leave: string;
  description: string;
  equipments: any[];
  capacity: number;
  training: null;
  breadth: number;
  id: string;
  name: string;
  quota_per_session: number;
  category_name: string;
  types_name: string;
  buffer_time: number;
  price: {
    hourly: {
      plan: string;
      price: string;
      discount:string;
    }
  },
}

export type FilterGetAllClass = {
  category?: string;
  types?: string;
}