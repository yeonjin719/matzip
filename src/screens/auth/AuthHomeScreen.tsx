import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text} from 'react-native';

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
