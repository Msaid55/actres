import { useState } from "react";
import webpage from "../assets/webpage.png";
import Code from "../assets/Code.png";
import Speed from "../assets/Speed.png";
import Vector2 from "../assets/Vector2.png";
import Docs from "../assets/Docs.png";
import Resize from "../assets/Resize.png";
import Documentpencil from "../assets/Documentpencil.png";
import Gridinterface from "../assets/Gridinterface.png";
import Terminal from "../assets/Terminal.png";
import palette from "../assets/palette.png";
import DocumentScan from "../assets/DocumentScan.png";
import Link from "../assets/Link.png";

export default function Gridlist() {
  
  const [switches, setSwitches] = useState(Array(12).fill(false));

  
  const toggleSwitch = (index) => {
    const newSwitches = [...switches];
    newSwitches[index] = !newSwitches[index];
    setSwitches(newSwitches);
  };

  
  const cards = [
    {
      icon: webpage,
      bg: "#BFD8BD",
      title: "DevLens",
      desc: "Quickly inspect page layouts and visualize element boundaries.",
    },
    {
      icon: Code,
      bg: "#A9D6E5",
      title: "StyleSpy",
      desc: "Instantly analyze and copy CSS from any webpage element.",
    },
    {
      icon: Speed,
      bg: "#FFCFD2",
      title: "SpeedBoost",
      desc: "Optimizes browser resource usage to accelerate page loading.",
    },
    {
      icon: Vector2,
      bg: "#F1C0E8",
      title: "JSONWizard",
      desc: "Formats, validates, and prettifies JSON responses in-browser.",
    },
    {
      icon: Docs,
      bg: "#CFBAF0",
      title: "TabMaster Pro",
      desc: "Organizes browser tabs into groups and sessions.",
    },
    {
      icon: Resize,
      bg: "#A3C4F3",
      title: "ViewportBuddy",
      desc: "Simulates various screen resolutions directly within the browser.",
    },
    {
      icon: Documentpencil,
      bg: "#90DBF4",
      title: "Markup Notes",
      desc: "Enables annotation and notes directly onto webpages.",
    },
    {
      icon: Gridinterface,
      bg: "#B8B8FF",
      title: "GridGuides",
      desc: "Overlay customizable grids and alignment guides on any webpage.",
    },
    {
      icon: palette,
      bg: "#98F5E1",
      title: "Palette Picker",
      desc: "Instantly extracts color palettes from any webpage.",
    },
    {
      icon: Link,
      bg: "#FFD8BE",
      title: "LinkChecker",
      desc: "Scans and highlights broken links on any page.",
    },
    {
      icon: DocumentScan,
      bg: "#8EECF5",
      title: "DOM Snapshot",
      desc: "Capture and export DOM structures quickly.",
    },
    {
      icon: Terminal,
      bg: "#B9FBC0",
      title: "ConsolePlus",
      desc: "Enhanced developer console with advanced filtering and logging.",
    },
  ];

  return (
    <div className="w-full grid lg:grid-cols-3 gap-5 mt-[40px] sm:grid-cols-1 md:grid-cols-2">
      {cards.map((card, i) => (
        <div
          key={i}
          className="h-[200px] bg-[#FBFDFE] rounded-2xl shadow-[#b3becc] dark:bg-[#2F364B] flex flex-col justify-around items-center"
        >
          
          <div className="w-[342px] h-[76px] flex items-center justify-between">
            <button
              className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: card.bg }}
            >
              <img src={card.icon} alt="" className="w-[32px] h-[32px]" />
            </button>
            <div className="w-[266px] h-[76px]">
              <h2 className="text-[20px] text-[#091540] font-bold dark:text-[#FBFDFE]">
                {card.title}
              </h2>
              <p className="text-[16px] text-[#535868] dark:text-[#c6c6c6]">
                {card.desc}
              </p>
            </div>
          </div>

          
          <div className="w-[342px] h-[38px] flex items-center justify-between">
            <button className="w-[91px] h-[38px] border-2 border-[#C6C6C6] rounded-full text-[#091540] dark:text-[#FBFDFE]">
              Remove
            </button>
            <button
              onClick={() => toggleSwitch(i)}
              className={`relative w-[36px] h-[20px] flex items-center rounded-full transition-colors duration-300 ${
                switches[i] ? "bg-[#C7231A]" : "bg-gray-400"
              }`}
            >
              <span
                className={`w-[16px] h-[16px] bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  switches[i] ? "translate-x-4" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}