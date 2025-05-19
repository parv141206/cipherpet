"use client";
import React, { useState, useEffect } from "react";

interface PlaygroundInputProps {
  name: string;
  type?: "text" | "number";
  label?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  onChange: (name: string, value: string, isValid: boolean) => void;
}

export function PlaygroundInput({
                                  name,
                                  type = "text",
                                  label = "Enter value",
                                  placeholder = "",
                                  minLength = 1,
                                  maxLength = 100,
                                  onChange,
                                }: PlaygroundInputProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isValid = !validate(value);
    onChange(name, value, isValid);
  }, [value]);

  const validate = (input: string) => {
    if (!input) return "This field is required.";

    if (type === "text") {
      if (input.length < minLength) return `Min length is ${minLength}.`;
      if (input.length > maxLength) return `Max length is ${maxLength}.`;
      if (/\d/.test(input)) return "Numbers are not allowed.";
    }

    if (type === "number") {
      if (!/^\d+$/.test(input)) return "Only numeric digits (0–9) allowed.";
    }

    return "";
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    setError(validate(val));
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <label className="text-md font-medium text-gray-300">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`rounded-md border px-3 py-2 outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:ring-blue-300"
        }`}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}

export function Playground({ children }: { children: React.ReactNode }) {
  return <div className="black-and-shadow flex flex-col gap-3 rounded-3xl md:p-10">{children}</div>;
}
