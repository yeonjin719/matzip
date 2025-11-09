import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, SafeAreaView, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <SafeAreaView className="flex-1">
      <DrawerContentScrollView {...props}>
        <View>
          <Image source={require('../assets/default-user.png')} />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View className="flex-row justify-end p-[20] border-t-[1px] border-t-gray-200">
        <Text className="font-[15px]">설정</Text>
      </View>
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
