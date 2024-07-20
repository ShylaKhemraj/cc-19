import React from 'react';
function Tour({ tour, onRemove }) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);
  return (
    <div className="tour">
      <img src={tour.image} alt={tour.name} />
      <div className="information">
        <h3>{tour.name}</h3>
        <p>{tour.price}</p>
        {!showDetails & <button onClick={toggleDetails}>Read More</button>}
        {showDetails & (
          <>
            <p>{tour.info}</p>
            <button onClick={toggleDetails}>Show Less</button>
          </>
        )}
        <button onClick={() => onRemove(tour.id)}>Not Interested</button>
      </div>
    </div>
  );
}
export default Tour;