import {useEffect, useLayoutEffect, useReducer, useRef, useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import {db} from '../../Services/FirebaseServicsConfig';
import {useQuery} from '@tanstack/react-query';
import API from '../../Utils/helperFunc';
import {GetUserUrl} from '../../Utils/Urls';

const STATE = {
  messages: [],
  message: '',
  chatroomId: 10,
};

const reducer = (state, action) => {
  const handler = actionMap[action.type];
  return handler ? handler(state, action) : state;
};

const actionMap = {
  updateReducer: (state, act) => {
    return {
      ...state,
      [act.payload.key]: act.payload.data,
    };
  },
  emptyState: () => STATE,
};

const useChatScreen = ({navigate}, {params}) => {
  let regexp = /^(?![\s\b]+$).+/gm;

  const {getState} = useReduxStore();

  const [state, dispatch] = useReducer(reducer, STATE);

  const {chatroomId, message, messages} = state;

  const {userData} = getState('Auth');
  const {app_id, userId} = params;

  const {data} = useQuery({
    queryKey: ['userData'],
    queryFn: () => API.get(GetUserUrl + userId),
  });

  //   const [messages, setMessages] = useState([]);
  //   const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true); // Loader state
  //   const chatroomId = useRef('');

  useEffect(() => {
    if (app_id) {
      selectUser(app_id.toString());
      dispatch({
        type: 'updateReducer',
        payload: {
          key: 'chatroomId',
          data: app_id.toString(),
        },
      });
    }
  }, [app_id]);

  const selectUser = async jodId => {
    // chatroomId.current = jodId;

    const chatroomDocRef = doc(db, 'messages', jodId);
    const chatroomDocSnap = await getDoc(chatroomDocRef);

    if (!chatroomDocSnap.exists()) {
      await setDoc(chatroomDocRef, {messages: []});
    }

    // const lastMessageQuery = query(
    //   collection(db, 'messages', jodId, 'messages'),
    //   where('sender', '==', userData.id),
    //   orderBy('createdAt', 'desc'),
    //   limit(1),
    // );

    // console.log(
    //   'lastMessageQuerylastMessageQuerylastMessageQuerylastMessageQuery',
    //   lastMessageQuery,
    //   userData?.id,
    //   jodId,
    // );
    // const querySnapshot = await getDocs(lastMessageQuery);

    // console.log(
    //   'querySnapshotquerySnapshotquerySnapshotquerySnapshotquerySnapshot',
    //   querySnapshot,
    // );
    // if (!querySnapshot.empty) {
    //   const lastMessageDoc = querySnapshot.docs[0];
    //   const messageRef = doc(
    //     db,
    //     'messages',
    //     jodId,
    //     'messages',
    //     lastMessageDoc.id,
    //   );

    //   await updateDoc(messageRef, {seen: '1'});
    // }

    const messagesQuery = query(
      collection(chatroomDocRef, 'messages'),
      orderBy('createdAt'),
    );

    const unsubscribe = onSnapshot(messagesQuery, snapshot => {
      const messagesList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(
        'messagesListmessagesListmessagesListmessagesListmessagesList',
        messagesList,
      );
      //   state.setMessages(messagesList);
      dispatch({
        type: 'updateReducer',
        payload: {
          key: 'messages',
          data: messagesList,
        },
      });
      setLoading(false); // Stop loader when messages are loaded
    });

    return () => unsubscribe();
  };

  const sendMessage = async () => {
    if (message.trim()) {
      try {
        await setDoc(doc(collection(db, 'messages', chatroomId, 'messages')), {
          text: message,
          sender: userData.id,
          receiver: userId,
          user: userData?.name,
          seen: 0,
          createdAt: serverTimestamp(),
        });
        dispatch({
          type: 'updateReducer',
          payload: {
            key: 'message',
            data: '',
          },
        });
        // setMessage(''); // Clear the input field
      } catch (error) {
        console.error('Error adding message: ', error);
      }
    }
  };

  const scrollViewRef = useRef();
  const handleAutoScroll = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: false});
    }
  };
  useLayoutEffect(() => {
    handleAutoScroll();
  }, []);

  return {
    sendMessage,
    message,
    allMessages: messages ?? [],
    userData,
    receiverData: data?.data,
    handleAutoScroll,
    regexp,
    scrollViewRef,
    setMessage: e => {
      dispatch({
        type: 'updateReducer',
        payload: {
          key: 'message',
          data: e,
        },
      });
    },
  };
};

export default useChatScreen;
