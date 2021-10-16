import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UserTag from "./UserTag";

function NavBar({ user }) {
  return (
    <div className="nav-cont">
      <div className="nav">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/add">Add</Link>
          <Link to="/leaderboard">LeaderBoard</Link>
        </div>
        {!!user && <UserTag user={user} />}
      </div>
    </div>
  );
}
function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  };
}
export default connect(mapStateToProps)(NavBar);
