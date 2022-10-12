import React, { ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFileContents } from "../api/apiCalls";
import { updateEditorContentActions } from "../redux/actions";
import { FileTreeNode } from "../redux/reducers/fileTreeReducer";
import { RootState } from "../redux/store";
import FileTreeNodeComponent from "./FileTreeNodeComponent";

const FileTree = () => {
  const items: FileTreeNode[] = useSelector((state: RootState) => state.fileTreeReducer.data);
  const { containerId } = useSelector(
    (state: RootState) => state.editorReducer
  );
  const openFile = async (item: FileTreeNode) => {
	if (item.type === "file") {
	  const data: string = await fetchFileContents(containerId!, item.path);
	  updateEditorContentActions(data, item.path);
	}
  };

  return (
    <div className="py-4 bg-gray-800 text-white">
      {items.map((item, idx) => {
        return (
		  <FileTreeNodeComponent idx={idx} item={item} openFile={openFile} /> 
        );
      })}
    </div>
  );
};

export default FileTree;
