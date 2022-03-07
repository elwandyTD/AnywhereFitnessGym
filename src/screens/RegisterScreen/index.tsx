import React from "react";
import { Image, KeyboardAvoidingView, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp } from "@react-navigation/native";
// import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";
import theme from "Theme";
import Button from "Components/Button";
import ImageAssets from "Assets/images";
import IconAssets from "Assets/images/icons";
import TextField from "Components/TextField";
import ScalingPressable from "Components/Animated/ScalingPressable";

interface RegisterScreenProps {
  navigation: NavigationProp<ReactNavigation.RootStackParamList, "RegisterScreen">
}

const RegisterScreen = ({ navigation }: RegisterScreenProps) => {
  return (
    <SafeAreaView style={theme.styles.safeAreaView}>
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <Image 
          source={ImageAssets.Logo}
          resizeMode="contain"
          style={[theme.styles.logoStyle, styles.logoStyle]}
        />
        <Text style={[theme.styles.textTitle, styles.title]}>SignUp</Text>
        <ScalingPressable
          containerStyle={styles.containerProfileImg}
        >
          <Image 
            source={ImageAssets.Avatar}
            // source={IconAssets.AddContact}
            style={styles.profileImg}
            resizeMode="cover"
          />
          <Text style={styles.profileImgText}>Profile Photo</Text>
        </ScalingPressable>
        <TextField 
          label="Name"
        />
        <TextField 
          label="Phone Number"
        />
        <TextField 
          label="Email"
        />
        <TextField 
          label="Password"
          type="password"
        />
        <TextField 
          label="Birthday"
          type="date"
        />
        <Text style={styles.label}>Address</Text>
        <View style={theme.styles.flexRow}>
          <TextField 
            label="Zip code"
            smallLabel={true}
            containerStyle={styles.inputLeft}
          />
          <TextField 
            label="Prefecture"
            smallLabel={true}
            containerStyle={styles.inputRight}
          />
        </View>
        <View style={theme.styles.flexRow}>
          <TextField 
            label="Municipalities"
            smallLabel={true}
            containerStyle={styles.inputLeft}
          />
          <TextField 
            label="After street"
            smallLabel={true}
            containerStyle={styles.inputRight}
          />
        </View>
        <View style={theme.styles.flexRow}>
          <TextField 
            label="Municipalities, Kana"
            smallLabel={true}
            containerStyle={styles.inputLeft}
          />
          <TextField 
            label="After street, Kana"
            smallLabel={true}
            containerStyle={styles.inputRight}
          />
        </View>
        <View style={[theme.styles.btnContainer, styles.btnContainer]}>
          <Button 
            text="Login" 
            style={theme.styles.btnLogin}
            textStyle={theme.styles.textBtnLogin}
            containerStyle={{ zIndex: 5 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RegisterScreen;