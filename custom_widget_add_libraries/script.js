async function loadAndInitChart(chartUrl) {
  // Load script
  const response = await fetch(chartUrl);
  const script = document.createElement("script");
  script.textContent = await response.text();
  document.body.appendChild(script);

  // Initialize chart
  const dom = document.getElementById("chart-container");
  const myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });

  // Set chart options
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", myChart.resize);
}

// Load script and initialize chart
loadAndInitChart(
  "https://cdn.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"
);
