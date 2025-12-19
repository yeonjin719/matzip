import {useNavigation} from '@react-navigation/native';
import {Text, SafeAreaView} from 'react-native';
import {FeedStackParamList} from '@/types/navigation';
import {StackNavigationProp} from '@react-navigation/stack';

type Navigation = StackNavigationProp<FeedStackParamList>;
function FeedListScreen() {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaView>
      <Text>Feed List Screen</Text>
      <Text onPress={() => navigation.navigate('FeedDetail', {id: 1})}>
        1번 장소
      </Text>
    </SafeAreaView>
  );
}

export default FeedListScreen;
