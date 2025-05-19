import React from "react";

// Formula
export function Formula ({children}: {children: React.ReactNode}) {
  return (
    <code className={"font-mono border-accent/20 border p-3 w-fit rounded-md"}>{children}</code>
  )
}
export function FormulaSet ({children}: {children: React.ReactNode}) {
  return (
    <div className={"flex px-3 flex-col gap-2"}>{children}</div>
  )
}
// Diagrams
export function DiagramBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "border-accent/20 flex w-fit items-center justify-center rounded-xl border-2 border-dashed p-3"
      }
    >
      {children}
    </div>
  );
}
export function Matrix ({matrix}: { matrix: Array<Array<number>> }) {
  return (
    <div className={"flex flex-col gap-2"}>
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className={"flex gap-2"}>
          {row.map((value, colIndex) => (
            <div
              key={colIndex}
              className={
                "border-accent/20 flex w-fit items-center justify-center rounded-xl border-2 border-dashed p-3"
              }
            >
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export function DiagramArrow({
  direction,
  size,
}: {
  direction: "x" | "y";
  size: "small" | "medium" | "large";
}) {
  return (
    <div
      className={`${size === "small" ? "text-5xl" : size === "medium" ? "text-7xl" : "text-9xl"} ${direction === "x" ? "my-5 rotate-90 md:mx-10 md:rotate-0" : "my-5 rotate-90"} `}
    >
      ~{">"}
    </div>
  );
}

export function Diagram({
  className,
  center,
  children,
}: {
  className?: string;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`md:py-10 py-5 ${center ? "flex items-center justify-center" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

// Utils
export function Ul({ children }: { children: React.ReactNode }) {
  return <ul className={"flex flex-col gap-1 md:p-3"}>{children}</ul>;
}
export function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className={""}>
      ~{">"} {children}
    </li>
  );
}
export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className={"border-b-accent border-b"}>{children}</strong>;
}
[];

// TeChNiQuE

export function TechniqueTitle({ children }: { children: React.ReactNode }) {
  return <h2 className={"font-title"}>{children}</h2>;
}
export function TechniqueSubSubtitle({ children }: { children: React.ReactNode }) {
  return <h3 className={"font-sub-sub-title "}>{children}</h3>;
}
export function TechniqueSubtitle({ children }: { children: React.ReactNode }) {
  return <h3 className={"font-sub-title"}>{children}</h3>;
}
export function TechniqueIntroduction({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={""}>{children}</div>;
}
export function TechniqueDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={"flex flex-col gap-10 p-3 py-5"}>{children}</div>;
}

export default function Technique({ children }: { children: React.ReactNode }) {
  return <section className={"flex flex-col"}>{children}</section>;
}
