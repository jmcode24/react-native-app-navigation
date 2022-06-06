import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const FavoritesHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: "bold"}}>Favorites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});

export default FavoritesHeader;