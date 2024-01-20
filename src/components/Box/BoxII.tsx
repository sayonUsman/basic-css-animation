import boxStyle from "../../style/Box/BoxII.module.css";

const BoxII = () => {
  return (
    <div className="flex justify-center items-center relative overflow-y-hidden h-48 border-2 border-green-500 mt-7">
      <h1 className="text-3xl text-green-500 font-bold">
        CSS ANIMATION (BOX II)
      </h1>

      <div className={`absolute w-full h-48 bg-green-500 ${boxStyle.boxII}`}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl text-white font-bold">
            CSS ANIMATION (BOX II)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BoxII;
