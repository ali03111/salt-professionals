import {useMutation, useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import API, {fetchPostWithToken} from '../../Utils/helperFunc';
import {UploadPastWorkImagesUrl, getPastWorkImagesUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const usePortfolioScreen = () => {
  const {mutate} = useMutation({
    mutationFn: data => {
      return fetchPostWithToken(
        UploadPastWorkImagesUrl,
        data,
        true,
        'image[]',
        true,
      );
    },
    onSuccess: ({ok, res}) => {
      console.log('osdibvklsdbvbsdlvkbsdklsdbvklsd', res);
      if (ok) {
        successMessage('Your profile updated sucessfully!');
      }
    },
    onError: ({message}) => errorMessage(message),
  });

  const {data, ok} = useQuery({
    queryKey: ['pastWorkImages'],
    queryFn: () => API.get(getPastWorkImagesUrl),
  });

  console.log('datadatadatadatadatadatadatadata', data?.data);

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
          setPorfolioImage(res?.assets);
        }
      },
    );
  };
  return {
    portfolioImages,
    uploadFromGalary,
  };
};

export default usePortfolioScreen;
