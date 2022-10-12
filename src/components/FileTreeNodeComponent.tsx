import React, { useRef } from "react";
import { JsxElement } from "typescript";
import { FileTreeNode } from "../redux/reducers/fileTreeReducer";

type Props = {
  item: FileTreeNode,
  idx: number
  openFile: Function
}

const FileTreeNodeComponent = (props: Props) => {
	  
  return (
	<button
	  onClick={() => props.openFile(props.item)}
	  className="flex flex-col align-start text-sm py-1 hover:bg-gray-800 w-full"
	  key={`${props.item.name}-${props.idx}`}
	>
	  <p className="pl-4 pr-16 text-start w-full">{props.item.name}</p>
	  {
		props.item.children.map((child, idx) => {
		  return (
			<FileTreeNodeComponent idx={idx} item={child} openFile={props.openFile} />
		  )
		})
	  }
	</button>
  )
}

export default FileTreeNodeComponent;
