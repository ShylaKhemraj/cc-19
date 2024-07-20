import React from 'react';
import Tour from './Tour';
function Gallery() {
  const { tours, removeTour } = useContext(TourContext);

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} onRemove={removeTour} />
      ))}
    </div>
  );
}
export default Gallery;