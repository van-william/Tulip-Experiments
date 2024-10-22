let chart;

const initChart = () => {
  const ctx = document.getElementById("timeSeriesChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Sensor Values",
          data: [],
          borderColor: "#2196f3",
        },
      ],
    },
  });
};

const updateChart = (historicalData) => {
  // Convert list of objects into separate arrays
  const timestamps = historicalData.map((point) =>
    new Date(point.timestamp * 1000).toLocaleTimeString()
  );
  const values = historicalData.map((point) => point.value);

  // Update chart with new arrays
  chart.data.labels = timestamps;
  chart.data.datasets[0].data = values;
  chart.update();
};

// Initialize the chart
initChart();

// Update when new data arrives
getValue("historicals", (historical_data) => {
  updateChart(historical_data);
});
