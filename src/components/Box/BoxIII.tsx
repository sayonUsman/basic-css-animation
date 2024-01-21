import boxStyle from "../../style/Box/BoxIII.module.css";

const BoxIII = () => {
  return (
    <div className="flex justify-center items-center relative overflow-hidden h-48 shadow-md shadow-indigo-500 mt-7">
      <h1 className="text-3xl text-indigo-500 font-bold">
        CSS ANIMATION (BOX III)
      </h1>

      <div className={`absolute w-full h-48 bg-indigo-500 ${boxStyle.boxIII}`}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl text-white font-bold">
            CSS ANIMATION (BOX III)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BoxIII;
