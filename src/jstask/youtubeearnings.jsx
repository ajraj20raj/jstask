const Youtube = () => {
  let views = 20000;

  const Incomecalculator = () => {
    if (views > 100000) {
      let earnings = views * 0.07;
      let result = earnings;
      return <h1> the earning of youtuber is {result} </h1>;
    }
    let result = views * 0.1;
    return <h1> The earning of you tuber is {result} </h1>;
  };

  return <div>{Incomecalculator()}</div>;
};

export default Youtube;
