import {useRef, useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {launchImageLibrary} from 'react-native-image-picker';
import {useMutation} from '@tanstack/react-query';
import {fetchPostWithToken} from '../../Utils/helperFunc';
import {
  baseURL,
  updateProfilePicNameUrl,
  updateUserNameUrl,
} from '../../Utils/Urls';
import {types} from '../../Redux/types';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useEditProfileScreen = navigation => {
  const {dispatch, getState} = useReduxStore();
  const {userData} = getState('Auth');
  const endPointRef = useRef('');
  const [userNameModal, setUserNameModal] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const {mutate} = useMutation({
    mutationFn: data => {
      return fetchPostWithToken(
        endPointRef.current,
        data,
        Boolean(endPointRef.current == updateProfilePicNameUrl),
        'image',
      );
    },
    onSuccess: ({ok, res}) => {
      console.log('osdibvklsdbvbsdlvkbsdklsdbvklsd', res);
      if (ok) {
        dispatch({
          type: types.UpdateProfile,
          payload: res.user,
        });
        successMessage('Your profile updated sucessfully!');
      }
    },
    onError: ({message}) => errorMessage(message),
  });

  const onBackPress = () => setUserNameModal(!userNameModal);

  const dynamicRoute = (routeName, item) =>
    navigation.navigate(routeName, item);

  //GET IMAGE From Mobile
  const uploadFromGalary = () => {
    launchImageLibrary(
      {
        selectionLimit: 1,
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
      },
      res => {
        if (!res?.didCancel) {
          console.log('imag222e', res.assets);
          setProfileData(res?.assets[0]);
          endPointRef.current = updateProfilePicNameUrl;
          mutate({image: res?.assets[0]});
        }
      },
    );
  };

  const saveName = text => {
    onBackPress();
    endPointRef.current = updateUserNameUrl;
    mutate({name: text});
  };

  return {
    userData,
    uploadFromGalary,
    profileData,
    userNameModal,
    onBackPress,
    dynamicRoute,
    saveName,
  };
};
export default useEditProfileScreen;
