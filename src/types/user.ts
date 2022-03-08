import { ImageOrVideo } from "react-native-image-crop-picker";

export interface UserModel {
  name: string;
  birth_date: string;
  telephone_number: string;
  email: string;
  password: string;
  photo: string | null;
  file?: ImageOrVideo;
  address: {
    zipcode: string;
    prefectures: string;
    after_street: string;
    after_street_kana: string;
    municipalities: string;
    municipalities_kana: string;
  }
}