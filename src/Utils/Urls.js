const getCredentials = () => {
  if (__DEV__)
    return {
      // baseURL: 'http://3.20.179.123/salt/api/',
      // imageURL: 'http://3.20.179.123/salt/',
      // baseURL: 'https://saltbraiding.com/salt/api/',
      baseURL: 'https://virtualrealitycreators.com/salt/api/',
      imageURL: 'https://salt-new.s3.us-east-2.amazonaws.com/',
    };
  else {
    console.log = () => {};
    return {
      // baseURL: 'https://saltbraiding.com/salt/api/',
      baseURL: 'https://virtualrealitycreators.com/salt/api/',
      imageURL: 'https://salt-new.s3.us-east-2.amazonaws.com/',
      // baseURL: 'http://3.20.179.123/salt/api/',
      // imageURL: 'http://3.20.179.123/salt/',
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
export const aboutUrl = 'https://saltbraiding.com/deletion_policy';
export const privacyUrl = 'https://saltbraiding.com/privacy_policy';
export const termsUrl = 'https://saltbraiding.com/terms_and_conditions';

export const firebaseDataBaseURL =
  'https://track-pal-e4e07-default-rtdb.firebaseio.com/';

export const APIKey = 'AIzaSyDQ_pjAQYvVcGWNLy-ND_ZtyufjXtiUAxs';

export const registerUrl = 'register-user';
export const loginUrl = 'login';
export const fcmToken = 'add-fcm-token';
export const braidDataUrl = baseURL + 'braid-data';
export const updatebraidDataUrl = 'professional/update-braid-data';
export const updateUserNameUrl = 'professional/update-user-name';
export const updateProfilePicNameUrl = 'professional/update-profile-picture';
export const homeDataUrl = 'professional/home-data';
export const UploadPastWorkImagesUrl = 'professional/upload-past-work';
export const getPastWorkImagesUrl = baseURL + 'professional/prof-past-works';
export const selecteLocationUrl = 'professional/select-location';
export const changeAppStatusUrl = 'professional/accept-appointment/';
export const GetAllAppointUrl = 'professional/appointments';
export const VerifyUserUrl = 'professional/verify-user';
export const startORendAppUrl = 'professional/appointment_status';
export const sendOTPUrl = 'professional/verify-code';
export const verifyOTPUrl = 'professional/check-code';
export const CheckIsCurrentDateUrl = 'professional/current-date';
export const getNotificationUrl = 'professional/all-notifications';
export const GetDetailsUrl = 'professional/appointment-detail/';

export const DeleteUserUrl = 'professional/deactive-prof';
export const logoutUserUrl = 'professional/logout';

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
// export const logoutUrl = '/logout';
export const terminateStatusUrl = '/change-terminate-status';
export const ResetMsgCountUrl = '/reset-msg-count';
export const FcmTokenUrl = 'customer/add-fcm-token';
