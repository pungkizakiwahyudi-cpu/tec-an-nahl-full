import React from "react";

export function Dialog({ children }) {
  return <div>{children}</div>;
}

export function DialogTrigger({ children }) {
  return <div>{children}</div>;
}

export function DialogContent({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        background: "#fff",
        borderRadius: "10px",
        marginTop: "10px"
      }}
    >
      {children}
    </div>
  );
}

export function DialogHeader({ children }) {
  return <div style={{ marginBottom: "10px" }}>{children}</div>;
}

export function DialogTitle({ children }) {
  return <h3>{children}</h3>;
}