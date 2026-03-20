import React from "react";

export function Input(props) {
  return (
    <input
      style={{
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "100%"
      }}
      {...props}
    />
  );
}