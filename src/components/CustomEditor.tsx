import React, { useEffect, useRef } from "react";
import MonacoEditor, { EditorDidMount } from "react-monaco-editor";
import * as monaco from "monaco-editor";
import Editor from "@monaco-editor/react";
import { updateEditorContentActions } from "../redux/actions";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchFileContents } from "../api/apiCalls";
import { bindActionCreators } from "redux";
import * as actionCretors from "../redux/actions/editorActions";
import { useDispatch } from "react-redux";

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
  const { containerId, data } = useSelector(
    (state: RootState) => state.editorReducer
  );
  const dispatch = useDispatch();
  const { updateEditorContentActions } = bindActionCreators(actionCretors, dispatch);

  console.log(data);

  useEffect(() => {
	const getFileContents = async () => {
	  const appContents = await fetchFileContents(containerId!, "/app/src/App.js");
	  updateEditorContentActions(appContents, "/app/src/App.js");
	};
	getFileContents();
  }, []);

  useEffect(() => {
    const codeTimeout = setTimeout(() => {
      setCodeValue(code);
      console.log("codeValue", codeValue);
    }, 2000);
    return () => clearTimeout(codeTimeout);
  }, [code]);

  const handleOnSave = () => {
    window.onkeydown = (e: { key: string; ctrlKey: boolean; preventDefault: () => void; }) => {
      if (e.key === "s" && e.ctrlKey === true) {
        e.preventDefault();
        updateEditorContentActions(containerId!, code);
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
        height="80vh"
        language="javascript"
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
