const labels = [];
const values = [];
const values2 = [];
const monthName = new Date().toLocaleString("default", { month: "long" });

for (let i = 1; i < 32; i++) {
  labels.push(`${i} ${monthName}`);
  values.push(Math.floor(Math.random() * 400 * i));
  values2.push(Math.floor(Math.random() * 400 * i));
}

export const chartBig = {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        data: values,
        label: "This month",
        fill: false,
        borderColor: "#7445FB",
        backgroundColor: "#7445FB",
        tension: 0.4,
        radius: 0,
        pointHoverBorderWidth: 3,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "white",
      },
      {
        data: values2,
        label: "Last month",
        fill: false,
        borderColor: "#D5D5D6",
        backgroundColor: "#D5D5D6",
        tension: 0.4,
        radius: 0,
        borderDash: [6, 2],
      },
    ],
  },
  plugins: [
    {
      id: "tootipLine",
      beforeDraw: (chart) => {
        const { ctx, chartArea, tooltip } = chart;

        if (tooltip._active && tooltip._active.length) {
          ctx.beginPath();
          ctx.moveTo(tooltip.caretX, tooltip.caretY);
          ctx.lineTo(tooltip.caretX, chartArea.bottom + 25);
          ctx.lineWidth = 2;
          ctx.strokeStyle = "lightgrey";
          ctx.font = "14px Poppins";
          ctx.fillText(tooltip.title[0], tooltip.x + 30, chartArea.bottom + 20);
          ctx.stroke();
          ctx.restore();
        }
      },
    },
  ],
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: "black",
        bodyColor: "white",
        caretPadding: 15,
        xAlign: "center",
        yAlign: "bottom",
        bodyFont: {
          size: 16,
          family: "Helvetica",
          weight: "600",
        },
        titleFont: {
          size: 0,
          lineHeight: 0,
        },
        displayColors: false,
        callbacks: {
          label: (v) => `$${Math.round(Number(v.raw) / 1000)}k`,
        },
      },
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 8,
          boxHeight: 8,
          color: "#b5b5b5",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            return Number(value) / 1000 + "k";
          },
          color: "gray",
        },
        grid: {
          color: "gray",
          drawBorder: false,
          drawTicks: true,
          tickBorderDash: [0, 20],
        },
        border: {
          dash: [2, 6],
          display: false,
        },
      },
      x: {
        ticks: {
          color: "transparent",
          font: {
            size: 5,
          },
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
