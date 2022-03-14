import React, { useEffect } from "react";
import { View, Image } from "react-native";
// import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SharedElement } from "react-navigation-shared-element";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "App/store/reducers";

import styles from "./styles";
import ImageAssets from "Assets/images";

import { initProject } from "Actions/misc";

interface Props {
  navigation: StackNavigationProp<ReactNavigation.RootStackParamList, "SplashScreen">;
  // route: RouteProp<ReactNavigation.RootStackParamList, "SplashScreen">
}

const SplashScreen = ({ navigation }: Props) => {
  const misc = useSelector((state: IAppState) => state.misc);
  const dispatch = useDispatch();

  const { loadingSplahsreen } = misc;

  useEffect(() => {
    dispatch(initProject());
  }, []);

  useEffect(() => {
    // const navigateToHome = setTimeout(() => {
      // navigation.replace("ClassListScreen");
    // }, 1000);

    // return () => clearTimeout(navigateToHome);

    if (!loadingSplahsreen) {
      navigation.replace("ClassListScreen");
    }
  }, [loadingSplahsreen])

  return (
    <View style={styles.container}>
      <SharedElement id="home.logo" style={styles.sharedElementContainer}>
        <Image 
          source={ImageAssets.Logo}
          style={styles.logoImgStyle}
          resizeMode="contain"
        />
      </SharedElement>
    </View>
  );
}

export default SplashScreen;