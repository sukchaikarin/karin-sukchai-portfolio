import { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(Math.round((currentProgress / scrollHeight) * 100));
      }
    };

    // Event listener for scroll
    window.addEventListener("scroll", updateScrollCompletion);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
