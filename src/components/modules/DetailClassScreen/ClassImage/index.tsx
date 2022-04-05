import React, { useEffect } from "react";
import { Image } from "react-native";

import styles from "./styles";
import { API_URL } from "@env";
import { ClassImage as ClassImageProp } from "Types/class";

type ClassImageProps = {
  image: ClassImageProp;
}

const ClassImage = ({ image }: ClassImageProps) => {
  return (
    <Image 
      key={image.id}
      source={{ uri: `${API_URL}img/file/${image.image}` }}
      resizeMode="cover"
      style={styles.imgStyle}
    />
  );
}

export default React.memo(ClassImage);