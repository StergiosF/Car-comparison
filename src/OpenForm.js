import { useState, useEffect } from "react";

export function OpenForm({
  make,
  setMake,
  model,
  setModel,
  year,
  setYear,
  transmission,
  setTransmission,
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <form className={`open-form fade-in ${isMounted ? "mounted" : ""}`}>
      <input
        type="text"
        placeholder="Make"
        autoFocus
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <select onChange={(e) => setTransmission(e.target.value)}>
        <option defaultValue="" hidden>
          Select Transmission
        </option>
        <option value="A">Automatic</option>
        <option value="M">Manual</option>
      </select>
    </form>
  );
}
