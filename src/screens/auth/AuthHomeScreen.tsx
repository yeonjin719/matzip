import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const AuthHomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Login')}>
        Welcome to the Auth Home Screen
      </Text>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
