import {loadingFalse, loadingTrue} from '../../Redux/Action/isloadingAction';
import {successMessage, errorMessage} from '../../Config/NotificationMessage';
import useReduxStore from '../../Hooks/UseReduxStore';
import auth from '@react-native-firebase/auth';
import {forgotPasswordAction} from '../../Redux/Action/AuthAction';
import {useRef, useState} from 'react';
import {sendVerficationCodeTwilo} from '../../Services/TwiloServices';
import API from '../../Utils/helperFunc';
import {
  SendVerficatioUrl,
  UpdateProfileUrl,
  sendNumberToServerUrl,
  sendOTPUrl,
  verifyNumberUrl,
  verifyOTPUrl,
} from '../../Utils/Urls';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {types} from '../../Redux/types';
import {useMutation} from '@tanstack/react-query';

const {default: useFormHook} = require('../../Hooks/UseFormHooks');
const {default: Schemas} = require('../../Utils/Validation');

const useOTPScreen = ({navigate, goBack, reset, popToTop}, {params}) => {
  const {item, afterBackFun} = params;

  const refTimer = useRef();
  const {dispatch, getState} = useReduxStore();
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const [isResend, setIsResend] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const {mutateAsync} = useMutation({
    mutationFn: body => {
      return API.post(verifyOTPUrl, body);
    },
    onSuccess: ({ok, data}) => {
      console.log('ksdbvjksbdkljvbsdkljvblsdbvlsdbvlksdbklsdbkl;ds', data);
      if (ok) {
        successMessage(data?.message);
        goBack();
        afterBackFun(data?.data);
      } else errorMessage(data?.message);
    },
  });

  const VerifyCode = () => {
    mutateAsync({
      id: item?.appointment_request[0]?.appointment_id,
      code: value,
    });
  };

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(sendOTPUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  const sendVerfication = () =>
    mutate({
      id: item?.users?.id,
      app_id: item?.appointment_request[0]?.appointment_id,
    });

  const resendOTP = () => {
    refTimer.current.resetTimer();
    setIsResend(false);
    sendVerfication();
  };

  const timerCallbackFunc = timerFlag => {
    // Setting timer flag to finished
    setIsResend(true);
    console.warn(
      'You can alert the user by letting him know that Timer is out.',
    );
  };

  return {
    props,
    getCellOnLayoutHandler,
    value,
    setValue,
    ref,
    CELL_COUNT,
    VerifyCode,
    goBack,
    isResend,
    setIsResend,
    refTimer,
    timerCallbackFunc,
    resendOTP,
  };
};

export default useOTPScreen;
