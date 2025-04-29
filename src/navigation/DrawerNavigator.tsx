import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WaterTrackerScreen from '../screens/WaterTrackerScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type DrawerParamList = {
  WaterTracker: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="WaterTracker">
      <Drawer.Screen name="WaterTracker" component={WaterTrackerScreen} options={{ title: 'Su Takibi' }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profilim' }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
