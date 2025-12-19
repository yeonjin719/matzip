import {createDrawerNavigator} from '@react-navigation/drawer';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import {createStaticNavigation} from '@react-navigation/native';
import {MapStack} from './MapNavigation';
import {FeedStack} from './FeedNavigation';
import CustomDrawerContent from '../components/CustomDrawerContent';
import colors from '../styles/colors';
import DrawerButton from '../components/DrawerButton';
import {MainDrawerParamList} from '../types/navigation';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

type DrawerIconName = 'map' | 'book' | 'calendar';

function DrawerIcons(routeName: keyof MainDrawerParamList, focused: boolean) {
  let iconName: DrawerIconName;
  switch (routeName) {
    case 'Map': {
      iconName = 'map';
      break;
    }
    case 'Feed': {
      iconName = 'book';
      break;
    }
    case 'Calendar': {
      iconName = 'calendar';
      break;
    }
  }
  return (
    <FontAwesome6
      name={iconName}
      size={20}
      iconStyle="solid"
      color={focused ? colors.white : colors.gray[300]}
    />
  );
}
const MainDrawer = createDrawerNavigator({
  screenOptions: ({route}) => {
    return {
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
      drawerIcon: ({focused}) =>
        DrawerIcons(route.name as keyof MainDrawerParamList, focused),
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
    };
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
