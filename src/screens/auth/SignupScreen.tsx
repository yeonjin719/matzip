import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import useAuth from '@/hooks/useAuth';
import {SignupFormValues} from '@/types/auth';
import {signupSchema} from '@/validate/validate';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRef} from 'react';

import {FormProvider, useForm} from 'react-hook-form';
import {View, SafeAreaView, TextInput} from 'react-native';

const SignupScreen = () => {
  const {signupMutation, loginMutation} = useAuth();
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const methods = useForm<SignupFormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
    resolver: yupResolver(signupSchema),
  });

  const {handleSubmit} = methods;

  const onSubmit = (data: SignupFormValues) => {
    signupMutation.mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          loginMutation.mutate({
            email: data.email,
            password: data.password,
          });
        },
      },
    );
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
            secureTextEntry
            textContentType="oneTimeCode"
            placeholder="비밀번호"
            returnKeyType="next"
            onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          />
          <InputField
            ref={passwordConfirmRef}
            name="confirmPassword"
            placeholder="비밀번호 확인"
            secureTextEntry
            returnKeyType="done"
          />
        </View>
        <CustomButton
          label="회원가입"
          variant="filled"
          size="large"
          onPress={handleSubmit(onSubmit)}
        />
      </FormProvider>
    </SafeAreaView>
  );
};

export default SignupScreen;
