import boxStyle from "../../style/Box/BoxVII.module.css";

const BoxVII = () => {
  return (
    <div className="flex justify-center items-center relative overflow-hidden w-48 h-48 border border-orange-600">
      <h1 className="text-3xl text-orange-600 font-bold">BOX VII</h1>

      <div className={`absolute w-full h-48 bg-orange-600 ${boxStyle.boxVII}`}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl text-white font-bold">BOX VII</h1>
        </div>
      </div>
    </div>
  );
};

export default BoxVII;
