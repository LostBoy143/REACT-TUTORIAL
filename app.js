import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <h1>This is my react learning journey.</h1>
  );
};
const Header = () => {
  return (
    <>
      <Title />
      <h2>
        This is going to be the heading of my
        project
      </h2>
      <h3>
        Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Ipsa, quis sapiente
        dolore velit totam commodi aliquam
        veritatis eum culpa cum, dolorum
        reiciendis officiis quibusdam earum esse
        possimus quisquam adipisci! Provident!
        Vel, corrupti exercitationem optio fugit
        sit, aperiam suscipit autem inventore
        voluptate, rem numquam error? Itaque,
        provident veritatis dicta nulla, porro
        aliquam sequi, tempora repellat veniam
        cupiditate asperiores consectetur
        inventore amet? Vel perferendis at, itaque
        natus animi saepe iusto in aspernatur
        ratione quidem eum blanditiis possimus
        dolores? Esse, quam! Atque id repellendus
        quis ut neque aliquam vero rerum adipisci
        cum odio.
      </h3>
    </>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<Header />);
