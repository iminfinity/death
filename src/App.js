import ReactTooltip from "react-tooltip";
import "./App.scss";
import { useState } from "react";
import World from "./components/world.component";

function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <World setTooltipContent={setContent} />
      <ReactTooltip place="top">{content}</ReactTooltip>
    </div>
  );
}

export default App;
