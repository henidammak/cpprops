import "./App.css";
import "./components/Skater1/Malto.css";
import "./components/Skater2/Cole.css";
import "./components/Skater3/Huston.css";
import "./components/Skater4/Mike.css";
import "./components/Footer/Footer.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import First from "./components/First";

import Malto from "./components/Skater1/Malto";
import Cole from "./components/Skater2/Cole";
import Mike from "./components/Skater4/Mike";
import Huston from "./components/Skater3/Huston";
import Footer from "./components/Footer/Footer";
function App() {
  const suggestmike = [
    {
      src: "https://www.youtube.com/embed/5I_G0YokLKc",
      title: "YouTube video player",
    },
    {
      src: "https://www.youtube.com/embed/zae6hUxFiQs",
      title: "YouTube video player",
    },
  ];
  const alertMyInput = (name) => alert(name);
  return (
    <div className="App">
      <Header />
      <First />
      <Malto name="" alertMyInput={alertMyInput} />
      <Cole name="" alertMyInput={alertMyInput} />
      <Huston name="" alertMyInput={alertMyInput} />
      <Mike suggestmike={suggestmike} name="" alertMyInput={alertMyInput} />
      <Footer shop="open"/>
    </div>
  );
}

export default App;
