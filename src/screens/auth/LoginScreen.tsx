import {View, SafeAreaView, TextInput} from 'react-native';
import InputField from '@/components/InputField';
import CustomButton from '@/components/CustomButton';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchema} from '@/validate/validate';
import {LoginFormValues} from '@/types/auth';
import {useRef} from 'react';
import useAuth from '@/hooks/useAuth';

const LoginScreen = () => {
  const {loginMutation} = useAuth();
  const passwordRef = useRef<TextInput | null>(null);
  const methods = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });
  const {handleSubmit} = methods;

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data);
  };

  return (
    <SafeAreaView className="flex-1 m-[30px]">
      <FormProvider {...methods}>
        <View className="gap-[20px] mb-[30px]">
          <InputField
            autoFocus
            name="email"
            placeholder="이메일"
            keyboardType="email-address"
            returnKeyType="next"
            inputMode="email"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <InputField
            ref={passwordRef}
            name="password"
            placeholder="비밀번호"
            returnKeyType="join"
            secureTextEntry
          />
        </View>
        <CustomButton
          label="로그인"
          variant="filled"
          size="large"
          onPress={handleSubmit(onSubmit)}
        />
      </FormProvider>
    </SafeAreaView>
  );
};

export default LoginScreen;
