/* eslint react/prop-types: 0 */

import { useState } from "react";

const data = [
  {
    id: 1,
    title: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. Its suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    title: "Is Frontend Mentor free?",
    text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 3,
    title: "Can I use Frontend Mentor projects in my portfolio? ",
    text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 4,
    title: "How can I get help if I'm stuck on a challenge?",
    text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  return (
    <div className="wrapper">
      <div className="component">
        <div className="heading__box">
          <img src="../public/images/icon-star.svg" />
          <h1 className="header">FAQs</h1>
        </div>
        <Accordion data={data} />
      </div>
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((data) => (
        <AccordionItem key={data.id} title={data.title} text={data.text} />
      ))}
    </div>
  );
}

function AccordionItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="accordion__item">
      <div className="accordion__title" onClick={handleToggle}>
        <h2 className="accordion__heading">{title}</h2>
        <img
          src={
            !isOpen
              ? "../public/images/icon-plus.svg"
              : "../public/images/icon-minus.svg"
          }
        />
      </div>
      {isOpen && <p className="accordion__text">{text}</p>}
    </div>
  );
}
