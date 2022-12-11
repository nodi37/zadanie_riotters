const labels = [];
const monthName = new Date().toLocaleString("default", { month: "long" });

for (let i = 1; i < 32; i++) {
  labels.push(`${i} ${monthName}`);
}

const createMinusValues = () => {
  const values = [];
  for (let i = 1; i < 32; i++) {
    values.push(Math.floor(Math.random() * 400 * (32 - i)));
  }
  return values;
};

const createPlusValues = () => {
  const values = [];
  for (let i = 1; i < 32; i++) {
    values.push(Math.floor(Math.random() * 400 * i));
  }
  return values;
};

export default function chartSmall(goesUp) {
    const values = goesUp ? createPlusValues() : createMinusValues();
    const valueMax = Math.max(...values);
    const helperValues = Array(31).fill(valueMax);

    const tempCanvas = document.createElement("canvas");
    const tctx = tempCanvas.getContext("2d");
    const gradient = tctx.createLinearGradient(0, 0, 0, 60);
    gradient.addColorStop(0, goesUp ? "transparent" : "#ea4d4d1c");
    gradient.addColorStop(1, goesUp ? "#2dc78e1f" : "transparent");

    return {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Main",
            data: values,
            fill: goesUp ? "+1" : true,
            borderWidth: 2,
            borderColor: goesUp ? "#2DC78F" : "#EA4D4D",
            backgroundColor: gradient,
            tension: 0.4,
            radius: 0,
            pointHoverBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: "white",
          },
          {
            label: "BackgroundHelpepr",
            fill: false,
            backgroundColor: gradient,
            data: helperValues,
            borderColor: null,
            borderWidth: 0,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
          filler: {
            propagate: true,
          },
        },
        scales: {
          y: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
          x: {
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
      },
    };
  }

