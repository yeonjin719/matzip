import {Ref} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {Text, TextInput, TextInputProps, View} from 'react-native';

interface InputFieldProps extends TextInputProps {
  name: string;
  ref?: Ref<TextInput>;
}

function InputField({name, ref, ...props}: InputFieldProps) {
  const {
    control,
    formState: {errors},
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name as any}
      render={({field: {onChange, onBlur, value}}) => (
        <View>
          <TextInput
            {...props}
            autoCapitalize="none"
            spellCheck={false}
            submitBehavior="submit"
            ref={ref}
            autoCorrect={false}
            className={`border-[1px] justify-center h-[50px] px-[10px] text-[16px] text-black
                      ${errors[name] ? 'border-color-red-300' : 'border-color-gray-200'}
            `}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
          {errors[name] && (
            <Text className="text-[12px] text-color-red-500 ">
              {errors[name]?.message as string}
            </Text>
          )}
        </View>
      )}
    />
  );
}

export default InputField;
