import React from "react";

const BrowserView = () => {
  return (
    <div className="w-full">
      <iframe
        className="w-full h-full"
        // src={__dirname + "../../build/index.html"}
        src="https://github.com"
        title="preview window"
      />
    </div>
  );
};

export default BrowserView;
