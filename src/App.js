import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

function App() {
  return (
    <div className="App">
      <Header />
      <Page1 />
      <Page2 />
      <Footer />
    </div>
  );
}

export default App;
