import preloaderStyle from "../../style/Preloader/PreloaderII.module.css";

const PreloaderII = () => {
  return (
    <div className="flex justify-center items-center bg-black text-white h-96 mb-7">
      <div
        className={`absolute h-40 w-40 rounded-full ${preloaderStyle.ring}`}
      ></div>
      <span className={`${preloaderStyle.text}`}> loading...</span>
    </div>
  );
};

export default PreloaderII;
