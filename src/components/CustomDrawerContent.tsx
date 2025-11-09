import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import {colors} from '../constants/colors';

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
        <Text style={styles.menuText}>설정</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.GRAY_200,
  },
  menuText: {
    fontSize: 15,
  },
});

export default CustomDrawerContent;
