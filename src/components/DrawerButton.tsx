import {DrawerNavigationProp} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Pressable, Text} from 'react-native';
import {MainDrawerParamList} from '../types/navigation';

type Navigation = DrawerNavigationProp<MainDrawerParamList>;
function DrawerButton() {
  const navigation = useNavigation<Navigation>();
  const openDrawer = () => {
    console.log('Drawer opened');
    navigation.openDrawer();
  };
  return (
    <Pressable onPress={openDrawer}>
      <Text className="text-[20px]">서랍</Text>
    </Pressable>
  );
}

export default DrawerButton;
