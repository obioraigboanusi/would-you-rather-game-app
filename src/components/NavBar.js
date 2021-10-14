import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function NavBar() {
  const [fixed, setfixed] = useState(true);
  return (
    <Menu
      // fixed={fixed ? "top" : null}
      inverted
      pointing={!fixed}
      secondary={!fixed}
      size="large"
    >
      <div className="container" style={{ maxWidth: "600px" }}>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/add">Add</Link>
          <Link to="/">LeaderShip board</Link>
        </div>
      </div>
    </Menu>
  );
}

export default NavBar;
