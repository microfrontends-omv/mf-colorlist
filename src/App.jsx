import React from "react";
import ReactDOM from "react-dom/client";
import ColorList from "./components/ColorList";

const App = () => {
  return (
    <>
      <ColorList colorList={[]} />
      <ColorList colorList={["#add737", "#85969d", "#0fa9eb"]} />
    </>
  );
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
