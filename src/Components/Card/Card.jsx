import React from "react";
import R1 from "../../assets/r1.png";
import R2 from "../../assets/r2.png";
import R3 from "../../assets/r3.png";

export default function Card() {
  
  const cards = [
    {
      img: R1,
      price: "47,043",
      title: "Aliva Priva Jardin",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi tempore, ipsum repellat obcaecati",
    },
    {
      img: R2,
      price: "55,120",
      title: "Gardenia Heights",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit alias fugiat.",
    },
    {
      img: R3,
      price: "62,500",
      title: "Sunset Villa",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, minus aliquid!",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="max-w-sm bg-white py-5  rounded-lg">
          <a href="#">
            <img className="rounded-t-lg w-full" src={card.img} alt={card.title} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-500">
                <span className="text-[#F4A502]">$</span> {card.price}
              </h5>
            </a>
            <p className="mb-3 font-bold text-3xl text-[#1F3E72]">
              {card.title}
            </p>
            <p className="text-sm text-gray-500 font-light">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
