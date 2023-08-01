import React from "react";
import "./Container.css";

export default function Container({ center, children }) {
  let classNames = ["Container"];
  if (center) {
    classNames.push("Container--center");
  }
  return <div className={classNames.join(" ")}>{children}</div>;
}
