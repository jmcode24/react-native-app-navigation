import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons';
import Home from '../screens/Home';
import Folder from '../screens/Folder';
import Favorites from '../screens/Favorites';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import HomeHeader from '../Headers/HomeHeader';
import FolderHeader from '../Headers/FolderHeader';
import FavoritesHeader from '../Headers/FavoritesHeader';
import ProfileHeader from '../Headers/ProfileHeader';
import SettingsHeader from '../Headers/SettingsHeader';
import { Fontisto, Ionicons } from '@expo/vector-icons';

const Buttons = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'orange'}} >
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: (props) => (<AntDesign name="home" size={25} color="black" style={{ color: props.color}} />), tabBarLabel: () => {return null}, headerLeft: () => (<TouchableOpacity><Fontisto name="nav-icon-grid-a" size={25} color="black" /></TouchableOpacity>), headerRight: () => (<Ionicons name="ios-search-sharp" size={26} color="black" />), headerLeftContainerStyle: {paddingHorizontal: 16}, headerRightContainerStyle: {paddingHorizontal: 16},  headerTitle: (props) => <HomeHeader {...props}/>}}/>

      <Tab.Screen name="Folder" component={Folder} options={{ tabBarIcon: (props) => (<AntDesign name="folderopen" size={25} color="black" style={{ color: props.color}} />), tabBarLabel: () => {return null}, headerTitle: (props) => <FolderHeader {...props}/> }} />

      <Tab.Screen name="Favorites" component={Favorites} options={{ tabBarIcon: (props) => (<AntDesign name="hearto" size={25} color="black" style={{ color: props.color}} />), tabBarLabel: () => {return null}, headerTitle: (props) => <FavoritesHeader {...props}/> }} />

      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: (props) => (<AntDesign name="user" size={25} color="black" style={{ color: props.color}} />), tabBarLabel: () => {return null}, headerTitle: (props) => <ProfileHeader {...props}/> }} />

      <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: (props) => (<AntDesign name="setting" size={25} color="black" style={{ color: props.color}} />), tabBarLabel: () => {return null}, headerTitle: (props) => <SettingsHeader {...props}/>  }} />
    </Tab.Navigator>
  );
};


export default Buttons;