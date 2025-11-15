import {useNavigation} from '@react-navigation/native';
import {Pressable, Text} from 'react-native';

function DrawerButton() {
  const navigation = useNavigation();
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
