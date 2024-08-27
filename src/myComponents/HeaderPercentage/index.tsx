// ScrollPercentage.js
import React, { useState, useEffect, type FC } from "react";

const HeaderPercentage: FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const currentScrollPercentage = (scrollTop / documentHeight) * 100;

    setScrollPercentage(currentScrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col w-full items-start">
      <div
        className="flex-none w-full h-1 bg-secondary"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default HeaderPercentage;
