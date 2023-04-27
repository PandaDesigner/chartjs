const printCharts = () => {
	renderModelsChart();
};

const renderModelsChart = () => {
	const data = {
		labels: ["uno", "dos", "tres"],
		datasets: [
			{
				data: [10, 20, 30],
				borderColor: ["red", "green", "blue"],
				backgroundColor: ["blue", "green", "pink"],
			},
		],
	};
	new Chart("modelsChart", { type: "doughnut", data });
};

printCharts();
