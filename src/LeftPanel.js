import { CarCard } from "./CarCard";

export function LeftPanel({ car1, finished }) {
  if (car1 === undefined)
    return <h3 className="not-found-msg">Car not found ❌</h3>;

  return (
    <div className="left-panel">
      <CarCard car={car1} />
    </div>
  );
}
