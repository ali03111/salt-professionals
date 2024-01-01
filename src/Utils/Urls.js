const getCredentials = () => {
  if (__DEV__)
    return {
      baseURL: 'https://virtualrealitycreators.com/salt/api/',
      imageURL: 'https://virtualrealitycreators.com/trackpal/public/',
      twiloURL: 'https://verify.twilio.com/v2/Services',
    };
  else {
    console.log = () => {};
    return {
      baseURL: 'https://virtualrealitycreators.com/salt/api/',
      imageURL: 'https://virtualrealitycreators.com/trackpal/public/',
      twiloURL: 'https://verify.twilio.com/v2/Services',
    };
  }
};

export const {baseURL, imageURL, twiloURL} = getCredentials();

export const apendUrl = url => {
  return baseURL + url;
};
export const imageUrl = url => {
  return url ? imageURL + url : '';
  // : 'https://res.cloudinary.com/dd6tdswt5/image/upload/v1684830799/UserImages/mhysa2zj0sbmvnw69b35.jpg';
};

export const aboutUrl = baseURL + 'about_us';
export const privacyUrl = baseURL + 'privacy_policy';
export const termsUrl = baseURL + 'terms_and_conditions';

export const firebaseDataBaseURL =
  'https://track-pal-e4e07-default-rtdb.firebaseio.com/';

export const registerUrl = 'register-user';
export const loginUrl = 'login';
export const fcmToken = 'add-fcm-token';
export const getAgoraTokenUrl = 'getAccessToken/';
export const userTrips = '/user-trips';
export const notificationUrl = '/notifications';
export const changeUserTripStatus = '/change-user-trip-status';
export const getAllUser = 'users';
export const CreateTripUrl = 'create-trip';
export const tripsData = '/owner-trips';
export const changeOwnerStatusUrl = '/change-owner-status';
export const changeMemberStatusUrl = '/change-member-status';
export const UpdateProfileUrl = 'update-profile';
export const notifyToOwnerUrl = 'sendNotificationToOwnerAndMe?owner_id=';
export const SOSToMembers = 'sendNotificationToAllTripMembers?trip_id=';
export const NotificationStatus = 'notification-status';
export const sendChatNotification = 'sendNotification';
export const createTripImage = 'set-tripe-image';
export const deleteTripUrl = '/delete-trip/';
export const editTripUrl = '/update-trip';
export const SendVerficatioUrl = '/send-message/';
export const checkVerficatioUrl = '/verify-number/';
export const verifyNumberUrl = '/verify-number/';
export const sendNumberToServerUrl = '/send-mobile-numbers';
export const checkNumberBeforeRegisterUrl = '/check-number-before-signup/';
export const sendUpdatedAtUrl = '/match-data';
export const deleteAccUrl = '/delete-acc';
export const logoutUrl = '/logout';
export const terminateStatusUrl = '/change-terminate-status';
export const ResetMsgCountUrl = '/reset-msg-count';
export const VerifyUserUrl = '/verify';
