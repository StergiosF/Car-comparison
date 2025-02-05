export function CarSpecsTitle({ car }) {
  if (!car) return;

  return (
    <div className="car-specs-title">
      <span>Make: </span>
      <span>Model: </span>
      <span>Year: </span>
      <span>Transmission: </span>
      <span>Class: </span>
      <span>Drive: </span>
      <span>Fuel Type: </span>
      <span>City MPG: </span>
      <span>Highway MPG: </span>
      <span>Combination MPG: </span>
      <span>Cylinders: </span>
      <span>Displacement: </span>
    </div>
  );
}
