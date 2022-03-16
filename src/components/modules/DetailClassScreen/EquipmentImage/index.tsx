import { API_URL } from "@env";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import styles from "./styles";
import { ClassEquipment } from "Types/class";

type EquipmentImageProps = {
  equipment: ClassEquipment;
}

const EquimentImage = ({ equipment }: EquipmentImageProps) => {
  return (
    <ImageBackground
      key={equipment.id}
      source={{ uri: `${API_URL}img/file/${equipment.image}` }}
      resizeMode="cover"
      style={styles.imgStyle}
    >
      <Text style={styles.text}>{equipment.equipment}</Text>
    </ImageBackground>
  );
}

export default React.memo(EquimentImage);