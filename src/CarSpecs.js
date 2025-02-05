export function CarSpecs({ car }) {
  if (!car) return;

  return (
    <div className="car-specs">
      <span>{car.make.charAt(0).toUpperCase() + car.make.slice(1)}</span>
      <span>{car.model.charAt(0).toUpperCase() + car.model.slice(1)}</span>
      <span>{car.year}</span>
      <span>{car.transmission === "a" ? "Automatic" : "Manual"}</span>
      <span>{car.class.charAt(0).toUpperCase() + car.class.slice(1)}</span>
      <span>{car.drive.charAt(0).toUpperCase() + car.drive.slice(1)}</span>
      <span>
        {car.fuel_type.charAt(0).toUpperCase() + car.fuel_type.slice(1)}
      </span>
      <span>{car.city_mpg}</span>
      <span>{car.highway_mpg}</span>
      <span>{car.combination_mpg}</span>
      <span>{car.cylinders}</span>
      <span>{car.displacement}</span>
    </div>
  );
}
