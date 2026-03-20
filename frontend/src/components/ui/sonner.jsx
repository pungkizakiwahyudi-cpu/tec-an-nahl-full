import React, { useState, useEffect } from "react";

let listeners = [];
let toasts = [];

function notify() {
  listeners.forEach((l) => l([...toasts]));
}

export const toast = {
  success: (message) => {
    const id = Date.now();
    toasts = [...toasts, { id, message, type: "success" }];
    notify();
    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id);
      notify();
    }, 3500);
  },
  error: (message) => {
    const id = Date.now();
    toasts = [...toasts, { id, message, type: "error" }];
    notify();
    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id);
      notify();
    }, 3500);
  },
};

export function Toaster() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    listeners.push(setItems);
    return () => {
      listeners = listeners.filter((l) => l !== setItems);
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <div style={{ position:"fixed", bottom:"24px", right:"24px", zIndex:9999, display:"flex", flexDirection:"column", gap:"10px" }}>
      {items.map((item) => (
        <div key={item.id} style={{
          display:"flex", alignItems:"center", gap:"10px",
          padding:"14px 18px", borderRadius:"12px",
          background: item.type === "success" ? "#0d4a2a" : "#7f1d1d",
          color:"white", fontSize:"14px", fontWeight:"500",
          boxShadow:"0 8px 24px rgba(0,0,0,0.15)",
          minWidth:"280px", maxWidth:"380px",
          animation:"slideIn 0.3s ease",
        }}>
          <span style={{ fontSize:"18px" }}>
            {item.type === "success" ? "✓" : "✕"}
          </span>
          {item.message}
        </div>
      ))}
      <style>{`
        @keyframes slideIn {
          from { opacity:0; transform:translateX(40px); }
          to   { opacity:1; transform:translateX(0); }
        }
      `}</style>
    </div>
  );
}
