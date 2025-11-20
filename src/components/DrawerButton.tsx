import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {MainDrawerParamList} from '../types/navigation';
import Ionicons from '@react-native-vector-icons/ionicons';
import colors from '../styles/colors';

type Navigation = DrawerNavigationProp<MainDrawerParamList>;
function DrawerButton({color = colors.black}) {
  const navigation = useNavigation<Navigation>();
  const openDrawer = () => {
    console.log('Drawer opened');
    navigation.openDrawer();
  };
  return (
    <Pressable
      onPress={openDrawer}
      className={'flex items-start justify-start h-fit pl-[18px]'}>
      <Ionicons name="menu" size={25} color={color}/>
    </Pressable>
  );
}

export default DrawerButton;
