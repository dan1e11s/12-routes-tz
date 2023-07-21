import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import InsideMap from '../InsideMap/InsideMap';

const Map = () => {
  const position = [59.84660399, 30.29496392];

  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <InsideMap />
    </MapContainer>
  );
};

export default Map;
