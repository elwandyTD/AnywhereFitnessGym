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


import styles from "./styles";
import theme from "Theme";
import Button from "Components/Button";
import CustomBottomSheet from "Components/CustomBottomSheet";
import ImageAssets from "Assets/images";
import Tag from "Components/Tag";
import ViewIcon from "Modules/DetailPartnerScreen/ViewIcon";

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
              source={ImageAssets.Banner}
              resizeMode="cover"
              style={styles.carouselImgStyle}
            />
            <Image
              source={ImageAssets.Banner}
              resizeMode="cover"
              style={styles.carouselImgStyle}
            />
            <Image
              source={ImageAssets.Banner}
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
            source={ImageAssets.Logo}
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

export default DetailPartnerScreen;