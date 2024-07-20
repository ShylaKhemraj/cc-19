//U20026580
import React from 'react';
import './App.css';
import Gallery from './Gallery';

const TourContext = React.createContext(null);

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id));
  };
  const value = { tours, isLoading, error, removeTour };
  return (
    <TourContext.Provider value={value}>
      <div className="App">
        <h1>Tour Comparison App</h1>
        {isLoading & <p>Loading tours...</p>}
        {error & <p>Error: {error.message}</p>}
        {tours.length > 0 & <Gallery />}
      </div>
    </TourContext.Provider>
  );
}
export default App;