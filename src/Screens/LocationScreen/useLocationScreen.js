import {useState} from 'react';
import {locationType} from '../../Utils/localDB';
import {useMutation} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {selecteLocationUrl} from '../../Utils/Urls';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';
import {getProperLocation} from '../../Utils/globalFunctions';
import useReduxStore from '../../Hooks/UseReduxStore';
import {types} from '../../Redux/types';

const useLocationScreen = ({navigate}) => {
  const {getState, dispatch} = useReduxStore();

  const {userData} = getState('Auth');

  const [selectedVal, setSelectedVal] = useState(
    userData?.updated_data?.loc_data,
  );

  const {mutate} = useMutation({
    mutationFn: data => {
      return API.post(selecteLocationUrl, {
        loc_id: selectedVal,
        location: data,
      });
    },
    onSuccess: ({ok, data}) => {
      console.log('osdibvklsdbvbsdlvkbsdklsdbvklsd', data);
      if (ok) {
        dispatch({
          type: types.UpdateProfile,
          payload: data.user,
        });
        successMessage(data?.message);
      }
    },
    onError: ({message}) => errorMessage(message),
  });

  const onSelected = label => setSelectedVal(label);

  let onSaveFun = {
    [locationType[0].locId]: async () => {
      mutate({});
    },
    [locationType[1].locId]: () => navigate('MapScreen', mutate),
    [locationType[2].locId]: () => {
      navigate('MapScreen', mutate);
    },
  };

  return {
    selectedVal,
    onSelected,
    onSave: onSaveFun,
    userData,
  };
};

export default useLocationScreen;
