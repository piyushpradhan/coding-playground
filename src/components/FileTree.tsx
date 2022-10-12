import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFileContents } from "../api/apiCalls";
import { updateEditorContentActions } from "../redux/actions";
import { RootState } from "../redux/store";

interface TreeItem {
  name: string;
  type: string;
}

const FileTree = () => {
  const items = useSelector((state: RootState) => state.fileTreeReducer.data);
  const { containerId } = useSelector(
    (state: RootState) => state.editorReducer
  );
  const openFile = async (item, index: number) => {
    const data: string = await fetchFileContents(containerId!, item.path);
    updateEditorContentActions(data, item.path);
  };

  return (
    <div className="py-4 bg-gray-800 text-white">
      {items.map((item, idx) => {
        return (
          <button
            onClick={() => openFile(item, idx)}
            className="flex flex-col align-start text-sm py-1 hover:bg-gray-900 w-full"
            key={`${item.name}-${idx}`}
          >
            <p className="pl-4 pr-16 text-start w-full">{item.name}</p>
          </button>
        );
      })}
    </div>
  );
};

export default FileTree;
