import { useState, useEffect } from "react";
import { Header } from "./Header";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";

export default function App() {
  const [make1, setMake1] = useState("");
  const [model1, setModel1] = useState("");
  const [year1, setYear1] = useState("");
  const [transmission1, setTransmission1] = useState("");

  const [make2, setMake2] = useState("");
  const [model2, setModel2] = useState("");
  const [year2, setYear2] = useState("");
  const [transmission2, setTransmission2] = useState("");

  const [finished, setFinished] = useState(false);

  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);

  useEffect(
    function () {
      const options = {
        method: "GET",
        headers: { "X-Api-Key": "V04JhwVCFN2dcUIkp4ogiw==WXmnu4eZ0mOlJ9g4" },
        contentType: "application/json",
      };

      async function fetchData() {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/cars?limit=1&make=${make1}&model=${model1}&year=${year1}&${transmission1}`,
          options
        );

        const data = await res.json();

        console.log(data[0]);
        setCar1(data[0]);
      }
      if (!make1 && !model1 && !year1) return;

      if (finished) fetchData();
    },
    [make1, model1, year1, transmission1, finished]
  );

  useEffect(
    function () {
      const options = {
        method: "GET",
        headers: { "X-Api-Key": "V04JhwVCFN2dcUIkp4ogiw==WXmnu4eZ0mOlJ9g4" },
        contentType: "application/json",
      };

      async function fetchData() {
        const res = await fetch(
          `https://api.api-ninjas.com/v1/cars?limit=1&make=${make2}&model=${model2}&year=${year2}&${transmission2}`,
          options
        );

        const data = await res.json();

        console.log(data[0]);
        setCar2(data[0]);
      }
      if (!make2 && !model2 && !year2) return;

      if (finished) fetchData();
    },
    [make2, model2, year2, transmission2, finished]
  );

  function handleReset(e) {
    e.preventDefault();
    setFinished(false);
    setCar1(null);
    setCar1(null);
    setCar2(null);
    setCar2(null);
    setMake1("");
    setMake2("");
    setModel1("");
    setModel2("");
    setYear1("");
    setYear2("");
    setTransmission1("");
    setTransmission2("");
  }

  if (!car1 && !car2) {
    return (
      <div className="app">
        <Header
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
          onReset={handleReset}
        />
        <main className="main">
          <div className="cars-container">
            <img className="logo-big" src="car-big.svg" alt="car big" />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <Header
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
        onReset={handleReset}
      />
      <main className="main">
        <div className="cars-container">
          <LeftPanel
            car1={car1}
            finished={finished}
            setFinished={setFinished}
          />
          <RightPanel
            car2={car2}
            finished={finished}
            setFinished={setFinished}
          />
        </div>
      </main>
    </div>
  );
}
