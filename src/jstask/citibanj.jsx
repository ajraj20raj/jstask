const Citibank = () => {
  let wc = 20; // wc = withdaraw count
  let balance = 1000;
  let wa = 200; // withdrawn amount

  const charges = () => {
    if (wc > 5 && wc <= 10) {
      let result = balance - wa - 20;
      return <h1>your balance amount{result}</h1>;
    } else if (wc > 10) {
      let result = balance - wa - 40;
      return <h1>your balance amount {result} </h1>;
    }

    let result = balance - wa;
    return <h1>your balance amount{result}</h1>;
  };
  return (
    <div>
      <h1>your balance amont is {charges()}</h1>
    </div>
  );
};

export default Citibank;
