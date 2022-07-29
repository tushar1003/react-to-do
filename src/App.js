import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
function App() {
  return (
    <div className="App">
      <div className="heading">TO-DO List</div>
      <div className="data">Add a new task in the list</div>
        
      <div>
        <Todos />
        <div style={{color:"white",marginTop:"80px",marginLeft:"100px"}}>Added task in a TO-DO List</div>
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
