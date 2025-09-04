import React from "react";
import Card from "../Card/Card";

export default function Residencies() {
  return (
    <div id="residencies" className="container py-10 flex flex-col items-center">
      {/* title */}
      <div>
        <h3 className="text-[#F4A502] text-2xl font-bold">Best Choices</h3>
        <h1 className="text-[#1F3E72] text-4xl font-bold">
          Popular Residencies
        </h1>
      </div>

      {/* slider */}
      <div>
        <Card />
      </div>
    </div>
  );
}
