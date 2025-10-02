import "./MapStyles.css";

import "leaflet/dist/leaflet.css";
import { divIcon, point } from "leaflet";
import { MapContainer, Marker, TileLayer, Popup} from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"

function Map(){


    const markers=[
        {
            geocode: [44.3408, 17.2691],
            popUp: "Tvrđava"
        },  {
            geocode: [44.3393, 17.2689],
            popUp: "Crkva sv. Marije"
        },  {
            geocode: [44.3407, 17.2661],
            popUp: "Hram boga Mitre"
        },  {
            geocode: [44.3758, 17.2946],
            popUp: "Crkva sv. Ivana Krstitelja"
        },  {
            geocode: [44.3469, 17.2264],
            popUp: "Mlinčići"
        },  {
            geocode: [44.3483, 17.2309],
            popUp: "Malo Plivsko jezero"
        }, {
            geocode: [44.3441, 17.2080],
            popUp: "Veliko Plivsko jezero"
        }, {
            geocode: [44.3413, 17.2738],
            popUp: "Franjevački muzej"
        },  {
            geocode: [44.3484, 17.2391],
            popUp: "Most Ljubavi"
        }, 
        {
            geocode: [44.3392, 17.2681],
            popUp: "Medvjed Kula"
        }, {
            geocode: [44.3395, 17.2682],
            popUp: "Katakombe"
        }, 
        {
            geocode: [44.3382, 17.2680],
            popUp: "Muzej AVNOJ-a"
        },
         {
            geocode: [44.3387, 17.2702],
            popUp: "Omerbegova kuća"
        },{
            geocode: [44.3397, 17.2712],
            popUp: "Džamija Esme Sultanije"
        },{
            geocode: [44.3394, 17.2695],
            popUp: "Etno zbrika"
        },
        {
            geocode: [44.3375, 17.2704],
            popUp: "Vodopad"
        },
    ];
    
    const createCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
            className: "custom-marker-cluster",
            iconSize: point(33, 33, true)
        });
    };

     return (
        <div className="map-flex-container">
            <div className="t-card map-card">
                <div className="map-container">
                    <MapContainer center={[44.3396, 17.2712]} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
                            {markers.map((marker, idx) => (
                                <Marker key={idx} position={marker.geocode}>
                                    <Popup>{marker.popUp}</Popup>
                                </Marker>
                            ))}
                        </MarkerClusterGroup>
                    </MapContainer>
                </div>
            </div>

            <div className="map-text">
                <p>
                    Ovdje možete vidjeti najvažnije znamenitosti Jajca na karti. <br/>
                    Kliknite na markere kako biste saznali više informacija. <br/>
                    Planirajte svoj posjet i istražite prirodne i kulturne ljepote ovog jedinstvenog grada!
                </p>
            </div>
        </div>
    );
}

export default Map