import {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {logOutAuth, logOutUser} from '../../Redux/Action/AuthAction';
import {useMutation} from '@tanstack/react-query';
import {DeleteUserUrl, deleteAccUrl} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {logoutService} from '../../Services/AuthServices';

const useSettingScreen = ({navigate}) => {
  const {dispatch} = useReduxStore();

  const [alertState, setAlertState] = useState({
    logoutAlert: false,
    deleteAlert: false,
  });

  const {deleteAlert, logoutAlert} = alertState;

  const updateState = data => setAlertState(prev => ({...prev, ...data}));

  const toggleAlert = state => updateState({[state]: !alertState[state]});

  const dynamicRoute = route => navigate(route);

  const onConfirm = val => {
    toggleAlert(val, false);
    if (val == 'logoutAlert') logoutFunc();
    else {
      setTimeout(() => {
        mutate();
      }, 900);
    }
  };

  const {mutate} = useMutation({
    mutationFn: () => API.delete(DeleteUserUrl),
    onSuccess: async ({ok, data}) => {
      console.log('skldbvklsdbklvsbdklvbsdlkvbskldvblksdv', data);
      if (ok) {
        successMessage(data?.message);
        dispatch(logOutAuth());
      } else errorMessage(data?.message);
    },
    onError: e => errorMessage(e),
  });

  const logoutFunc = () => {
    toggleAlert(
      (logoutAlert && 'logoutAlert') || (deleteAlert && 'deleteAlert'),
    );
    setTimeout(() => {
      dispatch(logOutAuth());
    }, 900);
  };

  return {
    toggleAlert,
    logoutAlert,
    deleteAlert,
    onConfirm,
    dynamicRoute,
  };
};
export default useSettingScreen;
