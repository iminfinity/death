import ReactTooltip from "react-tooltip";
import "./App.scss";
import { useState } from "react";
import World from "./components/world.component";
import Flash from "./components/flash/flash.component";
function App() {
  const [content, setContent] = useState("");
  return (
    <div>
      <World setTooltipContent={setContent} />
      <ReactTooltip place="top">{content}</ReactTooltip>
      <Flash />
    </div>
  );
}

export default App;
