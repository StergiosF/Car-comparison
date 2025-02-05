export function ToggleCarBtn({ isOpen }) {
  return (
    <div
      className="toggle-car-btn"
      style={
        isOpen
          ? { backgroundColor: "firebrick" }
          : { backgroundColor: "darkgreen" }
      }
    >
      {isOpen ? <span>&minus;</span> : <span>+</span>}
    </div>
  );
}
