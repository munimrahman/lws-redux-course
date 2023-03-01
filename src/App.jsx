import { Provider } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  );
}

export default App;
