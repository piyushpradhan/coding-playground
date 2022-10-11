import React, { useEffect, useRef, useState } from "react";
import { XTerm } from "xterm-for-react";

// create a custom terminal component
const CustomTerminal = () => {
  const [input, setInput] = useState("");
  const xtermRef = useRef(null);
  // useEffect(() => {
  //   xtermRef?.current?.terminal.writeln(
  //     "Please enter any string then press enter:"
  //   );
  //   xtermRef?.current?.terminal.writeln("echo> ");
  // }, []);
  return (
    <XTerm
      ref={xtermRef}
      onData={(data) => {
        const code = data.charCodeAt(0);
        xtermRef.current.terminal.write(data);
        console.log(code);
        // If the user hits empty and there is something typed echo it.
        if (code === 13 && input.length > 0) {
          xtermRef?.current?.terminal.write(
            "\r\nYou typed: '" + input + "'\r\n"
          );
          xtermRef?.current?.terminal.write("echo> ");
          setInput("");
          // } else if (code < 32 || code === 127) {
          // 	// Disable control Keys such as arrow keys
          // 	return;
        } else {
          // Add general key press characters to the terminal
          setInput(input + data);
          xtermRef?.current?.terminal.writeln(data);
        }
      }}
    />
  );
};

export default CustomTerminal;
