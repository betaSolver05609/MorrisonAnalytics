import React from "react";
import { Switch, Route } from "react-router-dom";
import Visualization from "../Pages/Visualization/Visualization";
import ItemComparison from "../Charts/ItemComparisonVisualization";
import RevenueGrowth from "../Charts/RevenueGrowthVisualization";
import RevenueFinancial from "../Charts/RevenueInFinancialYear";
import SalesVisualization from "../Charts/SalesVisualizationChart";
import HomePage from "../Pages/HomePage/HomePage";

const router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Visualization" component={Visualization} />
      <Route exact path="/ItemComparison" component={ItemComparison} />
      <Route exact path="/RevenueGrowth" component={RevenueGrowth} />
      <Route exact path="/RevenueFinancial" component={RevenueFinancial} />
      <Route exact path="/SalesVisualization" component={SalesVisualization} />
      <Route exact path="/defaultClick" component={Visualization} />
    </Switch>
  );
};

export default router;
