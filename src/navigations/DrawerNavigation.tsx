import {createDrawerNavigator} from '@react-navigation/drawer';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import {createStaticNavigation} from '@react-navigation/native';
import {MapStack} from './MapNavigation';
import {FeedStack} from './FeedNavigation';
import CustomDrawerContent from '../components/CustomDrawerContent';
import colors from '../styles/colors';
import DrawerButton from '../components/DrawerButton';

const MainDrawer = createDrawerNavigator({
  screenOptions: {
    drawerStyle: {
      width: '60%',
      backgroundColor: colors.white,
    },
    drawerLabelStyle: {
      fontWeight: '600',
    },
    drawerItemStyle: {
      borderRadius: 5,
      marginBottom: 5,
    },
    drawerType: 'front',
    drawerActiveTintColor: colors.white,
    drawerActiveBackgroundColor: colors.pink[700],
    drawerInactiveTintColor: colors.gray[500],
    drawerInactiveBackgroundColor: colors.gray[100],
    headerTitleAlign: 'center',
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: colors.black,
    headerStyle: {
      backgroundColor: colors.white,
      shadowColor: colors.gray[500],
    },
    headerTitleStyle: {
      fontSize: 16,
    },
  },
  screens: {
    Map: {
      screen: MapStack,
      options: {
        title: '홈',
        headerShown: false,
        headerLeft: () => <DrawerButton />,
      },
    },
    Feed: {
      screen: FeedStack,
      options: {
        title: '피드',
        headerShown: false,
      },
    },
    Calendar: {
      screen: CalendarScreen,
      options: {
        title: '캘린더',
        headerLeft: () => <DrawerButton />,
      },
    },
  },
  drawerContent: props => <CustomDrawerContent {...props} />,
});

const DrawerNavigation = createStaticNavigation(MainDrawer);

export default DrawerNavigation;
