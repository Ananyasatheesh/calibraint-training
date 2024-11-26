const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Feb 1",
      "Feb 17",
      "Mar 1",
      "Mar 17",
      "Apr 1",
      "Apr 17",
      "May 1",
      "May 17",
    ],
    datasets: [
      {
        label: "Sales",
        data: [100, 150, 200, 170, 120, 140, 110, 130],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: true, // Fill under the line
        tension: 0.4, // Curve the line
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const chartData = {
  labels: ["Iphone", "Samsung", "Huawei", "General Mobile", "Xiaomi"],
  data: [30, 17, 10, 7, 36],
};
const pieChart = document.querySelector(".my-chart");
const ul = document.querySelector(".details ul");
new Chart(pieChart, {
  type: "doughnut",
  data: {
    labels: chartData.labels,
    datasets: [
      {
        label: "Phones",
        data: chartData.data,
      },
    ],
  },
  options: {
    borderWidth: 2,
    borderRadius: 2,
    hoverBorderWidth: 0,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
const populateUI = () => {
  chartData.labels.forEach((l, i) => {
    let li = document.createElement("li");
    li.innerHTML = `${1}: <span class='percentage'> ${
      chartData.data[i]
    }%</span>`;
    ul.appendChild(li);
  });
};
