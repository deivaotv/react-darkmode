import GlobalStyles from "./styles/globalStyles";
import Home from "./pages/Home/index";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default App;
