import SideBar from "./SideBar";
import "./App.css";
import data from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideBar
          data={data}
          width={"300px"}
          backgroundColor={"rgb(183 167 167)"}
        />
      </header>
    </div>
  );
}

export default App;
