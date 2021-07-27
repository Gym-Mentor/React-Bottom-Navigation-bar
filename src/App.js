import { Route, Switch } from "react-router-dom";
import "./App.css";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import Fifth from "./pages/Fifth";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
        <Route path="/fourth" component={Fourth} />
        <Route path="/fifth" component={Fifth} />
      </Switch>
    </div>
  );
}

export default App;
