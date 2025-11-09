import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';

function RootNavigation() {
  const isLogin = true; // TODO: 로그인 상태에 따른 조건문 처리
  return <>{isLogin ? <DrawerNavigation /> : <AuthNavigation />}</>;
}
export default RootNavigation;
