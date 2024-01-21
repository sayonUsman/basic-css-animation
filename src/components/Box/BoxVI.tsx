import boxStyle from "../../style/Box/BoxVI.module.css";

const BoxVI = () => {
  return (
    <div className="flex justify-center items-center relative overflow-hidden w-48 h-48 shadow-md shadow-amber-500">
      <h1 className="text-3xl text-amber-500 font-bold">BOX VI</h1>

      <div className={`absolute w-full h-48 bg-amber-500 ${boxStyle.boxVI}`}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl text-white font-bold">BOX VI</h1>
        </div>
      </div>
    </div>
  );
};

export default BoxVI;
