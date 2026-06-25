import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTop = () => {
  const [show, setShow] =
    useState(false);

  useEffect(() => {
    const handleScroll =
      () => {
        setShow(
          window.scrollY > 400
        );
      };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    show && (
      <button
        className="back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior:
              "smooth",
          })
        }
      >
        <FiArrowUp />
      </button>
    )
  );
};

export default BackToTop;