import React from "react";

const variants = {
  default: "bg-[#D4AF37] hover:bg-[#f0d97a] hover:text-[#0d4a2a] text-white",
  outline: "bg-transparent border-2 border-current hover:bg-white/10",
  ghost:   "bg-transparent hover:bg-gray-100 text-gray-700",
  destructive: "bg-red-600 hover:bg-red-700 text-white",
};

const sizes = {
  default: "px-4 py-2 text-sm",
  sm:      "px-3 py-1.5 text-xs",
  lg:      "px-6 py-3 text-base",
  icon:    "p-2",
};

export function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  disabled = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg " +
    "transition-all duration-200 cursor-pointer " +
    "disabled:opacity-50 disabled:cursor-not-allowed ";

  const variantClass = variants[variant] ?? variants.default;
  const sizeClass    = sizes[size]    ?? sizes.default;

  return (
    <button
      className={`${base} ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
