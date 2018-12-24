import React from "react";
import { Link } from "react-router-dom";
const VisualizationTabs = () => (
  <div class="row">
    <br />
    <div class="col s12">
      <ul class="tabs">
        <li class="tab col s3">
          <Link to="/ItemComparison">Item Comparison Visualization</Link>
        </li>
        <li class="tab col s3">
          <Link to="/RevenueGrowth">Revenue Growth Visualization</Link>
        </li>
        <li class="tab col s3">
          <Link to="/RevenueFinancial">Revenue Financial Year</Link>
        </li>
        <li class="tab col s3">
          <Link to="/SalesVisualization">Sales Visualization</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default VisualizationTabs;
