import { useState } from "react";
import { OpenForm } from "./OpenForm";
import { ToggleCarBtn } from "./ToggleCarBtn";

export function AddCarBtn({
  make,
  setMake,
  model,
  setModel,
  year,
  setYear,
  transmission,
  setTransmission,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen(e) {
    e.preventDefault();
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="add-car-container">
      {isOpen ? (
        <OpenForm
          make={make}
          setMake={setMake}
          model={model}
          setModel={setModel}
          year={year}
          setYear={setYear}
          transmission={transmission}
          setTransmission={setTransmission}
        />
      ) : (
        <button className="add-car-btn" onClick={toggleIsOpen}>
          {isOpen ? "CLOSE" : "ADD CAR"} <ToggleCarBtn isOpen={isOpen} />
        </button>
      )}
    </div>
  );
}
