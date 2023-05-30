import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import './styles.css';

const API_ENDPOINT = 'https://disease.sh/v3/covid-19/countries';

const fetchData = async (): Promise<any[]> => {
	const response = await axios.get(API_ENDPOINT);
	return response.data;
};

type CustomQueryKey = [string, string];

const MapComponent: React.FC = () => {
	const queryKey: CustomQueryKey = ['markers', 'data'];
	const { data: markers, isLoading } = useQuery(queryKey, fetchData);

	const maps = {
		base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	};

	if (isLoading) {
		return <div>Loading data...</div>;
	}

	return (
		<div>
			<h2 className='font-bold'>Leaf Let Graph</h2>
			<MapContainer
				center={[37.0902, -95.7129]}
				zoom={4}
				style={{ height: '400px', width: '100%' }}
			>
				<TileLayer
					url={maps.base}
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				{markers?.map((marker, index) => (
					<Marker
						key={index}
						position={[marker.countryInfo.lat, marker.countryInfo.long]}
					>
						<Popup>
							{/* Display marker data in the pop-up */}
							<h2>{marker.country}</h2>
							<p>Deaths:{marker.deaths}</p>
							<p>Recorvered:{marker.recovered}</p>
							<p>Active:{marker.active}</p>
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
};

export default MapComponent;
