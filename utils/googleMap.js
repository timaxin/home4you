import {useRef, useEffect, useMemo, useState} from 'react';
import loader from './googleMapsLoader';

const Map = ({ className }) => {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  useEffect(() => {
    loader.load().then(() => {
      const mapOptions = {
        center: {
          lat: 51.776763442061856,
          lng: 19.454719540402984,
        },
        zoom: 15,
      };
      const newMap = new window.google.maps.Map(
        mapRef.current,
        mapOptions
      );
      const marker = new window.google.maps.Marker({
        position: mapOptions.center,
        map: newMap,
      });
      setMap(newMap);
    });
  }, []);
  return <div id="map" className={className} ref={mapRef}></div>;
};
export default Map;
