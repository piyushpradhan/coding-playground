import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import CreateContainerButton from "./CreateContainerButton";
import * as actionCreators from "../redux/actions/editorActions";
import { useDispatch } from "react-redux";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { clearEditorAction } = bindActionCreators(actionCreators, dispatch);
  
  useEffect(() => {
	clearEditorAction();
  }, [])

  return (
    <div className="bg-gray-900 h-screen flex flex-col">
      <h1 className="text-white text-4xl mt-16">Landing Page</h1>
      <div className="flex flex-col justify-center h-full">
        <CreateContainerButton />
      </div>
    </div>
  );
};

export default LandingPage;
