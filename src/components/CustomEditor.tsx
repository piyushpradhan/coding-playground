import React, { useEffect, useRef } from "react";
import MonacoEditor, { EditorDidMount } from "react-monaco-editor";
import * as monaco from "monaco-editor";
import Editor from "@monaco-editor/react";

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

  useEffect(() => {
    const codeTimeout = setTimeout(() => {
      setCodeValue(code);
      console.log("codeValue", codeValue);
    }, 2000);
    return () => clearTimeout(codeTimeout);
  }, [code]);

  const handleOnSave = () => {
    window.onkeydown = (e) => {
      if (e.key === "s" && e.ctrlKey === true) {
        e.preventDefault();
      }
    };
  };

  const editorDidMount: EditorDidMount = (editor) => {
    if (editor && editor.getModel()) {
      const editorModel = editor.getModel();
      if (editorModel) {
        editorModel?.setValue('const a = "Hello World";');
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
        language="typescript"
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
