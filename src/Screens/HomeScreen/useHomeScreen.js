import {useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {homeDataUrl} from '../../Utils/Urls';

const useHomeScreen = () => {
  const {data} = useQuery({
    queryKey: ['homeData'],
    queryFn: () => API.get(homeDataUrl),
  });

  return {
    homeData: data?.data,
  };
};

export default useHomeScreen;
