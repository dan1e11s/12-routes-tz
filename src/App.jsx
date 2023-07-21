import Map from './components/Map/Map';
import RoutesTable from './components/RoutesTable/RoutesTable';

const App = () => {
  return (
    <div className="container">
      <RoutesTable />
      <Map />
    </div>
  );
};

export default App;
