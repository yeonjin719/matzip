import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '@/types/navigation';

type Navigation = StackNavigationProp<AuthStackParamList>;
const AuthHomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.navigate('Login')}>
        Welcome to the Auth Home Screen
      </Text>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
