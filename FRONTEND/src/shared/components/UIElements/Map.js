import React, { useRef, useEffect } from "react";

import './Map.css';

const Map = props => {
    const mapRef = useRef();  {/* Use to establish connection between DOMElements and React basically a reference that can used throughout */}

    const {center, zoom} = props; {/* object destructuring */}

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: zoom
    });

    new window.google.maps.Marker({position: center, map: map})
    }, [center, zoom])

//     useEffect(() => {
//     new window.ol.Map({
//       target: mapRef.current.id,
//       layers: [
//         new window.ol.layer.Tile({
//           source: new window.ol.source.OSM()
//         })
//       ],
//       view: new window.ol.View({
//         center: window.ol.proj.fromLonLat([center.lng, center.lat]),
//         zoom: zoom
//       })
//     });
//   }, [center, zoom]);

    

    return <div ref={mapRef} className={`map ${props.className}`} style={props.style} id="map"></div>
};

export default Map;