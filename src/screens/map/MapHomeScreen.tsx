import {SafeAreaView} from 'react-native-safe-area-context';
import DrawerButton from '../../components/DrawerButton';
import {Text} from 'react-native';

function MapHomeScreen() {
  return (
    <SafeAreaView>
      <DrawerButton />
      <Text>Map Home Screen</Text>
    </SafeAreaView>
  );
}

export default MapHomeScreen;
