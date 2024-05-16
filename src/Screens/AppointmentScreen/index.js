import React from 'react';
import {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import BackHeader from '../../Components/BackHeader';
import {filterWhite} from '../../Assets';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import UpcomingApp from './UpcomingApp';
import RequestApp from './RequestApp';
import HistoryApp from './HistoryApp';
import {styles} from './styles';
import {Colors} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import useAppointmentScreen from './useAppointmentScreen';

const AppointmentScreen = ({navigation}) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={{flex: 1}}>
      <BackHeader icon={filterWhite} headerTitle={'Appointments'} />
      <Tab.Navigator
        initialRouteName={'Requests'}
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: Colors.textGray,
          tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          tabBarStyle: styles.tabBarStyle,
          headerShown: false,
        }}
        sceneContainerStyle={{
          backgroundColor: Colors.themeBlack,
        }}>
        <Tab.Screen
          name="Requests"
          options={{
            title: 'Requests',
            tabBarAllowFontScaling: false,
            animationEnabled: true,
            tabBarLabelStyle: {
              fontStyle: 'normal',
              textTransform: 'none',
            },
          }}
          component={RequestApp}
          // initialParams={allData?.requests}
        />
        <Tab.Screen
          name={`Upcoming`}
          options={{
            title: 'Upcoming',
            tabBarAllowFontScaling: false,
            animationEnabled: true,
            tabBarLabelStyle: {
              fontStyle: 'normal',
              textTransform: 'none',
            },
          }}
          component={UpcomingApp}
          // initialParams={allData?.upcoming}
        />
        <Tab.Screen
          name={`History`}
          options={{
            title: 'History',
            tabBarAllowFontScaling: false,
            animationEnabled: true,
            tabBarLabelStyle: {
              fontStyle: 'normal',
              textTransform: 'none',
            },
          }}
          component={HistoryApp}
          initialParams={[]}
        />
      </Tab.Navigator>
    </View>
  );
};

export default memo(AppointmentScreen);
