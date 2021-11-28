import Canva from "./components/Canva";
import Header from "./components/Header";
import Settings from "./components/Settings";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Settings />
      <Canva />
    </div>
  );
}

export default App;
