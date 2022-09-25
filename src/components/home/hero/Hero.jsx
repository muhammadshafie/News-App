import React, { useState } from "react";
import { hero } from "../../../dummyData";
import Card from "./Card";

const Hero = () => {
  const [items, setitems] = useState(hero); //Pull API start this line
  return (
    <>
      <section className="hero">
        <div className="container">
          {items.map((items) => {
            return <Card key={items.id} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
