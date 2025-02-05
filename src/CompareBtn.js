export function CompareBtn({ finished, setFinished }) {
  function handleFinish(e) {
    e.preventDefault();
    setFinished(true);
  }

  return (
    <button className="compare-btn" onClick={handleFinish}>
      Compare
    </button>
  );
}
