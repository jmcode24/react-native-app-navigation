import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontWeight: "bold"}}>User Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});

export default ProfileHeader;