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
import {loadingFalse} from '../../Redux/Action/isloadingAction';

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
      dispatch(loadingFalse());
      console.log('osdibvklsdbvbsdlvkbsdklsdbvklsd', res);
      if (ok) {
        dispatch({
          type: types.UpdateProfile,
          payload: res.user,
        });
        successMessage('Your profile updated sucessfully!');
      }
    },
    onError: ({message}) => {
      dispatch(loadingFalse());
      errorMessage('Problem occurred while uploading data.');
    },
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

  const saveName = body => {
    onBackPress();
    endPointRef.current = updateUserNameUrl;
    mutate(body);
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
