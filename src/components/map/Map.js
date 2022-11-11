import { GoogleMap, Marker } from "@react-google-maps/api";
import { useCallback, useRef } from "react";
import { defaultTheme } from "./theme"
import React from "react";
import styles from './Map.module.scss'


const containerStyle = {
    width: "100%",
    height: "100%",
};


export const Map = ({ center }) => {

    const defaultOptions = {
        panControl: true,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: true,
        clickableIcons: true,
        keyboardShortcuts: false,
        scrollwheel: true,
        disableDoubleClickZoom: false,
        fullscreenControl: false,
        isFractionalZoomEnabled: true,
        styles: defaultTheme,
    }

    const mapRef = useRef(undefined);

    const onLoad = useCallback(function callback(map) {
        mapRef.current = map;
    }, []);

    const onUnmount = useCallback(function callback() {
        mapRef.current = undefined;
    }, []);

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};
