import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {
  CheckIsCurrentDateUrl,
  GetDetailsUrl,
  changeAppStatusUrl,
  sendOTPUrl,
  startORendAppUrl,
} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useEffect, useState} from 'react';
import {removeTimeFromDate} from '../../Utils/globalFunctions';

const useAppointmentDetail = ({navigate, goBack}, {params}) => {
  const {data, error, isSuccess, isLoading} = useQuery({
    queryKey: ['appointDetail'],
    queryFn: () => API.get(GetDetailsUrl + params?.id),
  });

  const [status, setStatus] = useState(null);

  const checkIsDate = useMutation({
    mutationFn: body => {
      return API.post(CheckIsCurrentDateUrl, {
        app_id: data?.data?.appointment_request[0]?.appointment_id,
        current_date: removeTimeFromDate(new Date()),
      });
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['appointDetail']});
      } else errorMessage(data?.message);
    },
  });

  useEffect(() => {
    if (isSuccess && !isLoading) {
      checkIsDate.mutate();
    }
  }, []);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(changeAppStatusUrl, body);
    },
    onSuccess: ({ok, data}) => {
      console.log('sjlkdbvklsblvbsdklbvlsdbvlksdbk.dsklvnklds', data);
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['appointDetail']}),
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
      console.log('skjdbvjklsdblvksbdlkvbsdlknvlsdhl;vkdsn;s', data);
      if (ok) {
        navigate('OTPScreen', {
          item: params,
          afterBackFun: data =>
            queryClient.invalidateQueries({queryKey: ['appointDetail']}),
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
        appointment_id: data?.data?.id,
        aor: false,
      }),
    false: () => {
      if (data?.data?.is_current_date == 0) goBack();
      else
        mutateAsync({
          id: data?.data?.users?.id,
          app_id: data?.data?.appointment_request[0]?.appointment_id,
        });
    },
  };
  const onAcceptPress = {
    true: () =>
      mutate({
        appointment_id: data?.data?.id,
        aor: true,
      }),
    false: () =>
      navigate('ChatScreen', {
        app_id: data?.data?.id,
        userId: data?.data?.users?.id,
      }),
  };

  return {data: data?.data, onAcceptPress, onCancelPress, status};
};

export default useAppointmentDetail;
