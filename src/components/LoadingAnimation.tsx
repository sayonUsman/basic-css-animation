import { CSSProperties } from "react";
import style from "../style/LoadingAnimation.module.css";

const LoadingAnimation = () => {
  return (
    <div
      className={`box-border flex justify-center items-center min-h-screen bg-black ${style.loaderParentDiv}`}
    >
      <div className={`relative w-32 h-32`}>
        <span
          style={{ "--i": 1 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 2 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 3 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 4 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 5 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 6 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 7 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 8 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 9 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 10 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 11 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 12 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 13 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 14 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 15 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 16 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 17 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 18 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 19 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>

        <span
          style={{ "--i": 20 } as CSSProperties}
          className={`absolute top-0 left-0 w-full h-full ${style.loader}`}
        ></span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
