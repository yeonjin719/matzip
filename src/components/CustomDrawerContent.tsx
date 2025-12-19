import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-gesture-handler';
import Ionicons from '@react-native-vector-icons/ionicons';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <SafeAreaView className="flex-1">
      <DrawerContentScrollView {...props}>
        <View className="self-center pb-[30px] gap-[5px]">
          <Image source={require('@/assets/default-user.png')} />
          <Text className="text-center font-[14px]">User</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View className="flex-row justify-end items-center p-[20] gap-[10px] border-t-[1px] border-t-gray-200">
        <Ionicons name="settings-outline" size={24} />
        <Text className="font-[16x]">설정</Text>
      </View>
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
