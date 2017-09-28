import React, {Component} from 'react';
import { Navigation } from 'react-native-navigation';

import SideMenuLeft from './SideMenuLeft';
import SecondTabScreen from './SecondTabScreen';
import Home from './Home';
import FashionWomanPage from './FashionWomanPage';
import MenuOne from './MenuOne';
import MenuTwo from './MenuTwo';
import TabHome from './TabHome';

export function registerScreens() {
  Navigation.registerComponent('screens.SideMenuLeft', () => SideMenuLeft);
  Navigation.registerComponent('screens.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('screens.Home', () => Home);
  Navigation.registerComponent('screens.FashionWomanPage', () => FashionWomanPage);
  Navigation.registerComponent('screens.MenuOne', () => MenuOne);
  Navigation.registerComponent('screens.MenuTwo', () => MenuTwo);
  Navigation.registerComponent('screens.TabHome', () => TabHome);
}