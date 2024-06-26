import {useRef, useEffect} from 'react';
import loader from './googleMapsLoader';

const Map = ({address, className}) => {
  const mapRef = useRef(null);
  useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({address}, (results, status) => {
        if (status === 'OK') {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 15,
          };
          const newMap = new window.google.maps.Map(
            mapRef.current,
            mapOptions
          );
          new window.google.maps.Marker({
            position: mapOptions.center,
            map: newMap,
          });
        } else {
          console.error(`Address ${address} cannot be geocoded`);
        }
      });
    });
  }, [address]);
  return <div id="map" className={className} ref={mapRef}></div>;
};
export default Map;
