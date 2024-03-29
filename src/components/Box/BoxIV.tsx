import boxStyle from "../../style/Box/BoxIV.module.css";

const BoxIV = () => {
  return (
    <div className="flex justify-center items-center relative overflow-hidden h-48 shadow-md shadow-purple-500 mt-7">
      <h1 className="text-3xl text-purple-500 font-bold">
        CSS ANIMATION (BOX IV)
      </h1>

      <div className={`absolute w-full h-48 bg-purple-500 ${boxStyle.boxIV}`}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl text-white font-bold">
            CSS ANIMATION (BOX IV)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BoxIV;
