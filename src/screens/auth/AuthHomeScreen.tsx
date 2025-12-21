import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Pressable, Text, View, SafeAreaView} from 'react-native';
import {AuthStackParamList} from '@/types/navigation';
import CustomButton from '@/components/CustomButton';
import Logo from '@/assets/MATZIP.svg';
type Navigation = StackNavigationProp<AuthStackParamList>;
const AuthHomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaView className="flex-1">
      <View className="flex items-center flex-1 py-[150px]">
        <Logo className="w-[200px] h-full"></Logo>
      </View>
      <View className="flex-1 px-[30px] flex flex-col w-full items-center gap-[5px]">
        <CustomButton
          label="이메일 로그인"
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          label="이메일 로그인"
          variant="outlined"
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          label="이메일 로그인"
          onPress={() => navigation.navigate('Login')}
        />
        <Pressable onPress={() => navigation.navigate('Signup')}>
          <Text className="underline font-medium p-[10px] text-black">
            이메일로 가입하기
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
