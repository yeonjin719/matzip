import EncryptedStorage from 'react-native-encrypted-storage';

// 로컬스토리지와 비슷하지만, 민감한 정보를 암호화하여 저장하는 용도

async function setEncryptStorage<T>(key: string, data: T) {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
}

async function getEncryptStorage<T>(key: string): Promise<T | null> {
  const data = await EncryptedStorage.getItem(key);

  if (!data) {
    return null;
  }

  return JSON.parse(data) as T;
}

async function removeEncryptStorage(key: string) {
  const data = await getEncryptStorage(key);
  if (!data) {
    return;
  }
  await EncryptedStorage.removeItem(key);
}

export {setEncryptStorage, getEncryptStorage, removeEncryptStorage};
