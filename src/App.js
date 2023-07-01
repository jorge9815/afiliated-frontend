import "./App.css";
import Edit from "./components/Edit";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="MainSection">
        <Edit />
      </div>
    </div>
  );
};

export default App;
