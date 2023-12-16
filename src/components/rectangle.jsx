import React from "react";
function Rectangle({ className, onClick, children }) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}

export default Rectangle;
