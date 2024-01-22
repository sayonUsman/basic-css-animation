import style from "../../style/Button/btn.module.css";

const ButtonI = () => {
  return (
    <button
      className={`px-12 py-3 rounded-sm shadow-md shadow-fuchsia-600 text-fuchsia-700 font-semibold ${style.btnI}`}
    >
      Click
    </button>
  );
};

export default ButtonI;
