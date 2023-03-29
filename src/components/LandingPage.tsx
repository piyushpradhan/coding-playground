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
  }, []);

  return (
    <div className="bg-gray-900 h-screen flex flex-col">
      <h1 className="text-white text-4xl mt-16">Landing Page</h1>
      <div className="flex flex-col justify-center h-full space-y-2 text-white">
        <CreateContainerButton />
        <p>
          In order to prevent incurring substantial expenses on AWS, the backend
          has been removed from the deployment
        </p>
        <p className="flex space-x-2 justify-center">
          <p>Watch a demo:</p>
          <a
            href="https://drive.google.com/file/d/10ovKW2nGDZlN2rZ1_BCstrd6K_rKWVnS/view?usp=sharing"
            className="text-blue-500 hover:underline"
          >
            Video 1
          </a>
          <a
            href="https://drive.google.com/file/d/1lbwHq6gA0JqZn8exttG8FBQ7CbwyStG9/view?usp=share_link"
            className="text-blue-500 hover:underline"
          >
            Video 2
          </a>
        </p>
        <p>
          Instructions to set it up locally:{" "}
          <a
            href="https://github.com/piyushpradhan/coding-playground"
            className="text-blue-500 hover:underline"
          >
            https://github.com/piyushpradhan/coding-playground
          </a>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
