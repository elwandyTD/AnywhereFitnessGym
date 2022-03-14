type ClassEquipment = {
  description: string;
  equipment: string;
  id: string;
  image: string;
}

type ClassImage = {
  class_id: string;
  default: boolean;
  id: string;
  image: string;
}

type ClassPriceDetail = {
  discount_from_date: string;
  discount_price: string;
  discount_until_date: string;
  price: string;
}

type ClassHourlyPriceDetail = {
  15?: ClassPriceDetail;
  30?: ClassPriceDetail;
  60?: ClassPriceDetail;
  90?: ClassPriceDetail;
  120?: ClassPriceDetail;
}

type ClassDataPrice = {
  hourly?: ClassHourlyPriceDetail;
  montly?: {
    1200: ClassHourlyPriceDetail
  }
}

type ClassContent = {
  title?: string;
  description?: string;
}

export type ClassListModel = {
  category_id: string;
  description: string;
  images: ClassImage[];
  id: string;
  name: string;
  category_name: string;
  types_name: string;
  content: ClassContent;
}

export type DetailClassModel = {
  types_id?: string;
  floor?: string;
  types_name?: string;
  category_name?: string;
  breadth?: number,
  training?: {
    id?: string;
    detail?: {
      monday?: {
        end_hours?: string;
        start_hours?: string;
      },
      sunday?: {
        end_hours?: string;
        start_hours?: string;
      }
    },
    class_id?: string;
    term_condition?: string;
  },
  how_to_enter?: string;
  id?: string;
  store?: {
    id?: string;
    partner_id?: string;
    image?: null,
    store_address?: {
      id?: string;
      after_street_kana?: string;
      municipalities_kana?: string;
      longitude?: string;
      latitude?: string;
      zipcode?: string;
      after_street?: string;
      municipalities?: string;
      prefectures?: string;
    },
    store_name?: string;
    pic?: {
      id?: string;
      telephone_number?: string;
      name?: string;
    }
  },
  floor_number?: number,
  store_id?: string;
  description?: string;
  content?: {
    title?: string;
    description?: string;
  },
  how_to_leave?: string;
  price?: ClassDataPrice;
  category_id?: string;
  capacity?: number,
  equipments?: ClassEquipment[];
  pic?: {
    id?: string;
    telephone_number?: string;
    name?: string;
  },
  images?: ClassImage[];
  logo?: null,
  name?: string;
  quota_per_session?: number,
  buffer_time?: number
}

export type FilterGetAllClass = {
  category?: string;
  types?: string;
  name?: string;
}