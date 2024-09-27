import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {getNotificationUrl, sendReqUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useCallback} from 'react';

const useNotificationScreen = () => {
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const {data} = useQuery({
    queryKey: ['getAllNoti'],
    queryFn: () => API.get(getNotificationUrl),
  });

  const onRefresh = useCallback(() => {
    queryClient.fetchQuery({
      queryKey: ['getAllNoti'],
      staleTime: 1000,
    });
  }, []);

  return {
    notiData: data?.data,
    onRefresh,
  };
};

export default useNotificationScreen;
