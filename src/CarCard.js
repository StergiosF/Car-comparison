import { CarSpecs } from "./CarSpecs";
import { CarSpecsTitle } from "./CarSpecsTitle";

export function CarCard({ car }) {
  return (
    <div className="car-card">
      <CarSpecsTitle car={car} />
      <CarSpecs car={car} />
    </div>
  );
}
