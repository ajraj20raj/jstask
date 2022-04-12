import "./App.css";
import AmazonPrime from "./jstask/Amazon";
import Citibank from "./jstask/citibanj";
import EmailPassword from "./jstask/EmailPassword";
import IplQualification from "./jstask/iplquali";
import Youtube from "./jstask/youtubeearnings";
import Zomato from "./Zomato";

function App() {
  return (
    <>
      <div>
        <h1> welcome to javascript coding challenges</h1>

        <AmazonPrime />

        <EmailPassword />
        <IplQualification />

        <Youtube />

        <Zomato />
        <Citibank />
      </div>
    </>
  );
}

export default App;
