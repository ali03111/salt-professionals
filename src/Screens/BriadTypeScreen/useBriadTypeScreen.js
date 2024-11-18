import {useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {braidDataUrl} from '../../Utils/Urls';
import {useRef, useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';

const useBriadTypeScreen = () => {
  const {data} = useQuery({
    queryKey: ['specialitiesData'],
    queryFn: () => API.get(braidDataUrl),
  });

  const [modalVal, setModalVal] = useState(false);

  const onPressKeyRef = useRef('braid_length');

  const {getState, dispatch} = useReduxStore();

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

  const onOpenModal = key => {
    onPressKeyRef.current = key;
    // setActiveTags(selectedData);
    toggleModal();
  };

  const toggleModal = isSave => {
    setModalVal(!modalVal);
    if (isSave) {
      //   mutate({
      //     type: 'type',
      //     size: 'size',
      //     length: 'length',
      //     type_ids: getIdsFromObj(braid_type, 'id'),
      //     size_ids: getIdsFromObj(braid_size, 'id'),
      //     length_ids: getIdsFromObj(braid_length, 'id'),
      //   });
    }
  };

  return {
    modalVal,
    setModalVal,
    activeTags,
    allData: data?.data,
    addTags,
    onPressKey: onPressKeyRef.current,
    onOpenModal,
    toggleModal,
  };
};

export default useBriadTypeScreen;
