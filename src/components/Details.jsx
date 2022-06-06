import React from "react";
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Details = ({ route }) => {
  const {pic, headline, dp, name, time} = route.params.details;
  const navigation = useNavigation();

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={{flex:1}}>
        <View style={styles.nav}>
          <TouchableOpacity style={{flex: 5}} onPress={() => navigation.goBack()}>
            <Text><Ionicons name="arrow-back" size={30} color="black" /> <Text style={{fontSize: 30, fontWeight: "bold"}}>Blogs</Text></Text>
          </TouchableOpacity>
          <View style={{flex: 5, flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
            <Ionicons name="md-headset-outline" size={30} color="grey" style={{marginRight: 15}} />
            <Ionicons name="heart-outline" size={30} color="grey" style={{marginRight: 15}} />
            <Ionicons name="share-social-outline" size={30} color="grey" />
          </View>
        </View>
        <View style={styles.Img}>
          <Image source={pic} style={styles.picStyle}/>
        </View>
        <View style={styles.info}>
          <Text style={{fontSize: 25, fontWeight: "bold"}}>{headline}</Text>

          <View style={{flexDirection: "row",justifyContent: "flex-start", alignItems: "Center", marginVertical: 15}}>
            <Image source={dp} style={styles.dpStyle}/>
            <Text style={{fontWeight: "bold", fontStyle: "italic", color: "slateblue", marginVertical: 8, marginLeft: 10}}>{name}</Text>
            <Text style={{color: "grey", marginVertical: 8, marginLeft: 10}}>{time}</Text>
          </View>

          <Text style={{fontSize: 18}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id orci augue. Donec accumsan venenatis enim in laoreet. Morbi a varius urna, in laoreet mauris. Curabitur vel arcu non arcu elementum rutrum. In viverra risus a porta imperdiet. Cras aliquam pulvinar augue sit amet ornare. Suspendisse ultrices turpis id turpis lacinia, sed euismod mauris sollicitudin. In non quam interdum, accumsan magna sed, vulputate tellus. Proin vel consectetur enim. Aenean diam felis, tincidunt at egestas id, imperdiet sit amet magna. Suspendisse eleifend quis urna non varius. Sed venenatis sollicitudin ante. Fusce eu commodo sem.

            Integer sagittis magna quis erat dictum maximus. Nulla consequat enim quis tristique efficitur. Nunc porttitor semper odio sed vulputate. Duis id augue malesuada, facilisis elit ac, dapibus diam. Morbi ac lacus porta, gravida risus in, luctus diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ultrices tellus in velit ultricies, quis fermentum augue vehicula. Mauris accumsan, sem eleifend sodales placerat, dui erat aliquam est, sed consectetur tellus nulla ac odio. Duis finibus est vel posuere placerat. Phasellus accumsan, nunc sit amet finibus aliquet, purus sapien condimentum libero, quis semper odio lacus eget nunc. Nam lobortis ornare felis, sed finibus diam.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  nav: {
    flex: 1,
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "flex-start",
    marginVertical: 8,
  },

  Img: {
    flex: 4,
    padding: 5,
  },

  picStyle: {
    resizeMode: "cover",
    height: "100%",
    width: "100%"
  },

  info: {
    flex: 5,
    padding: 5,
  },

  dpStyle: {
    resizeMode: "contain",
    height: 25,
    width: 25,
    borderRadius: 12.5
  }
});

export default Details;