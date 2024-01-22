import BoxI from "./components/Box/BoxI";
import BoxII from "./components/Box/BoxII";
import BoxIII from "./components/Box/BoxIII";
import BoxIV from "./components/Box/BoxIV";
import BoxV from "./components/Box/BoxV";
import BoxVI from "./components/Box/BoxVI";
import BoxVII from "./components/Box/BoxVII";
import BoxVIII from "./components/Box/BoxVIII";
import ButtonI from "./components/Button/ButtonI";

function App() {
  return (
    <>
      <BoxI />
      <BoxII />
      <BoxIII />
      <BoxIV />

      <div className="flex justify-between items-center mt-7">
        <BoxV />
        <BoxVI />
        <BoxVII />
        <BoxVIII />
      </div>

      <div className="flex justify-center my-7">
        <ButtonI />
      </div>
    </>
  );
}

export default App;
