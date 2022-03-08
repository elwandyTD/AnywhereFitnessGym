import aes from "crypto-js/aes";
import { AES_SALT } from "@env";

export const objectToUrlQuery = (data: any): string => {
  const keys = Object.keys(data);
  if (keys.length < 1) return "";

  return keys.map((key) => `${key}=${data[key]}`).join('&');
};

export const objectToFormData = (formData: FormData, data: any) => {
  const keys = Object.keys(data);

  keys.map((key) => formData.append(key, data[key]));
}

export const objectToAES = (data: any): string => {
  return aes.encrypt(JSON.stringify(data), AES_SALT).toString();
}