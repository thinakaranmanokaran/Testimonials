const { getAuthData, getUserNameByEmail, registerUser, signinUser, updateUserProfile, checkUserExistence, initiateRegistration } = require('./global/Authentication');
const { postContact, getContact, getContactByEmail, updateContact, deleteContact } = require('./global/Contact');
const { sendOtpToEmail, verifyOtp, verifyOtpAndRegister } = require('./global/OTP');
const { postEnrollment, getEnrollment, getEnrollmentByEmail, deleteEnrollment, updateEnrollment } = require('./user/Enrollment');

module.exports = { 
    getAuthData,
    getUserNameByEmail,
    registerUser,
    signinUser,
    updateUserProfile,
    checkUserExistence, initiateRegistration,

    postContact, getContact, getContactByEmail, updateContact, deleteContact,

    postEnrollment, getEnrollment, getEnrollmentByEmail, deleteEnrollment, updateEnrollment,

    sendOtpToEmail, verifyOtp, verifyOtpAndRegister,
};