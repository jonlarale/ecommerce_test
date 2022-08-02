import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import ProductList from "./pages/ProductList";
import Error404 from "./pages/Error404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="*" element={<Error404 />}></Route>
            <Route exact path="/" element={<ProductList />}></Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
