function authenticate(username, password) {
  // Replace these with the actual usernames and passwords
  const validUsers = {
    user: '1',
    user2: 'password2',
    //...
  };

  if (validUsers[username] === password) {
    return true;
  } else {
    return false;
  }
}