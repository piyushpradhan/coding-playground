import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const BrowserView = () => {
  const { port } = useSelector((state: RootState) => state.editorReducer);
  return (
    <div className="w-full">
      <iframe
        className="w-full h-full"
        // src={__dirname + "../../build/index.html"}
        src={process.env.REACT_APP_BASE_ADDRESS + ":" + port}
        title="preview window"
      />
    </div>
  );
};

export default BrowserView;
