import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Fontisto name="nav-icon-grid-a" size={25} color="black" />
        <Text style={{marginHorizontal: 90, fontSize: 30, fontWeight: "bold"}}>Discover</Text>
        <Ionicons name="ios-search-sharp" size={25} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  }
});

export default HomeHeader;