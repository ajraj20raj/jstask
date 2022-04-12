const AmazonPrime = () => {
  let user = "subscribed";

  const usersubscription = () => {
    if ((user = "subscribed")) {
      return <h1>'user is subscribed'</h1>;
    }
    return <h1> user is not subscribed </h1>;
  };

  return <>{usersubscription()}</>;
};

export default AmazonPrime;
