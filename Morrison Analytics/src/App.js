import React from "react";
import NavBar from "./UI/NavBar/NavBar";
import Search from "./UI/Search/Search";
import HomePage from "./Pages/HomePage/HomePage";
import Main from "./Router/Main";
//import BusinessInsights from './Pages/BusinessInsights/BusinessInsights'
//import Chart1 from "./Charts/RevenueInFinancialYear";
//import Chart1 from "./Charts/ItemComparisonVisualization";
class App extends React.Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
