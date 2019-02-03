import React from 'react'
import { GoogleMap, LoadScript, Marker } from 'react-google-maps-api'

const MapComponent = (props) => {
    const styles = [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
            elementType: 'labels.text.fill',
            featureType: 'administrative.locality',
            stylers: [{ color: '#d59563' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'poi',
            stylers: [{ color: '#d59563' }]
        },
        {
            elementType: 'geometry',
            featureType: 'poi.park',
            stylers: [{ color: '#263c3f' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'poi.park',
            stylers: [{ color: '#6b9a76' }]
        },
        {
            elementType: 'geometry',
            featureType: 'road',
            stylers: [{ color: '#38414e' }]
        },
        {
            elementType: 'geometry.stroke',
            featureType: 'road',
            stylers: [{ color: '#212a37' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'road',
            stylers: [{ color: '#9ca5b3' }]
        },
        {
            elementType: 'geometry',
            featureType: 'road.highway',
            stylers: [{ color: '#746855' }]
        },
        {
            elementType: 'geometry.stroke',
            featureType: 'road.highway',
            stylers: [{ color: '#1f2835' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'road.highway',
            stylers: [{ color: '#f3d19c' }]
        },
        {
            elementType: 'geometry',
            featureType: 'transit',
            stylers: [{ color: '#2f3948' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'transit.station',
            stylers: [{ color: '#d59563' }]
        },
        {
            elementType: 'geometry',
            featureType: 'water',
            stylers: [{ color: '#17263c' }]
        },
        {
            elementType: 'labels.text.fill',
            featureType: 'water',
            stylers: [{ color: '#515c6d' }]
        },
        {
            elementType: 'labels.text.stroke',
            featureType: 'water',
            stylers: [{ color: '#17263c' }]
        }
    ]

    const mapOptions = {
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: styles,
        center: { lat: 39.197, lng: -77.9 },
        zoom: 8
    }

    const markers = props.locationData.map(location => {
        return (
            <Marker
                key={location.location_id}
                position={{ lat: location.latitude, lng: location.longitude }}
                // icon={newIcon}
                // onClick={mouser}
            />
        )
    })

    return (
        <LoadScript
            id="script-loader"
            googleMapsApiKey={'AIzaSyAUHE9Nfip-d0aSKDCSZnuuEauicRkZkBY'}
            language={"en"}
            region={"EN"}
            version={"weekly"}
            libraries={[]}
            onLoad={() => console.log("script loaded")}
            loadingElement={<div>Loading...</div>}
        >
            <GoogleMap
                id="basic-map-example"
                mapContainerStyle={{
                    height: "100%",
                    width: "100%"
                }}
                options={mapOptions}
                onLoad={Object.keys(props.bounds).length > 0 ? (map) => map.fitBounds(props.bounds) : (map) => console.log('no bounds')}
            >
                {markers}
            </GoogleMap>
        </LoadScript>
    )
}

export default MapComponent