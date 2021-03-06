import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile75242Navigator from '../features/UserProfile75242/navigator';
import Maps75223Navigator from '../features/Maps75223/navigator';
import Settings75201Navigator from '../features/Settings75201/navigator';
import Settings75186Navigator from '../features/Settings75186/navigator';
import NotificationList75185Navigator from '../features/NotificationList75185/navigator';
import Maps75184Navigator from '../features/Maps75184/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile75242: { screen: UserProfile75242Navigator },
Maps75223: { screen: Maps75223Navigator },
Settings75201: { screen: Settings75201Navigator },
Settings75186: { screen: Settings75186Navigator },
NotificationList75185: { screen: NotificationList75185Navigator },
Maps75184: { screen: Maps75184Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
