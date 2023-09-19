import "./App.css";
import AuthHolder from "./component/todo/AuthenticationContext";
import Todo from "./component/todo/Todo";

function App() {
  return (
    <div className="App">
      <AuthHolder>
        <Todo />
      </AuthHolder>
    </div>
  );
}

export default App;
