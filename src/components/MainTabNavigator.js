import React from 'react';
import {Platform} from 'react-native';
import {TabNavigator, TabView} from 'react-navigation';
import {SettingsScreen} from './screens/settings/SettingsScreen';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../constants/colors';
import {TransactionStackNavigator} from './screens/transactions/TransactionStackNavigator';
import {BudgetScreen} from './screens/budget/BudgetScreen';

BudgetScreen.navigationOptions = {
  tabBarLabel: 'Budget',
  // eslint-disable-next-line react/prop-types,react/display-name
  tabBarIcon: ({tintColor, focused}) => (
    <Ionicons
      name={focused ? 'ios-stats' : 'ios-stats-outline'}
      size={26}
      style={{color: tintColor}}
    />
  )
};

TransactionStackNavigator.navigationOptions = {
  tabBarLabel: 'Accounts',
  // eslint-disable-next-line react/prop-types,react/display-name
  tabBarIcon: ({tintColor, focused}) => (
    <Ionicons
      name={focused ? 'ios-list' : 'ios-list-outline'}
      size={26}
      style={{color: tintColor}}
    />
  )
};

SettingsScreen.navigationOptions = {
  tabBarLabel: 'Settings',
  // eslint-disable-next-line react/prop-types,react/display-name
  tabBarIcon: ({tintColor, focused}) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{color: tintColor}}
    />
  )
};

const iosTabOptions = {
  tabBarOptions: {
    activeTintColor: colors.header
  }
};

const androidTabOptions = {
  tabBarOptions: {
    activeTintColor: colors.header,
    inactiveTintColor: 'black',
    showIcon: true,
    tabBarComponent: TabView.TabBarBottom,
    style: {
      backgroundColor: '#EEEEEE'
    },
    renderIndicator: () => null
  },
  tabBarPosition: 'bottom'
};

export const MainTabNavigator = TabNavigator(
  {
    Budget: {
      screen: BudgetScreen
    },
    Transactions: {
      screen: TransactionStackNavigator
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {...(Platform.OS === 'ios' ? iosTabOptions : androidTabOptions)}
);
