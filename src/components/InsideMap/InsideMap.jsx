import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Marker, Polyline, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { decodePolyline } from '../../helpers/decodePolyline';

const InsideMap = () => {
  const map = useMap();
  const { polyline } = useSelector((state) => state.polylines);
  const { points } = useSelector((state) => state.routes);

  useEffect(() => {
    if (polyline) {
      const decodedPolyline = decodePolyline(polyline);
      const latLngs = decodedPolyline.map(([lat, lng]) => L.latLng(lat, lng));

      const polylineBounds = L.latLngBounds(latLngs);

      const center = polylineBounds.getCenter();
      const zoomLevel = map.getBoundsZoom(polylineBounds);

      map.setView(center, zoomLevel);
    }
  }, [map, polyline]);

  return (
    <>
      {polyline && (
        <Polyline
          color="red"
          positions={decodePolyline(polyline).map(([lat, lng]) => [lat, lng])}
        />
      )}
      {points &&
        points.map((point, i) => (
          <Marker key={i} position={point}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
    </>
  );
};

export default InsideMap;
