import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FrontPage from "./FrontPage";
import Basket from "./Basket";

const items = [
  { id: 1, name: "Broodje prepare", category_id: 1 },
  { id: 2, name: "Broodje martino", category_id: 1 },
  { id: 3, name: "Grote friet", category_id: 2 },
  { id: 4, name: "Kleine friet", category_id: 2 },
  { id: 5, name: "Curry ketchup", category_id: 3 },
  { id: 6, name: "Tomaten ketchup", category_id: 3 },
  { id: 7, name: "Bammeke Brie", category_id: 4 },
  { id: 8, name: "Bammeke Kip", category_id: 4 },
  { id: 9, name: "Hamburger", category_id: 5 },
  { id: 10, name: "Kipburger", category_id: 5 },
  { id: 11, name: "Cola", category_id: 6 },
  { id: 12, name: "Red Bull", category_id: 6 },
];

const categories = [
  { id: 1, name: "Broodjes" },
  { id: 2, name: "Frieten" },
  { id: 3, name: "Sauzen" },
  { id: 4, name: "Bammekes" },
  { id: 5, name: "Burgers" },
  { id: 6, name: "Dranken" },
];

const orders = [
  { id: 1, user: 1 },
  { id: 2, user: 2 },
];

const users = [
  { id: 1, name: "Gianni" },
  { id: 2, name: "Iemand" },
];

const itemOrder = [
  { id: 1, item_id: 1, amount: 3, order_id: 1 },
  { id: 2, item_id: 12, amount: 1, order_id: 1 },
  { id: 3, item_id: 3, amount: 1, order_id: 2 },
];

ReactDOM.render(<App />, document.getElementById("root"));
