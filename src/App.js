import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import SingleMealDetails from './components/SingleMealDetails/SingleMealDetails';


function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/homes/:mealId"><SingleMealDetails /></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
