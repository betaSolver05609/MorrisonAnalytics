import React from "react";
import api from "../api";
import Chart from "chart.js";
import NavBar from "../UI/NavBar/NavBar";
import VisualizationTabs from "../UI/VisualizationTabs/VisualizationTabs";
class RevenueInFinancialYear extends React.Component {
  componentDidMount() {
    const node = this.node;
    var ctx = node.getContext("2d");
    var obj = api.businessData;
    var revenue = Object.keys(obj).map(function(keys) {
      return obj[keys];
    });
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "FY2010",
          "FY2011",
          "FY2012",
          "FY2013",
          "FY2014",
          "FY2015",
          "FY2016",
          "FY2017",
          "FY2018"
        ],
        datasets: [
          {
            label: "Revenue this financial Year",
            data: revenue,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(153, 56, 192, 0.2)",
              "rgba(153, 115, 255, 0.2)",
              "rgba(226, 152 , 255, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
  render() {
    return (
      <div>
        <NavBar />
        <VisualizationTabs />
        <div class="valign-wrapper">
          <br />
          <br />
          <canvas
            style={{ width: 1600, height: 400, backgroundColor: "white" }}
            ref={node => (this.node = node)}
            class="center-align"
          />
        </div>
      </div>
    );
  }
}

export default RevenueInFinancialYear;
