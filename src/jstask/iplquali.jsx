const IplQualification = () => {
  let rcb = "win";
  let srh = "win";

  const qualifier = () => {
    if (rcb === "win" || srh === "win") {
      return <h1> csk has qualifed for next level</h1>;
    }

    return <h1>csk not Qualified</h1>;
  };

  return <div>{qualifier()}</div>;
};

export default IplQualification;
