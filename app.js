import React from "react";
import ReactDOM from "react-dom/client";

const child1 = React.createElement(
  "div",
  { id: "child1" },
  [
    React.createElement(
      "h1",
      {},
      "I am an h1 tag ❤️"
    ),
    React.createElement(
      "h2",
      {},
      "I am an h2 tag 😎"
    ),
  ]
);
const child2 = React.createElement(
  "div",
  { id: "child2" },
  [
    React.createElement(
      "h1",
      {},
      "I am an h1 tag 🚀"
    ),
    React.createElement(
      "h2",
      {},
      "I am an h2 tag  😊"
    ),
  ]
);

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [child1, child2]
);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(parent);
