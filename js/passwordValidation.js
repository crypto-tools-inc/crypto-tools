function isValidPassword(password) {
    const passwordHelper = document.getElementById('passwordHelper')
  // Check if the password is more than 6 characters long.
  // If it's not, the password is not valid.
  if (password.length <= 6) {
    passwordHelper.innerHTML = 'Password has to be more than 6 characters'
    return false;
  }

  if (password.length === 0) {
    passwordHelper.innerHTML = 'Password field cannot be blank'
    return false;
  }

  // At this point, we can assume that the password is valid.
  passwordHelper.innerHTML = ''
  return true;
}