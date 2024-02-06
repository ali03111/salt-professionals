import {useState} from 'react';

const useSpecialitiesScreen = () => {
  const [modalVal, setModalVal] = useState(false);
  const [activeTags, setActiveTags] = useState([]);

  const addTags = v => {
    if (Boolean(activeTags.find(res => res.id == v.id))) {
      setActiveTags(prev => activeTags.filter(res => res.id != v.id));
    } else {
      setActiveTags(prev => [...prev, v]);
    }
  };

  const onOpenModal = selectedData => {
    setActiveTags(selectedData);
    toggleModal();
  };

  const toggleModal = () => setModalVal(!modalVal);

  return {addTags, activeTags, toggleModal, onOpenModal};
};

export default useSpecialitiesScreen;
