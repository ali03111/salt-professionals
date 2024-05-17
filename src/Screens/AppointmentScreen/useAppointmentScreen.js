import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {GetAllAppointUrl, changeAppStatusUrl} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useCallback} from 'react';

const useAppointmentScreen = ({navigate}) => {
  const {data} = useQuery({
    queryKey: ['allAppointData'],
    queryFn: () => API.get(GetAllAppointUrl),
  });

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(changeAppStatusUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        queryClient.invalidateQueries({
          queryKey: ['allAppointData'],
        });
        queryClient.invalidateQueries({
          queryKey: ['homeData'],
        });
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  const dynamicNav = (key, item) => navigate(key, item);

  const onRefresh = useCallback(() => {
    // setRefresh(true);
    queryClient.fetchQuery({
      queryKey: ['allAppointData'],
      staleTime: 1000,
    });
    // setRefresh(false);
  }, []);

  return {
    allData: data?.data,
    onRefresh,
    dynamicNav,
    onAppBook: ({appId, status}) =>
      mutate({
        appointment_id: appId,
        aor: status,
      }),
  };
};

export default useAppointmentScreen;
