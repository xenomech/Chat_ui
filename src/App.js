import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import "./styles/Styles.css";
import Chat from "./components/Chat/Chat";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Chat/>
    </div>
  );
};

export default App;
