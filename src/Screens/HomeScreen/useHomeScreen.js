import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {changeAppStatusUrl, homeDataUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useCallback, useState} from 'react';

const useHomeScreen = ({navigate}) => {
  const {data} = useQuery({
    queryKey: ['homeData'],
    queryFn: () => API.get(homeDataUrl),
  });

  const [refresh, setRefresh] = useState(false);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(changeAppStatusUrl, body);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['homeData']});
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

  const onRefresh = useCallback(() => {
    setRefresh(true);
    queryClient.fetchQuery({
      queryKey: ['homeData'],
      staleTime: 1000,
    });
    setRefresh(false);
  }, []);

  const dynamicNav = (route, item) => navigate(route, item);

  // console.log('first', data?.data);
  return {
    homeData: data?.data,
    dynamicNav,
    onRefresh,
    refresh,
    onAppPress: ({appId, status}) =>
      mutate({
        appointment_id: appId,
        aor: status,
      }),
  };
};

export default useHomeScreen;
