import React, { useRef } from "react";

export default function InputCustom({ type, textarea, className, ...props }) {
  const textAreaRef = useRef();

  if (textarea) {
    return (
      <>
        <textarea
          {...props}
          className={"input-custom " + className}
          ref={textAreaRef}
          style={{ height: textAreaRef?.current?.scrollHeight + 2 + "px" }}
        ></textarea>
      </>
    );
  } else {
    return (
      <>
        <input
          type={type || "text"}
          {...props}
          className={"input-custom " + className}
        />
      </>
    );
  }
}
