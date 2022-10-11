import CustomEditor from "./CustomEditor";
import BrowserView from "./BrowserView";
import CustomTerminal from "./CustomTerminal";
import Split from "react-split";
import { useState } from "react";

const Playground = () => {
  const horizontalSizes = [50, 50];
  const verticalSizes = [70, 30];
  return (
    <div>
      <div className="p-2 bg-gray-800 font-bold text-white h-full">
        <h2>React Playground</h2>
      </div>
      <Split
        direction="vertical"
        sizes={verticalSizes}
        gutterSize={10}
        gutterAlign="center"
        dragInterval={1}
        snapOffset={30}
      >
        <Split
          direction="horizontal"
          sizes={horizontalSizes}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          className="flex flex-row w-full h-full"
        >
          <CustomEditor />
          <BrowserView />
        </Split>
        <CustomTerminal />
      </Split>
    </div>
  );
};

export default Playground;
