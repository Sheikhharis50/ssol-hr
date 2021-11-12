const Auth = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    Auth.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback: VoidFunction) {
    Auth.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export default Auth;
