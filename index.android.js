import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

Navigation.startSingleScreenApp({
  screen: {
    screen: 'screens.Home', // unique ID registered with Navigation.registerScreen
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  drawer: { // optional, add this if you want a side menu drawer in your app
    left: { // optional, define if you want a drawer from the left
      screen: 'screens.SideMenuLeft', // unique ID registered with Navigation.registerScreen
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
    },
    right: { // optional, define if you want a drawer from the right
      screen: 'screens.SecondTabScreen', // unique ID registered with Navigation.registerScreen
      passProps: {} // simple serializable object that will pass as props to all top screens (optional)
    },
    style: { // ( iOS only )
      drawerShadow: true, // optional, add this if you want a side menu drawer shadow
      contentOverlayColor: 'white', // optional, add this if you want a overlay color when drawer is open
      leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
      rightDrawerWidth: 50 // optional, add this if you want a define right drawer width (50=percent)
    },
    type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
    animationType: 'slide', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
                                        // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
    disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});