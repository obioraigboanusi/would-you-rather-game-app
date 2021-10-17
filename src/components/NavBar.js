import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import UserTag from "./UserTag";
const navLinks = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/add",
    text: "Add",
  },
  {
    url: "/leaderboard",
    text: "LeaderBoard",
  },
];
function NavBar({ user }) {
  const history = useHistory();
  return (
    <div className="nav-cont">
      <div className="nav">
        <div className="links">
          {navLinks.map((link) => (
            <Link
              to={link.url}
              className={history.location.pathname === link.url ? "active" : ""}
            >
              {link.text}
            </Link>
          ))}
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
