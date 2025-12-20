import {RequestUserType, ResponseToken} from '@/types/auth';
import axiosInstance from './axios';
import {Profile} from '@/types/domain';
import {getEncryptStorage} from '@/utils/encryptStorage';
import {storageKeys} from '@/constants/keys';

async function postSignup({email, password}: RequestUserType): Promise<void> {
  await axiosInstance.post('/auth/signup', {email, password});
}

async function postLogin({
  email,
  password,
}: RequestUserType): Promise<ResponseToken> {
  const {data} = await axiosInstance.post('/auth/signin', {email, password});
  return data;
}

async function getProfile(): Promise<Profile> {
  const {data} = await axiosInstance.get('/auth/me');
  return data;
}

async function getAccessToken(): Promise<ResponseToken> {
  const refreshToken = await getEncryptStorage(storageKeys.REFRESH_TOKEN);

  const {data} = await axiosInstance.get('/auth/token', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
}

async function logout(): Promise<void> {
  await axiosInstance.post('/auth/logout');
}

export {postSignup, postLogin, getProfile, getAccessToken, logout};
