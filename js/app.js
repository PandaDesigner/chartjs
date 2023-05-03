Chart.defaults.color = "#fff";
Chart.defaults.borderColor = "#444";

const printCharts = () => {
	fetchCoasterData(
		"https://coaster-api.herokuapp.com",
		"https://coaster-api.herokuapp.com/country/Spain",
	).then(([allCoasters, nationalCoaster]) => {
		console.log(allCoasters);
		console.log(nationalCoaster);
	});
	renderModelsChart();
};

const renderModelsChart = () => {
	const data = {
		labels: ["uno", "dos", "tres"],
		datasets: [
			{
				data: [10, 20, 30],
				borderColor: getDataColors(),
				backgroundColor: getDataColors(20),
			},
		],
	};
	const options = {
		plugins: {
			legend: { position: "left" },
		},
	};

	new Chart("modelsChart", { type: "doughnut", data, options });
};

printCharts();
