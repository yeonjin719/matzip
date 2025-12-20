import axios from 'axios';
import {Platform} from 'react-native';

// 실 기기에서 테스트 하고싶으면 자신의 로컬 IP로 변경할 것
// ifconfig | grep inet 으로 알 수 있음
export const baseURL = {
  ios: 'http://localhost:3030',
  android: 'http://10.0.2.2:3030',
};

const axiosInstance = axios.create({
  baseURL: Platform.OS === 'android' ? baseURL.android : baseURL.ios,
});

export default axiosInstance;
