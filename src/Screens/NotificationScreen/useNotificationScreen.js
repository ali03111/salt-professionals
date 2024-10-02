import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {
  changeAppStatusUrl,
  getNotificationUrl,
  sendReqUrl,
} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {useCallback} from 'react';

const useNotificationScreen = () => {
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const {mutate} = useMutation({
    mutationFn: body => {
      return API.post(changeAppStatusUrl, body);
    },
    onSuccess: ({ok, data}) => {
      console.log('jkdskjlasdblkbsdklvblksdnbvlkdsnvklsd', data);
      if (ok) {
        queryClient.invalidateQueries({queryKey: ['homeData']});
        queryClient.invalidateQueries({queryKey: ['getAllNoti']});
        successMessage(data?.message);
      } else errorMessage(data?.message);
    },
  });

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
    onAppPress: ({appId, status}) =>
      mutate({
        appointment_id: appId,
        aor: status,
      }),
  };
};

export default useNotificationScreen;
