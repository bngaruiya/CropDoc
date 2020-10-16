exports.authUser = (req, res) => {
  console.log('Load User called');
};

exports.signup = (req, res) => {
  console.log('Signup Called');
};

exports.login = (req, res) => {
  console.log('Login Called');
};

exports.logout = () => {
  console.log('User Logout Called');
};
