import React from "react";
import { MySlider } from "./MySlider";
import Counter from "./counter";
import Shopping from "./Shopping";
import { Products } from "./Products";

export default function Home() {
    return (
      <div className="">
        <MySlider />
        <Products />
      </div>
    );
  }