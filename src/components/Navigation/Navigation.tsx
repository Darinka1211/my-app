import React from "react";
import "./Navigation.scss";
import { ReactComponent as Left } from "./icon/left.svg";
import { ReactComponent as Right } from "./icon/right.svg";
import { ReactComponent as Next } from "./icon/next.svg";
import { NumberPage } from "../NumberPage/NumberPage";

export const Navigation = () => {
  return (
    <div className="navigation">
      <button className="navigation__pointer">
        <Left />
        <p className="navigation__pointer-text">Prev</p>
      </button>
      <div className="navigation__number">
        <NumberPage numberPage={1} />
        <NumberPage numberPage={2} />
        <NumberPage numberPage={3} />
        <NumberPage numberPage={<Next />} />
        <NumberPage numberPage={6} />
      </div>
      <button className="navigation__pointer">
        <p className="navigation__pointer-text">Next</p>
        <Right />
      </button>
    </div>
  );
};
