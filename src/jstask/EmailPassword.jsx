const EmailPassword = () => {
  let email = true;
  let password = true;

  const valiadate = () => {
    if (email && password) {
      return <h1>"ronaldo profile hacked succesfully"</h1>;
    }
    return "mission failed";
  };

  return <div>{valiadate()}</div>;
};

export default EmailPassword;
