import {useMutation, useQuery} from '@tanstack/react-query';
import {useRef, useState} from 'react';
import {braidDataUrl, updatebraidDataUrl} from '../../Utils/Urls';
import useReduxStore from '../../Hooks/UseReduxStore';
import API from '../../Utils/helperFunc';
import {getIdsFromObj} from '../../Utils/globalFunctions';
import {types} from '../../Redux/types';
import {errorMessage, successMessage} from '../../Config/NotificationMessage';

const useSpecialitiesScreen = () => {
  const [modalVal, setModalVal] = useState(false);

  const {getState, dispatch} = useReduxStore();

  const onPressKeyRef = useRef('braid_length');

  const {userData} = getState('Auth');
  const [activeTags, setActiveTags] = useState({
    braid_length: userData?.braid_length,
    braid_size: userData?.braid_size,
    braid_type: userData?.braid_type,
  });

  const {braid_length, braid_size, braid_type} = activeTags;

  const updateState = data => setActiveTags(prev => ({...prev, ...data}));

  const addTags = (v, key) => {
    if (Boolean(activeTags[key].find(res => res.id == v.id))) {
      updateState({[key]: activeTags[key].filter(res => res.id != v.id)});
    } else {
      updateState({[key]: [...activeTags[key], v]});
    }
  };

  const {mutate} = useMutation({
    mutationFn: newTodo => {
      return API.post(updatebraidDataUrl, newTodo);
    },
    onSuccess: ({ok, data}) => {
      if (ok) {
        successMessage('Your profile sucessfully updated!');
        dispatch({type: types.UpdateProfile, payload: data.data});
      }
    },
    onError: ({message}) => errorMessage(message),
  });

  const {data} = useQuery({
    queryKey: ['specialitiesData'],
    queryFn: () => fetch(braidDataUrl).then(res => res.json()),
  });

  var onPressKey = '';

  const onOpenModal = key => {
    onPressKeyRef.current = key;
    // setActiveTags(selectedData);
    toggleModal();
  };

  const toggleModal = isSave => {
    setModalVal(!modalVal);
    if (isSave) {
      mutate({
        type: 'type',
        size: 'size',
        length: 'length',
        type_ids: getIdsFromObj(braid_type, 'id'),
        size_ids: getIdsFromObj(braid_size, 'id'),
        length_ids: getIdsFromObj(braid_length, 'id'),
      });
    }
  };

  return {
    addTags,
    activeTags,
    toggleModal,
    onOpenModal,
    allData: data,
    modalVal,
    userData,
    onPressKey: onPressKeyRef.current,
  };
};

export default useSpecialitiesScreen;
