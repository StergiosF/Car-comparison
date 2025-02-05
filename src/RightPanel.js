import { CarCard } from "./CarCard";

export function RightPanel({ car2, finished }) {
  if (car2 === undefined)
    return <h3 className="not-found-msg">Car not found ❌</h3>;

  return (
    <div className="right-panel">
      <CarCard car={car2} />
    </div>
  );
}
