import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import API, {fetchPostWithToken} from '../../Utils/helperFunc';
import {UploadPastWorkImagesUrl, getPastWorkImagesUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {loadingFalse} from '../../Redux/Action/isloadingAction';
import {store} from '../../Redux/Reducer';
import useReduxStore from '../../Hooks/UseReduxStore';

const usePortfolioScreen = () => {
  const {dispatch} = useReduxStore();

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const {mutate} = useMutation({
    mutationFn: data => {
      return fetchPostWithToken(
        UploadPastWorkImagesUrl,
        data,
        true,
        'files[]',
        true,
      );
    },
    onSuccess: ({ok, res}) => {
      dispatch(loadingFalse());
      console.log('osdibvklsdbvbsdlvkbsdklsdbvklsd', res);
      if (ok) {
        successMessage('Your profile updated sucessfully!');
      } else {
        dispatch(loadingFalse());
        errorMessage(data?.message);
      }
    },
    onError: () => {
      errorMessage('Problem occurred while uploading images.');
      dispatch(loadingFalse());
    },
  });

  const {data, ok} = useQuery({
    queryKey: ['pastWorkImages'],
    queryFn: () => API.get(getPastWorkImagesUrl),
  });

  const [portfolioImages, setPorfolioImage] = useState(
    data?.data?.prof_past_work ?? [],
  );

  const uploadFromGalary = () => {
    launchImageLibrary(
      {
        selectionLimit: 10,
        mediaType: 'photo',
        // maxWidth: 300,
        // maxHeight: 300,
      },
      res => {
        if (!res?.didCancel) {
          console.log('imag222e', res.assets);
          mutate(res?.assets);
          setPorfolioImage(prev => [...prev, ...res?.assets]);
        }
      },
    );
  };
  return {
    portfolioImages,
    uploadFromGalary,
    serverImages: data?.data?.prof_past_work ?? [],
  };
};

export default usePortfolioScreen;
