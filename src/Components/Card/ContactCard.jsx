import React from "react";
import { Camera, Phone, MessageCircle, MessageCircleMore } from "lucide-react";

export default function ContactCard() {
  const Contact = [
    {
      title: "Call",
      btn: "Call now",
      icon: <Phone className="text-white w-5 h-5" />,
      info: "+20 1098697557",
    },
    {
      title: "Chat",
      btn: "Chat now",
      icon: <MessageCircleMore className="text-white w-5 h-5" />,
      info: "@username",
    },
    {
      title: "Video Call",
      btn: "Video Call now",
      icon: <Camera className="text-white w-5 h-5" />,
      info: "Zoom / Meet link",
    },
    {
      title: "Message",
      btn: "Message now",
      icon: <MessageCircle className="text-white w-5 h-5" />,
      info: "Inbox",
    },
  ];

  return (
    <div className="py-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {Contact.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 w-full p-6 shadow-lg rounded-md flex flex-col justify-between"
        >
          <div className="flex items-center space-x-6 mb-4">
            <div className="bg-blue-300 p-3 inline-flex rounded">
              {item.icon}
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-semibold">{item.title}</p>
              <p className="text-sm text-gray-400">{item.info}</p>
            </div>
          </div>
          <button className="btn w-full flex items-center justify-center">
            {item.btn}
          </button>
        </div>
      ))}
    </div>
  );
}
