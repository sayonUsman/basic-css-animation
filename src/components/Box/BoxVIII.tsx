import boxStyle from "../../style/Box/BoxVIII.module.css";

const BoxVIII = () => {
  return (
    <div className="flex justify-center items-center relative w-48 h-48 border border-rose-600">
      <h1 className="text-3xl text-rose-600 font-bold">BOX VIII</h1>

      <div className={`absolute w-full h-48 bg-rose-600 ${boxStyle.boxVIII}`}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl text-white font-bold">BOX VIII</h1>
        </div>
      </div>
    </div>
  );
};

export default BoxVIII;
