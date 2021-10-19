import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import UserTag from "./UserTag";
import PropTypes from "prop-types";
const navLinks = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/add",
    text: "New Question",
  },
  {
    url: "/leaderboard",
    text: "Leader Board",
  },
];
function NavBar({ user }) {
  const history = useHistory();
  return (
    <div className="nav-cont">
      <div className="nav">
        <div className="links">
          {navLinks.map((link, index) => (
            <Link
              to={link.url}
              key={index}
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
NavBar.propTypes = {
  user: PropTypes.object,
};
export default connect(mapStateToProps)(NavBar);
