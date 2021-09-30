import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import SingleMealDetails from './components/SingleMealDetails/SingleMealDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">


      <Router>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route exact path="/"><Home /></Route>
          <Route path="/homes/:mealId"><SingleMealDetails /></Route>
          <Route path="*"><PageNotFound /></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
