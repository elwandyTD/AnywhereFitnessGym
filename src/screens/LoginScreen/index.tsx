import React from "react";
import { Image, KeyboardAvoidingView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";
import theme from "Theme";
import ImageAssets from "Assets/images";
import TextField from "Components/TextField";
import ScalingPressable from "Components/Animated/ScalingPressable";
import Button from "Components/Button";

const LoginScreen = () => {
  return (
    <SafeAreaView style={theme.styles.safeAreaView}>
      <KeyboardAvoidingView 
        style={theme.styles.keyboardAvoidingView}
      >
        <View
          style={styles.container}
        >
          <Image 
            source={ImageAssets.Logo}
            resizeMode="contain"
            style={[theme.styles.logoStyle, styles.logoStyle]}
          />

          <Text style={[theme.styles.textTitle, styles.title]}>Login first to continue</Text>

          <TextField
            label="Email" 
          />
          <TextField 
            label="Password"
            type="password"
          />

          <ScalingPressable 
            containerStyle={styles.btnForgotPassword}
          >
            <Text style={styles.textForgotPassword}>Forgot password?</Text>
          </ScalingPressable>

          <View style={styles.btnContainer}>
            <Button 
              text="Login" 
              style={styles.btnLogin}
              textStyle={styles.textBtnLogin}
              containerStyle={{ zIndex: 5 }}
              />
            </View>

          <View style={styles.registerContainer}>
            <Text>Don't have account?</Text>
            <ScalingPressable>
              <Text style={styles.textSignUp}>SignUp</Text>
          </ScalingPressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;