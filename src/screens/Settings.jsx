import React from 'react';
import { View , StyleSheet, Image, Text} from 'react-native';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image source={require("../../assets/maintenance-3.jpg")} style={styles.img} />
      </View>

      <View style={styles.txt}>
        <Text style={{fontSize: 25, fontWeight: "bold", color: "green"}}>This page is under maintenance. Check again later</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingHorizontal: 16
  }, 

  imgCont: {
    flex: 5
  },

  img: {
    resizeMode: "contain",
    height: "100%",
    width: "100%"
  },

  txt: {
    flex: 5
  }
});

export default Settings;