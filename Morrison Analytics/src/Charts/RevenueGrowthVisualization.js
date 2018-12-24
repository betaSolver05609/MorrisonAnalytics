import React from "react";
import api from "../api";
import Chart from "chart.js";
import NavBar from "../UI/NavBar/NavBar";
import VisualizationTabs from "../UI/VisualizationTabs/VisualizationTabs";
class RevenueGrowthVisualization extends React.Component {
  componentDidMount() {
    const node = this.node;
    var ctx = node.getContext("2d");
    var obj = api.businessData;
    var revenue = Object.keys(obj).map(function(keys) {
      return obj[keys];
    });
    console.log(revenue);
    var myChart = new Chart(ctx, {
      type: "line",
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
            label: "Revenue this financial year",
            data: revenue,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(255, 99, 132, 0.2)"
          }
        ]
      },
      options: {
        responsive: true
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
            class="center-align white"
          />
        </div>
      </div>
    );
  }
}

export default RevenueGrowthVisualization;
