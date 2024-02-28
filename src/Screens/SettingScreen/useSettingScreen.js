import useReduxStore from '../../Hooks/UseReduxStore';
import {logOutAuth} from '../../Redux/Action/AuthAction';

const useSettingScreen = () => {
  const {dispatch} = useReduxStore();

  const logoutFunc = () => {
    dispatch(logOutAuth);
  };

  return {
    logoutFunc,
  };
};
export default useSettingScreen;
