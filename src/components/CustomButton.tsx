import {Pressable, View, type GestureResponderEvent} from 'react-native';
import {Text} from 'react-native-gesture-handler';
interface CustomButtonProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'small';
  onPress?: (event: GestureResponderEvent) => void;
}

function CustomButton({
  label,
  variant = 'filled',
  size = 'large',
  onPress,
}: CustomButtonProps) {
  return (
    <Pressable onPress={onPress} className="w-full">
      {({pressed}) => (
        <View
          className={`rounded-[3px] justify-center items-center
          ${variant === 'filled' ? 'bg-color-pink-700' : 'border-[1px] border-color-pink-700 bg-white'}
          ${size === 'large' ? 'w-full h-[45px]' : 'px-[12px] h-[35px]'}
          ${pressed ? 'opacity-60' : 'opacity-100'}
          `}>
          <Text
            className={`text-[14px] font-bold ${variant === 'filled' ? 'text-white' : 'text-color-pink-700'}`}>
            {label}
          </Text>
        </View>
      )}
    </Pressable>
  );
}
export default CustomButton;
