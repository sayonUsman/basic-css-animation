import preloaderStyle from "../../style/Preloader/PreloaderI.module.css";

const PreloaderI = () => {
  return (
    <div className="flex justify-center pt-3 pb-10">
      <div
        className={`h-24 w-24 border-[12px] border-indigo-100 border-r-indigo-600 rounded-full ${preloaderStyle.loader}`}
      ></div>
    </div>
  );
};

export default PreloaderI;
