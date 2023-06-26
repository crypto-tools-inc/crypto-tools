function isValidEmail(email) {
    const emailHelper = document.getElementById('emailHelper')
  // First, check if the email address is empty. If it is, the email address is not valid.
  if (email.length === 0) {
    emailHelper.innerHTML = 'Email field cannot be blank'
    return false;
  }

  // Next, check if the email address contains an "@" symbol and a "." after the "@" symbol.
  // If not, it's not a valid email address.
  if (!email.includes('@') || !email.includes('.')) {
    emailHelper.innerHTML = 'Please enter a valid email'
    return false;
  }

  // Next, split the email address into two parts: the username and the domain name
  const [username, domain] = email.split('@');

  // Check if the username is empty. If it is, the email address is not valid.
  if (username.length === 0) {
    emailHelper.innerHTML = 'Please enter a valid email'
    return false;
  }

  // Check if the domain is empty. If it is, the email address is not valid.
  if (domain.length === 0) {
    emailHelper.innerHTML = 'Please enter a valid email'
    return false;
  }

  // Check if the domain name contains at least one "." after the "@" symbol.
  // If it doesn't, it's not a valid email address.
  if (!domain.includes('.', domain.indexOf('@') + 1)) {
    emailHelper.innerHTML = 'Please enter a valid email'
    return false;
  }

  // At this point, we can assume that the email address is valid.
  emailHelper.innerHTML = ''
  return true;
}