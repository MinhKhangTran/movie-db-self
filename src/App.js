import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import Error from "./pages/Error";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/movies/:id">
        <SingleMovie></SingleMovie>
      </Route>
      <Route>
        <Error></Error>
      </Route>
    </Switch>
  );
}

export default App;
