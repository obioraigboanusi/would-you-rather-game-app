import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Add from "./Screens/Add";
import Home from "./Screens/Home";
import Leaderboard from "./Screens/Leaderboard";
import Login from "./Screens/Login";
import QuestionDetails from "./Screens/QuestionDetails";
import User from "./Screens/User";
import NotFound from "./Screens/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user" component={User} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/questions/:id" component={QuestionDetails} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
