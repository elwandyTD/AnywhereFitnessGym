import React, { useCallback, useMemo, useRef } from "react";
import { SafeAreaView, StyleSheet, ScrollView, Image, View, Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RFValue } from "react-native-responsive-fontsize";
import FEIcon from "react-native-vector-icons/Feather";
import BottomSheet from '@gorhom/bottom-sheet';

// import { storage } from "../commons/utils/mmkv";
import theme from "../commons/theme";
import IconButton from "../commons/components/Button/IconButton";
import { SharedElement } from "react-navigation-shared-element";
import SearchInput from "../commons/components/TextField/SearchInput";
import Button from "../commons/components/Button/Button";
import PartnerListItem from "../commons/components/PartnerListItem";
import CustomBottomSheet from "../commons/components/BottomSheet/CustomBottomSheet";

type Props = {
  route: RouteProp<ReactNavigation.RootStackParamList, "PartnerListScreen">;
  navigation: StackNavigationProp<ReactNavigation.RootStackParamList, "PartnerListScreen">;
}

const PartnerListScreen = ({ navigation }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  const onPressSearch = () => {
    console.log("Press");
  }

  const onChangeSearchInput = useCallback((text: string) => {
    console.log(text)
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            source={require("../assets/images/banner.jpg")}
            resizeMode="cover"
            style={styles.bannerImgStyle}
          />
          <View style={styles.logoContainer}>
            <SharedElement id="home.logo">
              <Image 
                source={require("../assets/images/logo.png")}
                resizeMode="contain"
                style={styles.logoImgStyle}
              />
            </SharedElement>
          </View>
        </View>

        <View style={styles.filterContainer}>
          <SearchInput 
            onChangeText={onChangeSearchInput}
          />
          <IconButton 
            icon={<FEIcon name="search" size={theme.sizes.ICON_SIZE} color={theme.colors.darkGray} />}
            onPress={onPressSearch}
            style={{ marginHorizontal: theme.space.MD, }}
          />
          <Button 
            text="Filter"
            // onPress={() => bottomSheetRef.current?.expand()}
          />
        </View>
        <View style={styles.classListContainer}>
          {/* <Text style={styles.textInformation}>Search for "Fitness Gym"</Text> */}
          <PartnerListItem />
          <PartnerListItem />
          <PartnerListItem />
          <PartnerListItem />
          <PartnerListItem />
        </View>
      </ScrollView>
      <CustomBottomSheet
        ref={bottomSheetRef}
      >
        <View style={[styles.wrapper, styles.bottomsheetContainer]}>
          <Text style={styles.filterTitle}>Filter</Text>
          <View style={styles.programSection}>
            <Text style={theme.styles.textTitle}>Select Program</Text>
            <View style={styles.programList}>
              <Button text="All" style={[styles.programButton, { backgroundColor: true ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: true ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Online" style={[styles.programButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Offline" style={[styles.programButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
            </View>
          </View>
          <View style={styles.classSection}>
            <Text style={theme.styles.textTitle}>Select Class</Text>
            <View style={styles.classList}>
              <Button text="All" style={[styles.classButton, { backgroundColor: true ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: true ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Fitness club" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="24 hours gym" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Golf" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Yoga" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Esthetic" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="Others" style={[styles.classButton, { backgroundColor: false ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: false ? theme.colors.darkGray : theme.colors.black }]} />
            </View>
          </View>
          <View style={styles.buttonsSection}>
            <Button onPress={() => bottomSheetRef.current?.close()} text="Cancel" style={[styles.actionButton, { marginRight: 5 }]} textStyle={styles.textActionButton} />
            <Button onPress={() => bottomSheetRef.current?.close()} text="Confirm" style={[styles.actionButton, { marginLeft: 5 }]} textStyle={styles.textActionButton} />
          </View>
        </View>
      </CustomBottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    backgroundColor: theme.colors.white
  },
  bannerContainer: {
    flex: 1,
    position: "relative"
  },
  bannerImgStyle: {
    height: theme.sizes.BANNER_HEIGHT,
    width: undefined
  },
  logoContainer: {
    position: "absolute",
    top: RFValue(40),
    left: RFValue(15)
  },
  logoImgStyle: {
    maxHeight: RFValue(50),
    width: RFValue(160)
  },
  filterContainer: {
    flex: 1,
    paddingVertical: theme.space.LG,
    paddingHorizontal: theme.space.XL,
    flexDirection: "row",
    alignItems: "center"
  },
  textInformation: {
    fontSize: theme.fontSize["3XL"],
    color: theme.colors.black,
    marginBottom: theme.space.SM
  },
  classListContainer: {
    flex: 1,
    paddingHorizontal: theme.space.XL,
    paddingBottom: theme.space["2XL"]
  },

  bottomsheetContainer: {
    paddingVertical: theme.space["XL"],
    paddingHorizontal: theme.space.XL,
  },
  filterTitle: {
    alignSelf: "center",
    borderWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    backgroundColor: theme.colors.darkGray,
    color: theme.colors.white,
    fontSize: theme.fontSize["3XL"],
    borderRadius: theme.rounded.FULL,
    paddingHorizontal: theme.space.XL,
    paddingVertical: theme.space.XS,
  },
  programSection: {
    paddingVertical: 15,
  },
  programList: {
    borderColor: theme.border.COLOR,
    borderWidth: theme.border.WIDTH,
    flexDirection: "row",
    borderRadius: theme.rounded.FULL,
    minHeight: theme.sizes.BUTTON_HEIGHT,
    maxHeight: theme.sizes.BUTTON_HEIGHT,
    alignSelf: 'flex-start',
    marginTop: 5
  },
  programButton: {
    backgroundColor: theme.colors.gray,
    borderWidth: 0,
    paddingHorizontal: 25
  },
  classSection: {
    paddingVertical: 15,
  },
  classList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  classButton: {
    minHeight: theme.sizes.BUTTON_HEIGHT,
    marginRight: 10,
    marginTop: 5,
    borderColor: theme.border.COLOR,
    borderWidth: theme.border.WIDTH,
  },
  buttonsSection: {
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    bottom: 40,
    right: 25
  },
  actionButton: {
    minHeight: 40,
    // minWidth: 120,
    backgroundColor: theme.colors.green,
    // paddingVertical: theme.space.,
  },
  textActionButton: {
    fontSize: theme.fontSize.XL
  }
});

export default PartnerListScreen;