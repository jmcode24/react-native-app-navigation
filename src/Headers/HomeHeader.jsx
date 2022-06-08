import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Fontisto, Ionicons } from '@expo/vector-icons';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>Discover</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default HomeHeader;