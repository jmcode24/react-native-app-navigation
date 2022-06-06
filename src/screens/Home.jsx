import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

const Home = () => {
  const { navigate } = useNavigation();

  const data = [
    { pic: require("../../assets/flower1.jpg"), headline: "Does Dry in January Actually Improve your health?", dp: require("../../assets/1.korkor.jpg"), name: "Kay Korkor", time: "• 4 mins read" },
    { pic: require("../../assets/flower2.jpg"), headline: "How to Seem Like You Always Have Your Shot Together.", dp: require("../../assets/2.sillas.jpg"), name: "Sillas Aggrey", time: "• 4 mins read" },
    { pic: require("../../assets/flower3.jpg"), headline: "You do Hire A Designer to Make Something. You Hire Them.", dp: require("../../assets/3.Kelvin.jpg"), name: "Kelvin Kabute", time: "• 4 mins read" },
    { pic: require("../../assets/flower4.jpg"), headline: "How to Seem Like You Always Have Your Shot Together.", dp: require("../../assets/5.jay.png"), name: "Jay West", time: "• 4 mins read" },
    { pic: require("../../assets/flower5.jpg"), headline: "Does Dry in January Actually Improve your health?", dp: require("../../assets/6.joe.jpg"), name: "Joseph Nartey", time: "• 4 mins read" },
    { pic: require("../../assets/flower6.jpg"), headline: "You do Hire A Designer to Make Something. You Hire Them.", dp: require("../../assets/7.henry.jpg"), name: "Henry Quartey", time: "• 4 mins read" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
        data={data}
        keyExtractor={(item, index) => (item, index)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={ () => navigate("Details", { details: item,}) } style={{ padding: 10}} >
            <View style={styles.listCont}>
            <View style={{flex: 4}}>
              <Image source={item.pic} style={styles.picStyle}/>
            </View>
            <View style={{flex: 6, marginLeft: 10}}>
              <Text style={{fontSize: 21, fontWeight: "bold"}}>{item.headline}</Text>
              <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 42, margin: 5, overflow: "auto"}}>
                <Image source={item.dp} style={styles.dpStyle}/>
                <Text style={{margin: 4, fontSize: 13, fontWeight: "bold", fontStyle: "italic", color: "slateblue"}}>{item.name}</Text>
                <Text style={{color: "grey"}}>{item.time}</Text>
              </View>
            </View>
            </View>
          </TouchableOpacity>
        )} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },

  listCont: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row"
  },

  picStyle: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },

  dpStyle: {
    resizeMode: "contain",
    height: 25,
    width: 25,
    borderRadius: 12.5
  }
});

export default Home;