import React from "react";
import api from "../api";
import Chart from "chart.js";
import NavBar from "../UI/NavBar/NavBar";
import VisualizationTabs from "../UI/VisualizationTabs/VisualizationTabs";
class ItemComparisonVisualization extends React.Component {
  componentDidMount() {
    const node = this.node;
    var ctx = node.getContext("2d");
    var obj = api.ItemsSold;
    var item = Object.keys(obj).map(function(keys) {
      return keys;
    });
    var units = Object.keys(obj).map(function(keys) {
      return obj[keys];
    });
    var myChart = new Chart(ctx, {
      type: "polarArea",
      data: {
        labels: item,
        datasets: [
          {
            label: "Units Sold",
            data: units,
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)"
            ]
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
        <div class="valign-wrapper center">
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

export default ItemComparisonVisualization;
