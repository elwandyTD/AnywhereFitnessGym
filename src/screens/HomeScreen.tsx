import React from "react";
import { Dimensions, Text, View, Image, StatusBar } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import { RootStackParams } from "../navigation";
import { SharedElement } from "react-navigation-shared-element";

type HomeScreenNavigationProp  = StackNavigationProp<RootStackParams, "HomeScreen">;
type HomeScreenRouteProps = RouteProp<RootStackParams, "HomeScreen">;

type Props = {
  route: HomeScreenRouteProps;
  navigation: HomeScreenNavigationProp
}

export type Data = {
  id: string;
  title: string;
  image_url: string;
  iconName: string;
  description: string;
}

export const data: Data[] = [
  {
    id: '1',
    title: 'Manarola, Italy',
    description: 'The Cliffs of Cinque Terre',
    image_url:
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80',
    iconName: 'location-pin'
  },
  {
    id: '2',
    title: 'Venezia, Italy',
    description: 'Rialto Bridge, Venezia, Italy',
    image_url:
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80',
    iconName: 'location-pin'
  },
  {
    id: '3',
    title: 'Prague, Czechia',
    description: 'Tram in Prague',
    image_url:
      'https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    iconName: 'location-pin'
  }
];

const { width } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0f0f0f" }}>
      <StatusBar hidden />

      <View style={{ marginTop: 50, marginBottom: 20, paddingHorizontal: 20 }}>
        <Text style={{ color: "#888", textTransform: "uppercase" }}>
          Saturday 9 January
        </Text>
        <Text style={{ color: "#FFF", fontSize: 32, fontWeight: "600" }}>
          Today
        </Text>
      </View>

      <View style={{ flex: 1, paddingBottom: 20 }}>
        <ScrollView
          indicatorStyle="white"
          contentContainerStyle={{ alignItems: "center" }}
        > 
          {data.map((item: Data) => (
            <View key={item.id}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ marginBottom: 14, borderRadius: 14, overflow: "hidden" }}
                onPress={() => navigation.navigate("DetailScreen", { item })}
              >
                <SharedElement id={`item.${item.id}.image_url`}>
                  <Image
                    source={{ uri: item.image_url }}
                    style={{ borderRadius: 14, width: ITEM_WIDTH, height: ITEM_HEIGHT }}
                    resizeMode="cover"
                    />
                  </SharedElement>
                  <View style={{ position: "absolute", bottom: 20, left: 10, flexDirection: "row" }}>
                    <SharedElement id={`item.${item.id}.iconName`}>
                      <SimpleLineIcons color="white" size={40} name={item.iconName} />
                    </SharedElement>
                    <View style={{ flexDirection: "column", paddingLeft: 6 }}>
                      <SharedElement id={`item.${item.id}.title`}>
                        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold", lineHeight: 28 }}>
                          {item.title}
                        </Text>
                      </SharedElement>
                      <SharedElement id={`item.${item.id}.description`}>
                        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", lineHeight: 18 }}>
                          {item.description}
                        </Text>
                      </SharedElement>
                    </View>
                  </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;