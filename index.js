import { useState } from "react";
import ReactDOM from "react-dom/client";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import React from "react";
import "./App.css";
import "./index.css";

const App = () => {
  const [aramaAlani, setAramaAlani] = useState(""); // value,setValue (değeri set eden value)
  const [canavarlar, setCanavarlar] = useState([]);
  // console.log("render");
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((users) => setCanavarlar(users));
  const aramaDeğişikliği = (e) => {
    const aramaAlaniDizesi = e.target.value.toLocaleLowerCase();
    setAramaAlani(aramaAlaniDizesi);
  };
  const filtrelenmisCanavarlar = canavarlar.filter((canavar) =>
    canavar.name.toLocaleLowerCase().includes(aramaAlani)
  );
  return (
    <div className="App">
      <h1 className="app-title">MONSTERS</h1>
      <SearchBox
        onChangeHandler={aramaDeğişikliği}
        placeholder={"canavarlari ara"}
        className="monsters search-box"
      />
      <CardList canavarlar={filtrelenmisCanavarlar} />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
