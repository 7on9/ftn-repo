// Must contain at least one uppercase letter ((?=.*[A-Z])):
// Password must contain at least one letter from A to Z.
// Must contain at least one lowercase letter ((?=.*[a-z])):
// Password must contain at least one letter from a to z.
// Must contain at least one digit ((?=.*\d)):
// Password must contain at least one number from 0 to 9.
// Must contain at least one special character ((?=.*[!@#$%^&*()\-+=_])):
// Password must contain one of the following characters: !@#$%^&*()-+=_.
// Must not contain whitespace ([^\s]):
// Whitespace is not allowed in the password.
// Length from 8 to 20 characters ({8,20}):
// Password must have a minimum length of 8 characters and maximum length of 20 characters.
const regexPassword: RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-+=_])[^\s]{8,20}$/;
const whitespaceRegex: RegExp = /^\S+$/;
export const RegexPattern = {
  regexPassword,
  whitespaceRegex,
};
