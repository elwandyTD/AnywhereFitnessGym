import React, { useEffect, useRef, useState } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View, useWindowDimensions, Dimensions } from "react-native";
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
import { useDispatch, useSelector } from "react-redux";
import RenderHtml from 'react-native-render-html';
import FEIcon from "react-native-vector-icons/Feather";


import styles from "./styles";
import theme from "Theme";
import Button from "Components/Button";
import CustomBottomSheet from "Components/CustomBottomSheet";
import ImageAssets from "Assets/images";
import Tag from "Components/Tag";
import ViewIcon from "Modules/DetailClassScreen/ViewIcon";
import { getClassById } from "Actions/class";
import { API_URL } from "@env";
import IconButton from "App/components/IconButton";
import EquipmentImage from "Modules/DetailClassScreen/EquipmentImage";
import BackButton from "App/components/BackButton";
import ClassImage from "App/components/modules/DetailClassScreen/ClassImage";
import CustomSwiper from "App/components/modules/DetailClassScreen/CustomSwiper";

type DetailClassScreenProps = {
  route: RouteProp<ReactNavigation.RootStackParamList, "DetailClassScreen">;
  navigation: StackNavigationProp<ReactNavigation.RootStackParamList, "DetailClassScreen">;
}

const DetailClassScreen = ({ navigation, route }: DetailClassScreenProps) => {
  const _class = useSelector((state: AppStore.AppState) => state.class);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const dispatch = useDispatch();
  const [activeImageSection, setActiveImageSection] = useState<"Store" | "Equipment">("Store");
  const [date, setDate] = useState<Date>(new Date());
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  
  const { item } = route.params;
  const { detailClass, loading } = _class;
  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(getClassById(item.id));
  }, [item]);

  useEffect(() => {
    // console.log(detailClass);
    console.log(loading, "Loading");
  }, [loading]);

  const _onChangeImageSection = (section: "Store" | "Equipment") => {
    setActiveImageSection(section);
  }

  const source = {
    html: `
  <ul class=\"multicolumn-list grid grid--1-col grid--3-col-tablet\" id=\"Slider-template--15559670661361__1641868266cc7431a6\" role=\"list\" style=\"box-sizing: inherit; display: flex; flex-wrap: wrap; margin-bottom: 0px; margin-left: -1rem; padding: 0px; list-style: none; color: rgba(214, 0, 28, 0.75); font-family: Helvetica; letter-spacing: 0.525px;\"><li id=\"Slide-template--15559670661361__1641868266cc7431a6-1\" class=\"multicolumn-list__item grid__item\" style=\"box-sizing: inherit; padding-left: 0px !important; padding-bottom: 0px; width: calc(33.33% - 0.666667rem); max-width: 100%; flex-grow: 1; flex-shrink: 0;\"><div class=\"multicolumn-card\" style=\"box-sizing: inherit; background: rgba(var(--color-foreground),0.04); height: 872.338px;\"><div class=\"multicolumn-card__info\" style=\"box-sizing: inherit; padding: 2.5rem;\"><h3 style=\"box-sizing: inherit; font-family: var(--font-heading-family); font-style: var(--font-heading-style); font-weight: var(--font-heading-weight); letter-spacing: calc(var(--font-heading-scale) * 0.06rem); line-height: calc(1 + 0.5/max(1,var(--font-heading-scale))); font-size: calc(var(--font-heading-scale) * 1.8rem); margin-right: 0px; margin-bottom: 0px; margin-left: 0px;\">WHY ANYWHERE FITNESS?</h3><div class=\"rte\" style=\"box-sizing: inherit; color: black; margin-top: 1rem;\"><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px;\"><strong style=\"box-sizing: inherit;\">Anywhere Fitness provides rental space for trainers and clients at their disposal.</strong></p><br style=\"box-sizing: inherit;\"><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px;\">Anywhere Fitness provides the space for the best user experience.</p><ul style=\"box-sizing: inherit; padding-left: 5rem;\"><li style=\"box-sizing: inherit; list-style: inherit;\">Private studio with state-of-the-art fitness equipment</li><li style=\"box-sizing: inherit; list-style: inherit;\">Free acoustic space</li><li style=\"box-sizing: inherit; list-style: inherit; margin-bottom: 0px;\">Wider size than traditional 1K type gyms</li></ul><br style=\"box-sizing: inherit;\"><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px;\">Convenient payment, hassle-free admission system</p><br style=\"box-sizing: inherit;\"><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px;\">Anywhere Fitness reduces the trainer's business risk</p><ul style=\"box-sizing: inherit; padding-left: 5rem;\"><li style=\"box-sizing: inherit; list-style: inherit;\">No lease agreement required</li><li style=\"box-sizing: inherit; list-style: inherit;\">No maintenance costs</li><li style=\"box-sizing: inherit; list-style: inherit;\">No insurance required</li><li style=\"box-sizing: inherit; list-style: inherit; margin-bottom: 0px;\">No other fixed costs required</li></ul><br style=\"box-sizing: inherit;\"><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px;\">Anywhere Fitness provides the best personal fitness space for trainers to provide the best service to their clients.</p></div></div></div></li></ul>
  `
  };


  return (
    <SafeAreaView style={styles.wrapper}>
      { loading ? (
        <Text>Loading</Text>
      ) : (
        <>
          <ScrollView style={styles.container}>
            <View style={styles.logoContainer}>
              <Image 
                source={ImageAssets.Logo}
                resizeMode="contain"
                style={styles.logoImgStyle}
              />
              <BackButton 
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              />
            </View>
            {activeImageSection === "Store" ? (
              <CustomSwiper
                key={detailClass.images?.length}
              >
                {activeImageSection === "Store" && detailClass?.images ? 
                  detailClass.images.map((image) => (
                    <ClassImage
                      key={image.id}
                      image={image}
                    />
                )) : <View /> }
              </CustomSwiper>
            ) : (
              <CustomSwiper 
                key={detailClass.equipments?.length}
              >
                {detailClass?.equipments ? 
                  detailClass.equipments.map((equipment) => (
                    <EquipmentImage key={equipment.id} equipment={equipment} />
                )) : <View /> }
              </CustomSwiper>
            )}
            <View style={styles.iconsContainer}>
              <ViewIcon 
                text="Store" 
                active={activeImageSection === "Store" ? true : false}
                style={styles.iconStyle} 
                onPress={() => _onChangeImageSection("Store")}
              >
                <FtIcon name="shopping-store" size={RFValue(28)} color={activeImageSection === "Store" ? theme.colors.white : theme.colors.black} />
              </ViewIcon>
              <ViewIcon 
                text="Equipment"
                active={activeImageSection === "Equipment" ? true : false}
                style={styles.iconStyle} 
                onPress={() => _onChangeImageSection("Equipment")}
              >
                <FA5Icon name="dumbbell" size={RFValue(28)} color={activeImageSection === "Equipment" ? theme.colors.white : theme.colors.black} />
              </ViewIcon>
            </View>
            <View style={styles.detailContainer}>
              <Text style={theme.styles.textTitle}>{detailClass.store?.store_name}</Text>
              <View style={styles.tagContainer}>
                {detailClass.types_name && detailClass.category_name && (
                  <>
                    <Tag text={detailClass.types_name} />
                    <Tag text={detailClass.category_name} />
                  </>
                )}
              </View>
              <View>
                {/* <Text style={styles.textDescription}>{detailClass.description}</Text> */}
                <RenderHtml 
                  contentWidth={width}
                  source={source}
                />
              </View>
              <Text style={styles.showAllBtn} >Show All</Text>

              <View style={styles.detailList}>
                <View style={styles.detailListItem}>
                  <FA5Icon name="building" size={22} style={styles.detailIconStyle} />
                  <Text style={styles.detailTextStyle}>{detailClass.store?.store_name}</Text>
                  {/* <Text style={styles.detailTextStyle}>Project M, Co. Ltd</Text> */}
                </View>
                <View style={styles.detailListItem}>
                  <FtIcon name="map-marker-alt" size={22} style={styles.detailIconStyle} />
                  <Text style={styles.detailTextStyle}>{`${detailClass.store?.store_address?.after_street}, ${detailClass.store?.store_address?.prefectures}`}</Text>
                  {/* <Text style={styles.detailTextStyle}>2-2-18 Yotsuya, Shinjuku-ku, Tokyo VORT Yotsuya 8F.</Text> */}
                </View>
                <View style={styles.detailListItem}>
                  <FAIcon name="users" size={22} style={styles.detailIconStyle} />
                  <Text style={styles.detailTextStyle}>{detailClass.capacity  || 0} person</Text>
                </View>
                <View style={styles.detailListItem}>
                  <SLIIcon name="size-fullscreen" size={22} style={styles.detailIconStyle} />
                  <Text style={styles.detailTextStyle}>{detailClass.breadth} m</Text>
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
                // region={{ 
                //   // latitude: detailClass.store?.store_address?.latitude || 0,
                //   // longitude: detailClass.store?.store_address?.longitude || 0 
                //   latitude: 0,
                //   longitude: 0
                // }} 
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
        </>
      )}
    </SafeAreaView>
  );
}

export default DetailClassScreen;