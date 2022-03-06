import React, { useRef, useState } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import FA5Icon from "react-native-vector-icons/FontAwesome5";
import FAIcon from "react-native-vector-icons/FontAwesome";
import FtIcon from "react-native-vector-icons/Fontisto";
import SLIIcon from "react-native-vector-icons/SimpleLineIcons";
import MIIcon from "react-native-vector-icons/MaterialIcons";
import { RFValue } from "react-native-responsive-fontsize";
import MapView from "react-native-maps";
import BottomSheet from '@gorhom/bottom-sheet';
import DatePicker from "react-native-date-picker";

// <FA5Icon name="building" />
// <FtIcon name="map-marker-alt" />
// <FAIcon name="users" />
// <SLIIcon name="size-fullscreen" />
// <MIIcon name="access-time" />

import theme from "../commons/theme";
import Tag from "../commons/components/Tag";
import ViewIcon from "../commons/components/Button/ViewIcon";
import Button from "../commons/components/Button/Button";
import CustomBottomSheet from "../commons/components/BottomSheet/CustomBottomSheet";

type DetailPartnerScreenProps = {
  route: RouteProp<ReactNavigation.RootStackParamList, "PartnerListScreen">;
  navigation: StackNavigationProp<ReactNavigation.RootStackParamList, "PartnerListScreen">;
}

