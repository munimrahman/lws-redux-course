import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import store from "./redux/store";

function App() {
  const [navigation, setNavigation] = useState("home");

  const handleNavigation = (route) => {
    setNavigation(route);
  };

  return (
    <Provider store={store}>
      <Navbar handleNavigation={handleNavigation} />
      <main className="py-16">
        {navigation === "home" ? <Home /> : <Cart />}
      </main>
    </Provider>
  );
}

export default App;
