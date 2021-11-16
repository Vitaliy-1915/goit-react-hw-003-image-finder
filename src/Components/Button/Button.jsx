import React from "react";
import s from "../Button/Button.module.css";

function Button({ onClick }) {
  return (
    <div>
      <button type="button" className={s.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default Button;
