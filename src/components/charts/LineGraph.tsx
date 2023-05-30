import React from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const API_ENDPOINT = 'https://disease.sh/v3/covid-19/all';

type CustomQueryKey = [string, string];

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Line Chart',
		},
	},
};

const graphData = (labels: string[], values: any[]) => {
	return {
		labels: labels,
		datasets: [
			{
				label: 'Line Graph',
				data: values,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				borderWidth: 2,
			},
		],
	};
};

const fetchData = async (): Promise<any[]> => {
	const response = await axios.get(API_ENDPOINT);
	return response.data;
};

const LineGraph: React.FC = () => {
	const queryKey: CustomQueryKey = ['lineChart', 'data'];
	const { data, isLoading } = useQuery<any>(queryKey, fetchData);

	if (isLoading) return <h2>Loading graph data...</h2>;

	const dataKeys = Object.keys(data);
	const dataValues = Object.values(data);

	return (
		<div>
			<h2 className='font-bold'>Line Chart</h2>
			<Line options={options} data={graphData(dataKeys, dataValues)} />
		</div>
	);
};

export default LineGraph;
