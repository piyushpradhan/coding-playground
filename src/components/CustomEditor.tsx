import React, { useEffect, useRef } from "react";
import { EditorDidMount } from "react-monaco-editor";
import * as monaco from "monaco-editor";
import Editor from "@monaco-editor/react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { saveFile } from "../api/apiCalls";
import { bindActionCreators } from "redux";
import * as actionCretors from "../redux/actions/editorActions";
import { useDispatch } from "react-redux";
import { pickLanguage } from "../utils/helpers";

const MONACO_OPTIONS: monaco.editor.IEditorConstructionOptions = {
  autoIndent: "full",
  automaticLayout: true,
  contextmenu: true,
  fontFamily: "monospace",
  fontSize: 13,
  lineHeight: 20,
  hideCursorInOverviewRuler: true,
  matchBrackets: "always",
  minimap: {
    enabled: false,
  },
  readOnly: false,
  scrollbar: {
    horizontalSliderSize: 4,
    verticalSliderSize: 18,
  },
};

const CustomEditor = () => {
  const [code, setCode] = React.useState("");
  const [codeValue, setCodeValue] = React.useState("");
  const { containerId, currentFile, data } = useSelector(
    (state: RootState) => state.editorReducer
  );
  const dispatch = useDispatch();
  const { updateEditorContentActions } = bindActionCreators(actionCretors, dispatch);

  useEffect(() => {
	setCode(data);
  }, [data]);

  const handleOnSave = () => {
    window.onkeydown = async (e: { key: string; ctrlKey: boolean; preventDefault: () => void; }) => {
      if (e.key === "s" && e.ctrlKey === true) {
		e.preventDefault();
		updateEditorContentActions(code, currentFile);
		console.log(code);
		if (code.trim() !== "")
		  await saveFile(containerId, currentFile, code);
		else 
		  await saveFile(containerId, currentFile, data);
      }
    };
  };

  const editorDidMount: EditorDidMount = (editor) => {
    if (editor && editor.getModel()) {
      const editorModel = editor.getModel();
      if (editorModel) {
        editorModel?.setValue(data ?? '');
      }
    }
    editor.focus();
  };

  const editorOnChange = (
    value: string | undefined,
    event: monaco.editor.IModelContentChangedEvent
  ) => {
    setCode(value!);
  };

  return (
    <div className="w-full" onKeyDown={handleOnSave}>
      <Editor
        width="100%"
        height="70vh"
        language={pickLanguage(currentFile)}
        theme="vs-dark"
        value={code}
        options={MONACO_OPTIONS}
        onChange={editorOnChange}
        onMount={editorDidMount}
      />
    </div>
  );
};

export default CustomEditor;
