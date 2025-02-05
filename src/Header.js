import { Search } from "./Search";
import { Logo } from "./Logo";

export function Header({
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
    <div className="header">
      <Logo />
      <Search
        make1={make1}
        setMake1={setMake1}
        model1={model1}
        setModel1={setModel1}
        year1={year1}
        setYear1={setYear1}
        transmission1={transmission1}
        setTransmission1={setTransmission1}
        make2={make2}
        setMake2={setMake2}
        model2={model2}
        setModel2={setModel2}
        year2={year2}
        setYear2={setYear2}
        transmission2={transmission2}
        setTransmission2={setTransmission2}
        finished={finished}
        setFinished={setFinished}
        onReset={onReset}
      />
    </div>
  );
}
