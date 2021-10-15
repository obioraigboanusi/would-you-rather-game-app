import react, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Add from "../Screens/Add";
import Home from "../Screens/Home";
import Leaderboard from "../Screens/Leaderboard";
import Login from "../Screens/Login";
import QuestionDetails from "../Screens/QuestionDetails";
import User from "../Screens/User";
import NotFound from "../Screens/NotFound";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
// import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App({ dispatch, authedUser }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        {/* <ProtectedRoute authedUser={authedUser}> */}
          <Route exact path="/" component={Home} />
        {/* </ProtectedRoute> */}
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
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
