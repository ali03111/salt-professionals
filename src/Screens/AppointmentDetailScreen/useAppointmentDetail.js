import {useMutation, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {
  changeAppStatusUrl,
  sendOTPUrl,
  startORendAppUrl,
} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useEffect, useState} from 'react';

const useAppointmentDetail = ({navigate, goBack}, {params}) => {
  const data = params;

  const [status, setStatus] = useState(null);

  const [appointData, setAppointData] = useState(null);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(changeAppStatusUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['homeData']});
        setStatus(data?.aor);
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  const {mutateAsync} = useMutation({
    mutationFn: body => {
      return API.post(sendOTPUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        navigate('OTPScreen', {
          item: params,
          afterBackFun: data => setAppointData(data),
        });
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  const statusChangeFun = useMutation({
    mutationFn: body => {
      return API.post(startORendAppUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['homeData']});
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  const onCancelPress = {
    true: () =>
      mutate({
        appointment_id: data?.id,
        aor: false,
      }),
    undefined: () => {
      if (data?.is_current_date == 1) goBack();
      else
        mutateAsync({
          id: data?.users?.id,
          app_id: data?.appointment_request[0]?.appointment_id,
        });
    },
  };
  const onAcceptPress = {
    true: () =>
      mutate({
        appointment_id: data?.id,
        aor: true,
      }),
    false: () => console.log('klsnvlksdnlkvnsdkl'),
  };

  return {data: appointData ?? data, onAcceptPress, onCancelPress, status};
};

export default useAppointmentDetail;
