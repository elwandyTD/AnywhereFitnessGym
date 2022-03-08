import { AxiosRequestConfig } from "axios";
import { ImageOrVideo } from "react-native-image-crop-picker";

import { apiFunc } from "Api";
import { UserModel } from "Types/user";

export const getById = (id: string, config: AxiosRequestConfig<any>) => {
  return apiFunc(`/class/${id}`, "GET", config);
}

export const register = async (data: UserModel) => {
  const photo: string = data.file ? await uploadImage(data.file) : "";
  delete data.file;

  if (photo) {
    data.photo = photo;
  }

  return apiFunc("user/photo", "POST", { data: { data } });
}

export const uploadImage = async (file: ImageOrVideo) => {
  try {
    const formData = new FormData();

    formData.append("file", file);

    const res = await apiFunc("user/photo", "POST", { 
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    const { data } = res;

    return data.data;
  } catch (e) {
    console.log(e);

    return null;
  }


}
