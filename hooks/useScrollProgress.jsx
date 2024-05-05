import { React, useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const curentProgress = window.scrollY;
      const scrolHeight = document.body.scrollHeight - window.innerHeight;

      if (scrolHeight) {
        setCompletion(Number(curentProgress / scrolHeight).toFixed(2) * 100);
      }
    };

    //event
    window.addEventListener("scroll", updateScrollCompletion);
    //clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
