import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BigButton from '@/components/BigButton';
const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to the Login Screen</Text>
      <BigButton />
    </SafeAreaView>
  );
};

export default LoginScreen;
