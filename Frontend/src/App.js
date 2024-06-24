import "./App.css";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyRoutes from "./components/MyRoutes";
import Todo from "./components/pages/Todo";
function App() {
  return (
    <div className="App ">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
