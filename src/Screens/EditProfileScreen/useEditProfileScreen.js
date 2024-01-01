import {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {launchImageLibrary} from 'react-native-image-picker';

const useEditProfileScreen = () => {
  const {dispatch, getState} = useReduxStore();
  const {userData} = getState('Auth');

  //GET IMAGE From Mobile
  const [profileData, setProfileData] = useState(null);
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
        }
      },
    );
  };

  return {
    userData,
    uploadFromGalary,
    profileData,
  };
};
export default useEditProfileScreen;
