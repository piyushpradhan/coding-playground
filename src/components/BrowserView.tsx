import React, { Ref, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const BrowserView = () => {
  const { port } = useSelector((state: RootState) => state.editorReducer);
  const browserRef: Ref<HTMLIFrameElement> = useRef(null);
  const { data } = useSelector((state: RootState) => state.editorReducer);
  useEffect(() => {
	browserRef!.current!.src += '';
  }, [data]);

  return (
    <div className="w-full">
      <iframe
		ref={browserRef}
        className="w-full h-full"
        src={process.env.REACT_APP_BASE_URL + "/preview/" + port}
        title="preview window"
      />
    </div>
  );
};

export default BrowserView;
