import { ResetBtn } from "./ResetBtn";
import { CompareBtn } from "./CompareBtn";
import { AddCarBtn } from "./AddCarBtn";

export function Search({
  make1,
  setMake1,
  model1,
  setModel1,
  year1,
  setYear1,
  transmission1,
  setTransmission1,
  make2,
  setMake2,
  model2,
  setModel2,
  year2,
  setYear2,
  transmission2,
  setTransmission2,
  finished,
  setFinished,
  onReset,
}) {
  return (
    <div className="search">
      <AddCarBtn
        make={make1}
        setMake={setMake1}
        model={model1}
        setModel={setModel1}
        year={year1}
        setYear={setYear1}
        transmission={transmission1}
        setTransmission={setTransmission1}
      />
      {finished && <ResetBtn onReset={onReset} />}
      <AddCarBtn
        make={make2}
        setMake={setMake2}
        model={model2}
        setModel={setModel2}
        year={year2}
        setYear={setYear2}
        transmission={transmission2}
        setTransmission={setTransmission2}
      />
      {!finished && (
        <CompareBtn finished={finished} setFinished={setFinished} />
      )}
    </div>
  );
}
