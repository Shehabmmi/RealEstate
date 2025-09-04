import React from "react";

export default function AccordionItem() {
  const cardsData = [
    {
      id: 1,
      title: "Best interest rates on the market",
      description:
        "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      id: 2,
      title: "Fast and secure transactions",
      description:
        "Your data is protected with industry-leading security and transactions happen instantly without delays.",
    },
    {
      id: 3,
      title: "24/7 Customer Support",
      description:
        "We are here to help you anytime through chat, email, or phone support whenever you need assistance.",
    },
  ];

  return (
    <div className="max-w-2xl space-y-4 mt-10">
      {cardsData.map((card) => (
        <div key={card.id} className="bg-white rounded-xl shadow-lg p-5">
          {/* Header */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                {/* Icon ثابت مثلاً Shield */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  />
                </svg>
              </div>
              <h2 className="font-semibold text-gray-800">{card.title}</h2>
            </div>

            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Body */}
          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
