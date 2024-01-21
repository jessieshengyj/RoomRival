import "@mappedin/mappedin-js/lib/mappedin.css";
import {useEffect, useMemo} from "react";
import useMapView from "./hooks/useMapView.ts";
import useVenueMaker from "./hooks/useVenueMaker.ts";

/* This demo shows you how to configure and render a map. */
export default function BasicMap() {
    /*
     * API keys and options for fetching the venue must be memoized
     * to prevent React from re-rendering excessively.
     */
    const credentials = useMemo(
        () => ({
            mapId: "657cc670040fcba69696e69e",
            key: "65a0422df128bbf7c7072349",
            secret: "5f72653eba818842c16c4fdb9c874ae02100ffced413f638b7bd9c65fd5b92a4"
        }),
        []
    );
    // The venue object contains all the iterable data for the map
    const venue = useVenueMaker(credentials);

    const mapOptions = useMemo(
        () => ({
            backgroundColor: "#CFCFCF" // Background colour behind the map
        }),
        []
    );
    // The mapView is the entrypoint to controling the map
    const {elementRef, mapView} = useMapView(venue, mapOptions);

    /* Map setup should be done in a useEffect */
    useEffect(() => {
        // Check that the map and venue were created successfully
        if (!mapView || !venue) {
            return;
        }

        // Label all spaces and desks which have a name
        mapView.FloatingLabels.labelAllLocations();
    }, [mapView, venue]);

    return (
        <div id="app">
            <div id="ui">
                {/* Render some map details to the UI */}
                {venue?.venue.name ?? "Loading..."}
                {venue && (
                    <select
                        onChange={(e) => {
                            if (!mapView || !venue) {
                                return;
                            }

                            // When the floor select changes we can find and set the map to that ID
                            const floor = venue.maps.find((map) => map.id === e.target.value);
                            if (floor) {
                                mapView.setMap(floor);
                            }
                        }}
                    >
                        {/* The venue "maps" represent each floor */}
                        {venue?.maps.map((level, index) => {
                            return (
                                <option value={level.id} key={index}>
                                    {level.name}
                                </option>
                            );
                        })}
                    </select>
                )}
            </div>
            <div id="map-container" ref={elementRef}></div>
        </div>
    );
}
