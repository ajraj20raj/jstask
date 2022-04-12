const Zomato = () => {
  let bill = 1000;

  let offercalculator = () => {
    if (bill > 500) {
      let total_bill = (bill * 40) / 100;
      return <h1> the total bill with 40% offer and total {total_bill}</h1>;
    }
    if (bill > 300 && bill < 500) {
      let total_bill = (bill * 20) / 100;
      return <h1> the bill offer 20%{total_bill}</h1>;
    }
    return <h1> {bill}</h1>;
  };

  return <div>{offercalculator()}</div>;
};

export default Zomato;
