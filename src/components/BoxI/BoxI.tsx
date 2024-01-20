import "../../style/BoxI.css";

const BoxI = () => {
  return (
    <div className="flex justify-center items-center relative overflow-y-hidden h-48 border-2 border-lime-500 mt-3">
      <h1 className="text-3xl text-lime-500 font-bold">
        CSS ANIMATION (BOX I)
      </h1>

      <div className="absolute w-full h-48 bg-lime-500 box-I">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl text-white font-bold">
            CSS ANIMATION (BOX I)
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BoxI;
