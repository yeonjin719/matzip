import {SafeAreaView} from 'react-native-safe-area-context';
import DrawerButton from '@/components/DrawerButton';
import {Text} from 'react-native';
import useAuth from '@/hooks/useAuth';

function MapHomeScreen() {
  const {logoutMutation} = useAuth();
  return (
    <SafeAreaView>
      <DrawerButton />
      <Text>Map Home Screen</Text>
      <Text onPress={() => logoutMutation.mutate({})}>로그아웃</Text>
    </SafeAreaView>
  );
}

export default MapHomeScreen;
