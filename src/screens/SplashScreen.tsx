import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SharedElement } from "react-navigation-shared-element";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "../commons/theme";
interface Props {
  navigation: StackNavigationProp<ReactNavigation.RootStackParamList, "SplashScreen">;
  route: RouteProp<ReactNavigation.RootStackParamList, "SplashScreen">
}

const SplashScreen = ({ navigation }: Props) => {
  useEffect(() => {
    const navigateToHome = setTimeout(() => {
      navigation.replace("PartnerListScreen");
    }, 1000);

    return () => clearTimeout(navigateToHome);
  });

  return (
    <View style={styles.container}>
      <SharedElement id="home.logo" style={styles.sharedElementContainer}>
        <Image 
          source={require("../assets/images/logo.png")}
          style={styles.logoImgStyle}
          resizeMode="contain"
        />
      </SharedElement>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.space["3XL"]
  },
  sharedElementContainer: {
    width: "100%"
  },
  logoImgStyle: {
    height: RFValue(120),
    width: "100%"
  }
});

export default SplashScreen;