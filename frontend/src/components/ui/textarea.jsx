import React from "react";

export function Textarea(props) {
  return (
    <textarea
      style={{
        width: "100%",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
      {...props}
    />
  );
}