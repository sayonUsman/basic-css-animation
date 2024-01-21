import boxStyle from "../../style/Box/BoxV.module.css";

const BoxV = () => {
  return (
    <div className="flex justify-center items-center relative w-48 h-48 shadow-inner shadow-yellow-300">
      <h1 className="text-3xl text-yellow-300 font-bold">BOX V</h1>

      <div className={`absolute w-full h-48 bg-yellow-300 ${boxStyle.boxV}`}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl text-white font-bold">BOX V</h1>
        </div>
      </div>
    </div>
  );
};

export default BoxV;
