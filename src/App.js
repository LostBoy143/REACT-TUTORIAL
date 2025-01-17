import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import FakeStore from "./components/FakeStore";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <FakeStore />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<AppLayout />);