const DetailPartnerScreen = ({ navigation }: DetailPartnerScreenProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [date, setDate] = useState<Date>(new Date())
  const [open, setOpen] = useState<boolean>(false)

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <Swiper style={styles.carouselContainer} >
          {/* <View>
          </View> */}
            <Image
              source={require("../assets/images/banner.jpg")}
              resizeMode="cover"
              style={styles.carouselImgStyle}
            />
            <Image
              source={require("../assets/images/banner.jpg")}
              resizeMode="cover"
              style={styles.carouselImgStyle}
            />
            <Image
              source={require("../assets/images/banner.jpg")}
              resizeMode="cover"
              style={styles.carouselImgStyle}
            />
        </Swiper>
        <View style={styles.iconsContainer}>
          <ViewIcon text="Store" style={styles.iconStyle}>
            <FtIcon name="shopping-store" size={RFValue(28)} color={theme.colors.black} />
          </ViewIcon>
          <ViewIcon text="Equipment" style={styles.iconStyle}>
            <FA5Icon name="dumbbell" size={RFValue(28)} color={theme.colors.black} />
          </ViewIcon>
        </View>
        <View style={styles.detailContainer}>
          <Image 
            source={require("../assets/images/logo.png")}
            resizeMode="contain"
            style={styles.logoImgStyle}
          />
          <Text style={styles.textSubtitle}>Modern fitness space for hourly rental.</Text>
          <View style={styles.tagContainer}>
            <Tag text="Semi-private room" />
            <Tag text="Semi-private room" />
          </View>
          <Text style={styles.textDescription}>Modern fitness space for hourly rental. Modern fitness space for hourly rental.Modern fitness space for hourly rental. Modern fitness space for hourly rental.Modern fitness space for hourly rental.</Text>
          <Text style={styles.showAllBtn} >Show All</Text>

          <View style={styles.detailList}>
            <View style={styles.detailListItem}>
              <FA5Icon name="building" size={22} style={styles.detailIconStyle} />
              <Text style={styles.detailTextStyle}>Project M, Co. Ltd</Text>
            </View>
            <View style={styles.detailListItem}>
              <FtIcon name="map-marker-alt" size={22} style={styles.detailIconStyle} />
              <Text style={styles.detailTextStyle}>2-2-18 Yotsuya, Shinjuku-ku, Tokyo VORT Yotsuya 8F.</Text>
            </View>
            <View style={styles.detailListItem}>
              <FAIcon name="users" size={22} style={styles.detailIconStyle} />
              <Text style={styles.detailTextStyle}>4/5 person</Text>
            </View>
            <View style={styles.detailListItem}>
              <SLIIcon name="size-fullscreen" size={22} style={styles.detailIconStyle} />
              <Text style={styles.detailTextStyle}>20m</Text>
            </View>
            <View style={styles.detailListItem}>
              <MIIcon name="access-time" size={22} style={styles.detailIconStyle} />
              <Text style={styles.detailTextStyle}>
                Sunday
                <Text style={{ marginLeft: 5 }}>09:00 AM - 09:00 PM</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.mapContainer}>
          <MapView 
            region={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} 
            style={styles.mapStyle}
          />
        </View>
      </ScrollView>
      <View style={styles.bookingButtonContainer}>
        <Button text="Booking" onPress={() => bottomSheetRef.current?.expand()} style={styles.bookingButton} />
      </View>
      <CustomBottomSheet ref={bottomSheetRef}>
        <View style={styles.bottomsheetContainer}>
          {/* <View style={styles.packageSection}> */}
            <Text style={theme.styles.textTitle}>Package</Text>
            <View style={styles.packageList}>
              <Button text="30 mnt" style={[styles.packageButton, { backgroundColor: true ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: true ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="40 mnt" style={[styles.packageButton, { backgroundColor: true ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: true ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="50 mnt" style={[styles.packageButton, { backgroundColor: true ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: true ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="50 mnt" style={[styles.packageButton, { backgroundColor: true ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: true ? theme.colors.darkGray : theme.colors.black }]} />
              <Button text="50 mnt" style={[styles.packageButton, { backgroundColor: true ? theme.colors.gray : theme.colors.white }]} textStyle={[{ color: true ? theme.colors.darkGray : theme.colors.black }]} />
            </View>
          {/* </View> */}
          <View style={styles.rightInput}>
            <Text style={theme.styles.textTitle}>Date</Text>
            <Pressable>
              
            </Pressable>
            <DatePicker 
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              mode="date"
              onCancel={() => {
                setOpen(false)
              }}
            />
          </View>
          <View>
            <Text>Time</Text>
          </View>
          <View>
            <Text>Price</Text>
          </View>
          <View>
            <Text>Checkout</Text>
          </View>
        </View>
      </CustomBottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: theme.colors.white
  },
  carouselContainer:{
    height: theme.sizes.BANNER_HEIGHT,
  },
  carouselImgStyle: {
    height: theme.sizes.BANNER_HEIGHT,
    width: undefined
  },
  iconsContainer: {
    padding: RFValue(20),
    flexDirection: "row"    
  },
  iconStyle: {
    marginRight: RFValue(15)
  },
  detailContainer: {
    paddingHorizontal: RFValue(20),
  },
  logoImgStyle: {
    maxHeight: RFValue(50),
    width: RFValue(160)
  },
  tagContainer: {
    paddingVertical: RFValue(10),
  },
  textSubtitle: {},
  textDescription: {},
  showAllBtn: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.black,
    alignSelf: "flex-start",
    color: theme.colors.black
  },

  detailList: {
    marginTop: RFValue(25),
  },
  detailListItem: {
    flex: 1,
    flexDirection: "row",
    marginBottom: RFValue(8),
  },
  detailIconStyle: {
    marginRight: RFValue(15),
    minWidth: RFValue(25),
    alignSelf: "center",
    color: theme.colors.black,
    textAlign: "center"
  },
  detailTextStyle: {
    flex: 1,
    color: theme.colors.black
  },

  mapContainer: {
    flex: 1,
    marginTop: -RFValue(160),
    marginBottom: RFValue(80),
  },
  mapStyle: {
    height: theme.sizes.BANNER_HEIGHT
  },

  bookingButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    minHeight: RFValue(60),
    borderTopWidth: theme.border.WIDTH,
    borderColor: theme.border.COLOR,
    backgroundColor: theme.colors.white,
    padding: RFValue(15),
    paddingVertical: RFValue(20),
  },
  bookingButton: {
    backgroundColor: theme.colors.green,
    borderWidth: 0,
    minHeight: 35,
  },

  bottomsheetContainer: {
    paddingHorizontal: theme.space.XL,
    position: "relative",
    paddingVertical: theme.space.LG
  },
  packageSection: {
    flex: 1,
    backgroundColor: "red"
  },
  packageList: {
    minHeight: theme.sizes.BUTTON_HEIGHT,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: theme.space.XL
  },
  packageButton: {
    minHeight: theme.sizes.BUTTON_HEIGHT,
    marginRight: 10,
    marginVertical: 5,
    borderColor: theme.border.COLOR,
    borderWidth: theme.border.WIDTH,
  },
  rightInput: {

  }
});

export default DetailPartnerScreen;