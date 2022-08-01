import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <div className="container">
          <ProductList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
